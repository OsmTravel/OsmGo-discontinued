import { Storage } from '@ionic/storage'
import { featureCollection, point } from '@turf/turf'
import {
    FeatureProperties,
    OsmGoFeature,
    OsmGoFeatureCollection,
} from '@osmgo/type'
import { DataService } from '@services/data.service'

describe('DataService', () => {
    let service: DataService
    let storageSpy: jasmine.SpyObj<Storage>

    beforeEach(() => {
        storageSpy = jasmine.createSpyObj<Storage>('Storage', [
            'get',
            'set',
            'keys',
            'remove',
            'clear',
        ])
        service = new DataService(storageSpy)
    })

    it('should be possible to clear data cache', async () => {
        // preparation
        const _deleteDatabase = window.indexedDB.deleteDatabase
        const deleteDatabaseSpy = jasmine.createSpy()
        window.indexedDB.deleteDatabase = deleteDatabaseSpy

        const _clear = localStorage.clear
        const clearSpy = jasmine.createSpy()
        localStorage.clear = clearSpy

        // test
        await service.clearCache()

        expect(storageSpy.clear.calls.count()).toBe(1)
        expect(deleteDatabaseSpy.calls.count()).toBe(1)
        expect(clearSpy.calls.count()).toBe(1)

        // cleanup
        window.indexedDB.deleteDatabase = _deleteDatabase
        localStorage.clear = _clear
    })

    describe('id generation/handling', () => {
        it('should be possible to get next free id', async () => {
            const feature = point([0, 0], { id: -10 }) as OsmGoFeature
            const fc = featureCollection([feature]) as OsmGoFeatureCollection
            await service.setFC('changed', fc)
            ;(service as any).forceNextFeatureIdSync() // ids have been set manually -> force refresh

            let actual = service.nextFeatureId
            expect(actual).toBe(-11)
            actual = service.nextFeatureId
            expect(actual).toBe(-12)
        })

        it('should be possible to replace old id format with new id format', async () => {
            const featureA = point(
                [0, 0],
                {
                    id: 'tmp_123' as any,
                    changeType: 'Create',
                    type: 'foo',
                },
                { id: 'tmp_123' }
            ) as OsmGoFeature
            const featureB = point(
                [0, 0],
                {
                    id: 123,
                    changeType: 'Create',
                    type: 'foo',
                },
                { id: 123 }
            ) as OsmGoFeature
            const fc = featureCollection([
                featureA,
                featureB,
            ]) as OsmGoFeatureCollection
            await service.setFC('changed', fc)
            ;(service as any).forceNextFeatureIdSync() // ids have been set manually -> force refresh

            await service.replaceIdGenerateByOldVersion()

            const actual = service.changedFC.features
            expect(actual[0].properties.id).toBe(0)
            expect(actual[0].id).toBe('foo/0')

            expect(actual[1].properties.id).toBe(-1)
            expect(actual[1].id).toBe('foo/-1')
        })
    })

    describe('cancel feature change', () => {
        it('cancel newly created feature', async () => {
            const originalFeature = point([0, 0], {}, { id: 3 }) as OsmGoFeature
            const changedFeature = point<Partial<FeatureProperties>>(
                [0, 0],
                {
                    changeType: 'Create',
                    originalData: originalFeature,
                },
                { id: 3 }
            ) as OsmGoFeature
            const changedFc = featureCollection([
                changedFeature,
            ]) as OsmGoFeatureCollection

            await service.setFC('changed', changedFc)

            service.cancelFeatureChange(changedFeature)

            // Copy of original feature in `originalData` property should have been re-created in the original data
            // expect(service.geojson.features[0]).toEqual(originalFeature)
            // Feature must be deleted in the changed feature collection ...
            expect(service.changedFC.features.length).toBe(0)
            // ... and it should not appear in the original dataset
            expect(service.upstreamFC.features.length).toBe(0)
        })

        it('cancel updated feature', async () => {
            const originalFeature = point([0, 0], {}, { id: 3 }) as OsmGoFeature
            const changedFeature = point<Partial<FeatureProperties>>(
                [0, 0],
                {
                    changeType: 'Update',
                    originalData: originalFeature,
                },
                { id: 3 }
            ) as OsmGoFeature
            const changedFc = featureCollection([
                changedFeature,
            ]) as OsmGoFeatureCollection

            await service.setFC('changed', changedFc)

            service.cancelFeatureChange(changedFeature)

            // Feature must be deleted in the changed feature collection ...
            expect(service.changedFC.features.length).toBe(0)

            // ...and a copy of the original feature in `originalData` property
            // should have been re-created in the original data
            expect(service.upstreamFC.features[0]).toEqual(originalFeature)
        })
    })

    describe('getFeatureById', () => {
        it('should be possible to retrieve a feature by its prop id (source: data)', () => {
            // Preparation
            const featureA = point([1, 0], {
                id: 1,
            }) as unknown as OsmGoFeature
            const featureB = point([2, 0], {
                id: 2,
            }) as unknown as OsmGoFeature
            const fc = featureCollection([
                featureA,
                featureB,
            ]) as OsmGoFeatureCollection
            service.setFC('upstream', fc)

            // test
            const actual = service.getFeatureById(2, 'data')

            expect(actual).toEqual(featureB)
        })

        it('should be possible to retrieve a feature by its prop id (source: data_changed)', async () => {
            // Preparation
            const featureA = point([1, 0], {
                id: 1,
            }) as unknown as OsmGoFeature
            const featureB = point([2, 0], {
                id: 2,
            }) as unknown as OsmGoFeature
            const fc = featureCollection([
                featureA,
                featureB,
            ]) as OsmGoFeatureCollection
            await service.setFC('changed', fc)

            // test
            const actual = service.getFeatureById(2, 'data_changed')

            expect(actual).toEqual(featureB)
        })

        it('should return null if no feature could be found', () => {
            // Preparation
            const fc = featureCollection([]) as OsmGoFeatureCollection
            service.setFC('upstream', fc)

            // test
            const actual = service.getFeatureById(2, 'data')

            expect(actual).toBeNull()
        })
    })

    describe('read/write geojson data', () => {
        describe('geojson', () => {
            it('should be possible to read geojson data', async () => {
                const sample = featureCollection([point([0, 0])])
                storageSpy.get.and.returnValue(Promise.resolve(sample))
                const obs = service.loadFC$('upstream')
                const actual = await obs.toPromise()
                expect(storageSpy.get.calls.mostRecent().args).toEqual([
                    'geojson',
                ])
                expect(actual.type).toBe('FeatureCollection')
                expect(actual.features.length).toBe(1)
            })

            it('should return empty feature collection if no data is stored', async () => {
                storageSpy.get.and.returnValue(Promise.resolve(undefined))
                const obs = service.loadFC$('upstream')
                const actual = await obs.toPromise()
                expect(storageSpy.get.calls.mostRecent().args).toEqual([
                    'geojson',
                ])
                expect(actual.type).toBe('FeatureCollection')
                expect(actual.features.length).toBe(0)
            })

            it('should be possible to set geojson data', () => {
                const fc = featureCollection([
                    point([0, 0]),
                ]) as OsmGoFeatureCollection

                service.setFC('upstream', fc)

                expect(service.upstreamFC).toEqual(fc)
                expect(storageSpy.set.calls.count()).toBe(1)
                expect(storageSpy.set.calls.mostRecent().args).toEqual([
                    'geojson',
                    fc,
                ])

                // test if object has been deeply cloned
                fc.features[0].properties.id = 123

                expect(service.upstreamFC).not.toEqual(fc)
            })

            it('should be possible to add a feature to geojson collection', () => {
                expect(service.upstreamFC.features.length).toBe(0)

                const newFeature = point([1, 2]) as OsmGoFeature
                service.addOrUpdateFeature('upstream', newFeature)

                expect(service.upstreamFC.features.length).toBe(1)
            })

            describe('modify/delete feature', () => {
                let featureA: OsmGoFeature
                let featureB: OsmGoFeature
                beforeEach(() => {
                    // Preparation
                    featureA = point([0, 0]) as OsmGoFeature
                    featureA.id = 123
                    featureB = point([0, 0]) as OsmGoFeature
                    featureB.id = 234
                    const fc = featureCollection([
                        featureA,
                        featureB,
                    ]) as OsmGoFeatureCollection

                    service.setFC('upstream', fc)

                    expect(service.upstreamFC.features.length).toBe(2)
                })

                it('should update a feature based on its id', () => {
                    // Prepare feature update
                    const newFeature = point([1, 2]) as OsmGoFeature
                    newFeature.id = featureA.id
                    newFeature.properties.hexColor = '#ccc'

                    // Apply feature update
                    service.addOrUpdateFeature('upstream', newFeature)

                    // Test if collection has been updated correctly
                    expect(
                        service.upstreamFC.features.find(
                            (feature) => feature.id === featureA.id
                        )
                    ).toEqual(newFeature)
                })

                it('should delete feature based on its id', () => {
                    // Prepare feature deletion
                    const deletionFeature = point([1, 2]) as OsmGoFeature
                    deletionFeature.id = featureA.id

                    service.deleteFeature('upstream', deletionFeature)

                    expect(
                        service.upstreamFC.features.find(
                            (feature) => feature.id === featureA.id
                        )
                    ).toBeUndefined()
                })
            })

            it('should be possible to reset data', async () => {
                const featureA = point([0, 0]) as OsmGoFeature
                const fc = featureCollection([
                    featureA,
                ]) as OsmGoFeatureCollection

                service.setFC('upstream', fc)

                expect(service.upstreamFC.features.length).toBe(1)

                await service.clear('upstream')

                expect(service.upstreamFC.features.length).toBe(0)
                expect(storageSpy.set.calls.mostRecent().args).toEqual([
                    'geojson',
                    featureCollection([]),
                ])
            })
        })

        describe('geojsonChanged', () => {
            it('should be possible to read changed geojson data', async () => {
                const sample = featureCollection([point([0, 0])])
                storageSpy.get.and.returnValue(Promise.resolve(sample))
                const obs = service.loadFC$('changed')
                const actual = await obs.toPromise()
                expect(storageSpy.get.calls.mostRecent().args).toEqual([
                    'geojsonChanged',
                ])
                expect(actual.type).toBe('FeatureCollection')
                expect(actual.features.length).toBe(1)
            })

            it('should return empty feature collection if no data is stored', async () => {
                storageSpy.get.and.returnValue(Promise.resolve(undefined))
                const obs = service.loadFC$('changed')
                const actual = await obs.toPromise()
                expect(storageSpy.get.calls.mostRecent().args).toEqual([
                    'geojsonChanged',
                ])
                expect(actual.type).toBe('FeatureCollection')
                expect(actual.features.length).toBe(0)
            })

            it('should be possible to add a feature to changed geojson collection', () => {
                expect(service.changedFC.features.length).toBe(0)

                const newFeature = point([1, 2]) as OsmGoFeature
                service.addOrUpdateFeature('changed', newFeature)

                expect(service.changedFC.features.length).toBe(1)
            })

            describe('modify/delete feature', () => {
                let featureA: OsmGoFeature
                let featureB: OsmGoFeature

                beforeEach(async () => {
                    // Preparation
                    featureA = point([0, 0]) as OsmGoFeature
                    featureA.id = 123
                    featureB = point([0, 0]) as OsmGoFeature
                    featureB.id = 234
                    const fc = featureCollection([
                        featureA,
                        featureB,
                    ]) as OsmGoFeatureCollection

                    await service.setFC('changed', fc)

                    expect(service.changedFC.features.length).toBe(2)
                })

                it('should update a feature based on its id', () => {
                    // Prepare feature update
                    const newFeature = point([1, 2]) as OsmGoFeature
                    newFeature.id = featureA.id
                    newFeature.properties.hexColor = '#ccc'

                    // Apply feature update
                    service.addOrUpdateFeature('changed', newFeature)

                    // Test if collection has been updated correctly
                    expect(
                        service.changedFC.features.find(
                            (feature) => feature.id === featureA.id
                        )
                    ).toEqual(newFeature)
                })

                it('should delete feature based on its id', () => {
                    // Prepare feature deletion
                    const deletionFeature = point([1, 2]) as OsmGoFeature
                    deletionFeature.id = featureA.id

                    service.deleteFeature('changed', deletionFeature)

                    expect(
                        service.changedFC.features.find(
                            (feature) => feature.id === featureA.id
                        )
                    ).toBeUndefined()
                })
            })

            it('should be possible to reset data', async () => {
                const featureA = point([0, 0]) as OsmGoFeature
                const fc = featureCollection([
                    featureA,
                ]) as OsmGoFeatureCollection

                await service.setFC('changed', fc)

                expect(service.changedFC.features.length).toBe(1)

                await service.clear('changed')

                expect(service.changedFC.features.length).toBe(0)
                expect(storageSpy.set.calls.mostRecent().args).toEqual([
                    'geojsonChanged',
                    featureCollection([]),
                ])
            })
        })

        describe('geojsonBbox', () => {
            it('should be possible to read bbox geojson data', async () => {
                const sample = featureCollection([point([0, 0])])
                storageSpy.get.and.returnValue(Promise.resolve(sample))
                const obs = service.loadFC$('bbox')
                const actual = await obs.toPromise()
                expect(storageSpy.get.calls.mostRecent().args).toEqual([
                    'geojsonBbox',
                ])
                expect(actual.type).toBe('FeatureCollection')
                expect(actual.features.length).toBe(1)
            })

            it('should return empty feature collection if no data is stored', async () => {
                storageSpy.get.and.returnValue(Promise.resolve(undefined))
                const obs = service.loadFC$('bbox')
                const actual = await obs.toPromise()
                expect(storageSpy.get.calls.mostRecent().args).toEqual([
                    'geojsonBbox',
                ])
                expect(actual.type).toBe('FeatureCollection')
                expect(actual.features.length).toBe(0)
            })

            it('should be possible to write bbox geojson data', () => {
                const fc = featureCollection([
                    point([0, 0]),
                ]) as OsmGoFeatureCollection
                service.setFC('bbox', fc)

                expect(service.bboxFC).toEqual(fc)
                // ensure that data is persisted in storage
                expect(storageSpy.set.calls.count()).toBe(1)
                expect(storageSpy.set.calls.mostRecent().args).toEqual([
                    'geojsonBbox',
                    fc,
                ])
            })

            it('should be possible to get bbox geojson data', () => {
                const fc = featureCollection([
                    point([0, 0]),
                ]) as OsmGoFeatureCollection
                service.setFC('bbox', fc)

                const actual = service.bboxFC

                expect(actual).toEqual(fc)
            })

            it('should be possible to reset bbox geojson data', async () => {
                const fc = featureCollection([
                    point([0, 0]),
                ]) as OsmGoFeatureCollection
                service.setFC('bbox', fc)

                expect(service.bboxFC.features.length).toBe(1)

                const actual = await service.clear('bbox')

                expect(service.bboxFC.features.length).toBe(0)
                expect(actual.features.length).toBe(0)
            })
        })
    })
})
