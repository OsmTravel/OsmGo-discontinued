import { Injectable, EventEmitter } from '@angular/core'
import { Storage } from '@ionic/storage-angular'
import { cloneDeep } from 'lodash'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import {
    OsmGoFeatureCollection,
    OsmGoFeature,
    FeatureIdSource,
    OsmGoFCStorage,
    OsmGoStorageKey,
} from '@osmgo/type'
import { feature, featureCollection } from '@turf/turf'

@Injectable({ providedIn: 'root' })
export class DataService {
    eventNewPage = new EventEmitter()

    /**
     * Primary data storage for official OSM POIs.
     * Don't read from this value directly. Instead use the `geojson` member
     * variable.
     *
     * A hashmap is used to have a constant time complexity when looking up
     * entries with a known ID.
     */
    _geojson: Record<string, OsmGoFeature> = {}

    /**
     * Primary data storage for self-created or modified POIs.
     * Don't read from this value directly. Instead use the `geojsonChanged`
     * member variable.
     *
     * A hashmap is used to have a constant time complexity when looking up
     * entries with a known ID.
     */
    _geojsonChanged: Record<string, OsmGoFeature> = {}

    geojsonWay: OsmGoFeatureCollection = featureCollection(
        []
    ) as OsmGoFeatureCollection
    geojsonBbox: OsmGoFeatureCollection = featureCollection(
        []
    ) as OsmGoFeatureCollection

    /** Next unused ID that can be used for a new feature. */
    private _nextFeatureId = 0

    constructor(public localStorage: Storage) {}

    /**
     * Getter that translates the internal storage representation of OSM POIs
     * into a geojson feature collection.
     *
     * Data source is the `_geojson` member variable.
     */
    get geojson(): OsmGoFeatureCollection {
        const fc = featureCollection([]) as OsmGoFeatureCollection
        fc.features = Object.values(this._geojson)
        return fc
    }

    /**
     * Getter that translates the internal storage representation of
     * self-created or modified POIs into a geojson feature collection.
     *
     * Data source is the `_geojsonChanged` member variable.
     */
    get geojsonChanged(): OsmGoFeatureCollection {
        const fc = featureCollection([]) as OsmGoFeatureCollection
        fc.features = Object.values(this._geojsonChanged)
        return fc
    }

    private getStorageKey(type: OsmGoFCStorage): OsmGoStorageKey {
        switch (type) {
            case 'upstream':
                return 'geojson'
            case 'changed':
                return 'geojsonChanged'
            case 'bbox':
                return 'geojsonBbox'
        }
    }

    loadGeojson$(type: OsmGoFCStorage): Observable<OsmGoFeatureCollection> {
        const storageKey = this.getStorageKey(type)
        return from(this.localStorage.get(storageKey)).pipe(
            map((geojson: OsmGoFeatureCollection) => {
                geojson = geojson
                    ? geojson
                    : (featureCollection([]) as OsmGoFeatureCollection)
                for (const feature of geojson.features) {
                    this._geojson[feature.id] = feature
                }
                if (type === 'changed') {
                    // At this point we know previously created elements from which we can determine the min ID.
                    this.forceNextFeatureIdSync()
                }
                return geojson
            })
        )
    }

    async clearCache(): Promise<void> {
        try {
            await this.localStorage.clear()
        } catch (error) {
            console.log(error)
        }

        try {
            const dbDeleteReq = window.indexedDB.deleteDatabase('_ionickv')
        } catch (error) {
            console.log(error)
        }
        localStorage.clear()
    }

    async setGeojson(
        type: OsmGoFCStorage,
        fc: OsmGoFeatureCollection
    ): Promise<OsmGoFeatureCollection> {
        switch (type) {
            case 'bbox':
                this.geojsonBbox = fc
                break
            case 'changed':
                this._geojsonChanged = {}
                for (const feature of fc.features) {
                    this._geojsonChanged[feature.id] = cloneDeep(feature)
                }
                break
            case 'upstream':
                this._geojson = {}
                for (const feature of fc.features) {
                    this._geojson[feature.id] = cloneDeep(feature)
                }
                break
        }

        const storageKey = this.getStorageKey(type)
        await this.localStorage.set(storageKey, fc)
        return Promise.resolve(fc)
    }

    async resetGeojson(type: OsmGoFCStorage): Promise<OsmGoFeatureCollection> {
        const fc = featureCollection([]) as OsmGoFeatureCollection
        if (type === 'changed') {
            this._nextFeatureId = 0
        }
        await this.setGeojson(type, fc)
        return Promise.resolve(fc)
    }

    addOrUpdateFeature(
        type: OsmGoFCStorage,
        feature: OsmGoFeature
    ): Promise<any> {
        switch (type) {
            case 'bbox':
                const index = this.geojsonBbox.features.findIndex(
                    (f) => f.properties.id === feature.properties.id
                )
                if (index >= 0) {
                    this.geojsonBbox.features.splice(index, 1)
                }
                this.geojsonBbox.features.push(feature)
                return this.setGeojson(type, this.geojsonBbox)
            case 'changed':
                this._geojsonChanged[feature.id] = feature
                return this.setGeojson(type, this.geojsonChanged)
            case 'upstream':
                this._geojson[feature.id] = feature
                return this.setGeojson(type, this.geojson)
        }
    }

    deleteFeature(type: OsmGoFCStorage, feature: OsmGoFeature): void {
        switch (type) {
            case 'bbox':
                this.geojsonBbox.features.push(feature)
                const index = this.geojsonBbox.features.findIndex(
                    (f) => f.properties.id === feature.properties.id
                )
                this.geojsonBbox.features.splice(index, 1)
                this.setGeojson(type, this.geojsonBbox)
                break
            case 'changed':
                delete this._geojsonChanged[feature.id]
                this.setGeojson(type, this.geojsonChanged)
                break
            case 'upstream':
                delete this._geojson[feature.id]
                this.setGeojson(type, this.geojson)
                break
        }
    }

    getGeojsonBbox(): OsmGoFeatureCollection {
        return this.geojsonBbox
    }

    setGeojsonWay(data: OsmGoFeatureCollection): void {
        this.geojsonWay = cloneDeep(data)
    }

    addFeatureToGeojsonWay(feature: OsmGoFeature) {
        this.geojsonWay.features.push(feature)
    }

    getGeojson(): OsmGoFeatureCollection {
        if (this.geojson) {
            return this.geojson
        } else {
            return featureCollection([]) as OsmGoFeatureCollection
        }
    }

    /**
     * Looks up a feature with a given ID.
     *
     * If the source is `data`, the original OSM geojson features are searched
     * through, otherwise the local modified features are used for the lookup.
     *
     * @returns A deep copy of the feature if found, null otherwise.
     */
    getFeatureById(id: number, source: FeatureIdSource): OsmGoFeature | null {
        const features =
            source === 'data_changed'
                ? this.getGeojsonChanged().features
                : this.getGeojson().features

        for (let i = 0; i < features.length; i++) {
            if (features[i].properties.id === id) {
                return cloneDeep(features[i])
            }
        }

        return null
    }

    /**
     * Retrieve a geojson feature collection of all changed
     * (created/modified/deleted) elements.
     *
     * @returns A deep copy of the geojson feature collection of all changed
     * elements.
     */
    getGeojsonChanged(): OsmGoFeatureCollection {
        return cloneDeep(this.geojsonChanged)
    }

    /** Returns the next available identifier for a feature (auto-incremented). */
    get nextFeatureId() {
        return this._nextFeatureId--
    }

    /**
     * Synchronizes the next feature ID by looping through all existing changes
     * and identifying the lowest ID.
     * Looping through all entries is slow. Use this method only if really
     * needed, e.g., if a new feature collection is set from outside the
     * service.
     */
    private forceNextFeatureIdSync(): void {
        const ids = Object.values(this._geojsonChanged)
            .map((feature) => feature.properties.id)
            // in the new format only non-positive values are allowed, skip all
            // others
            .filter((id) => id <= 0)
        this._nextFeatureId = ids.length > 0 ? Math.min(...ids) - 1 : 0
    }

    // replace id generate by version <= 1.5 (tmp_123) by -1, -2 etc...
    async replaceIdGenerateByOldVersion(): Promise<void> {
        for (const [id, feature] of Object.entries(this._geojsonChanged)) {
            if (
                feature.properties.changeType == 'Create' &&
                (!Number.isInteger(feature.properties.id) ||
                    feature.properties.id >= 0)
            ) {
                const nextId = this.nextFeatureId
                feature.properties.id = nextId
                feature.id = `${feature.properties.type}/${nextId}`
                console.info('FIXE :', feature.id, feature.properties.id)

                this._geojsonChanged[feature.id] = feature
                delete this._geojsonChanged[id]
            }
        }
        await this.setGeojson('changed', this.getGeojsonChanged())
    }

    getCountGeojsonChanged(): number {
        if (this.getGeojsonChanged().features) {
            return this.getGeojsonChanged().features.length
        } else {
            return 0
        }
    }

    getMergedGeojsonGeojsonChanged(): OsmGoFeatureCollection {
        // stock les id dans un array
        const changedIds = Object.keys(this._geojsonChanged)
        // DELETE from GEOJSON
        for (const id of changedIds) {
            delete this._geojson[id]
        }
        // ADD to geojson
        for (const feature of Object.values(this._geojsonChanged)) {
            this._geojson[feature.id] = feature
        }
        return cloneDeep(this.geojson)
    }

    cancelFeatureChange(feature: OsmGoFeature): void {
        const originalFeature = cloneDeep(feature.properties.originalData)
        this.deleteFeature('changed', feature)
        // this.deleteFeatureFromGeojson(feature);
        if (feature.properties.changeType !== 'Create') {
            this.addOrUpdateFeature('upstream', originalFeature)
        }
    }

    // supprime l'intégralité des changements
    async resetGeojsonChanged(): Promise<void> {
        this._geojsonChanged = {}
        await this.localStorage.set('geojsonChanged', this.geojsonChanged)
        this._nextFeatureId = 0
    }
}
