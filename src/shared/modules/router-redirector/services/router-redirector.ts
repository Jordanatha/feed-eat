import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterRedirectorConfig } from '@shared/modules/router-redirector/common/router-redirector.config';

@Injectable({ providedIn: 'root' })
export class RouterRedirector {
    public constructor(private activatedRoute: ActivatedRoute, private router: Router, private config: RouterRedirectorConfig) {}

    public get previousUrl(): string {
        return this.router.routerState.snapshot.url;
    }

    public get currentPreviousUrl(): string {
        return this.activatedRoute.snapshot.queryParams[this.config.redirectKey];
    }

    public parseWithPreviousUrl(url: string): string {
        if (this.currentPreviousUrl) {
            return `${url}?${this.config.redirectKey}=${this.currentPreviousUrl}`;
        }

        return `${url}`;
    }

    public redirect(url: string, activatedRoute?: ActivatedRoute): void {
        if (activatedRoute) {
            this.router.navigateByUrl(url, { relativeTo: activatedRoute });
        } else {
            this.router.navigateByUrl(url);
        }
    }

    public redirectWithPrev(url: string, activatedRoute: ActivatedRoute, query?: any): void {
        const previousUrl = this.router.routerState.snapshot.url;

        const queryParams: any = {
            [this.config.redirectKey]: previousUrl,
            ...query,
        };

        this.router.navigate([url], { queryParams, relativeTo: activatedRoute });
    }

    public navigateWithPrev(url: string, activatedRoute: ActivatedRoute, query?: any): void {
        const queryParams: any = {
            [this.config.redirectKey]: this.currentPreviousUrl,
            ...query,
        };

        this.router.navigate([url], { queryParams, relativeTo: activatedRoute });
    }

    public navigateBack(): void {
        if (this.currentPreviousUrl) {
            this.router.navigateByUrl(this.currentPreviousUrl);
            return;
        }

        this.router.navigate(['/']);
    }

    public back(fallbackUrl?: string, activatedRoute?: ActivatedRoute): void {
        const previousUrl = this.activatedRoute.snapshot.queryParams[this.config.redirectKey];

        if (previousUrl) {
            this.redirect(previousUrl, activatedRoute);
        } else {
            this.redirect(fallbackUrl, activatedRoute);
        }
    }

    public getBack(fallbackUrl?: string): string {
        const previousUrl = this.activatedRoute.snapshot.queryParams[this.config.redirectKey];

        if (previousUrl) {
            return previousUrl;
        }

        return fallbackUrl;
    }

    public reload(): void {
        this.router.navigate([], {
            queryParamsHandling: 'merge',
            queryParams: { timestamp: Math.random() },
            relativeTo: this.activatedRoute,
        });
    }
}
