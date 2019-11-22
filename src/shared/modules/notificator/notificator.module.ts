import { ModuleWithProviders, NgModule } from '@angular/core';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { Notificator } from '@shared/modules/notificator/notificator';
import { NotificatorConfig } from '@shared/modules/notificator/notificator.config';

@NgModule({
    imports: [NotificationModule],
})
export class NotificatorModule {
    public static forRoot(config: Partial<NotificatorConfig> = {}): ModuleWithProviders {
        return {
            ngModule: NotificatorModule,
            providers: [
                Notificator,
                {
                    provide: NotificatorConfig,
                    useValue: {
                        disabled: config.disabled || false,
                        autoHideError: config.autoHideError,
                        autoHideSuccess: config.autoHideSuccess,
                    },
                },
            ],
        };
    }
}
