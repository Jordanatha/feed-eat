import { APP_INITIALIZER, Provider } from '@angular/core';

export function APP_INITIALIZER_FACTORY(): () => Promise<void> {
    return () => {
        return new Promise<void>(async resolve => {
            resolve();
        });
    };
}

export const FEEDEAT_APP_INITIALIZER: Provider = {
    useFactory: APP_INITIALIZER_FACTORY,
    provide: APP_INITIALIZER,
    deps: [],
    multi: true,
};
