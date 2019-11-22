import { ImageAsyncConfig } from '@shared/modules/image-async/image-async.config';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChildren } from '@angular/core';

@Component({
    selector: 'image-async',
    templateUrl: './image-async.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./image-async.component.scss'],
})
export class ImageAsyncComponent implements OnChanges {
    @Input() public path: string;
    @Input() public title: string;
    @Input() public showingUser: boolean;
    @Input() public nativeClass: string;
    @Input() public nativeStyle: any;

    @ViewChildren('imageAsync') public img: ElementRef;

    public loading: boolean;
    public userProfileImage: string;
    public defaultImage: string;
    public loadingImage: string;

    public constructor(config: ImageAsyncConfig) {
        this.userProfileImage = config.fallbackProfilePath;
        this.defaultImage = config.fallbackImagePath;
        this.loadingImage = config.loadingPath;
    }

    public ngOnChanges(): void {
        this.loading = true;

        if (!this.path) {
            this.path = !this.showingUser ? this.defaultImage : this.userProfileImage;
        }

        const image = new Image();
        image.onload = () => {
            this.loading = false;
            this.img.nativeElement.src = image.src;
        };
        image.onerror = () => {
            this.loading = false;
            this.img.nativeElement.src = !this.showingUser ? this.defaultImage : this.userProfileImage;
        };
        image.src = this.path;
    }
}
