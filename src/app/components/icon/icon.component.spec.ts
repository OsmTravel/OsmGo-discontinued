import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ConfigService } from '@services/config.service'

import { IconComponent } from './icon.component'
const jsonSprites: any = require('../../../assets/iconsSprites@x2.json')

describe('IconComponent', () => {
    let component: IconComponent
    let fixture: ComponentFixture<IconComponent>
    let configService: ConfigService

    beforeEach(async(() => {
        const mockConfigService = jasmine.createSpyObj<ConfigService>(
            'ConfigService',
            [],
            ['pwaBasePath']
        )
        TestBed.configureTestingModule({
            declarations: [IconComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: ConfigService, useValue: mockConfigService },
            ],
        }).compileComponents()

        configService = TestBed.inject(ConfigService)
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(IconComponent)
        component = fixture.componentInstance
        component.jsonSprites = jsonSprites
        component.icon = 'maki-bicycle'
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
