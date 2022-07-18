import { Component, OnInit, Input } from '@angular/core'
import { ConfigService } from '@app/services/config.service'

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
    @Input() jsonSprites
    @Input() icon
    currentSpriteConfig
    styleBackgroundPosition
    devicePixelRatio

    constructor(public configService: ConfigService) {}

    ngOnInit() {
        this.devicePixelRatio = window.devicePixelRatio > 1 ? 2 : 1
    }

    get spriteUrl() {
        const basePath = this.configService.pwaBasePath
        return `url(${basePath}/assets/iconsSprites@x${this.devicePixelRatio}.png)`
    }
}
