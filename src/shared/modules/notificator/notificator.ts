import { Injectable } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { NotificatorConfig } from '@shared/modules/notificator/notificator.config';

@Injectable({ providedIn: 'root' })
export class Notificator {
    public constructor(private config: NotificatorConfig, private notificationService: NotificationService) {}

    public success(message: string): void {
        if (this.config.disabled) {
            return;
        }

        this.notificationService.show({
            content: message,
            animation: { duration: 400 },
            position: { horizontal: 'right', vertical: 'bottom' },
            type: { style: 'success', icon: true },
            hideAfter: this.config.autoHideSuccess ? 3000 : null,
            closable: !this.config.autoHideSuccess,
        });
    }

    public error(message: string): void {
        if (this.config.disabled) {
            return;
        }

        this.notificationService.show({
            content: message,
            animation: { duration: 400 },
            position: { horizontal: 'right', vertical: 'bottom' },
            type: { style: 'error', icon: true },
            hideAfter: this.config.autoHideError ? 3000 : null,
            closable: !this.config.autoHideError,
        });
    }
}
