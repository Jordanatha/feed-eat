import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMAGE_ASYNC_COMPONENTS } from '@shared/modules/image-async/components';
import { IMAGE_ASYNC_DIRECTIVES } from '@shared/modules/image-async/directives';
import { ImageAsyncConfig } from '@shared/modules/image-async/image-async.config';

@NgModule({
    imports: [CommonModule],
    declarations: [...IMAGE_ASYNC_COMPONENTS, ...IMAGE_ASYNC_DIRECTIVES],
    exports: [...IMAGE_ASYNC_COMPONENTS, ...IMAGE_ASYNC_DIRECTIVES],
})
export class ImageAsyncModule {
    public static forRoot(config: Partial<ImageAsyncConfig> = {}): ModuleWithProviders {
        return {
            ngModule: ImageAsyncModule,
            providers: [
                {
                    provide: ImageAsyncConfig,
                    useValue: {
                        loadingPath: config.loadingPath || 'assets/images/loading.svg',
                        fallbackProfilePath: config.fallbackProfilePath || 'assets/images/user-profile.jpg',
                        fallbackImagePath: config.fallbackImagePath || 'assets/images/no-image.svg',
                    },
                },
            ],
        };
    }
}
