import { ModuleWithProviders, NgModule } from '@angular/core';
import { EnvConfig } from '@shared/modules/env/env.config';
import { ENV_PIPES } from '@shared/modules/env/pipes';
import { CommonModule } from '@angular/common';

const MODULES: any[] = [CommonModule];

@NgModule({
    declarations: [...ENV_PIPES],
    imports: [...MODULES],
    exports: [...ENV_PIPES],
})
export class EnvModule {
    public static forRoot(config: Partial<EnvConfig> = {}): ModuleWithProviders {
        return {
            ngModule: EnvModule,
            providers: [
                {
                    provide: EnvConfig,
                    useValue: {
                        environment: config.environment || {},
                    },
                },
            ],
        };
    }
}
