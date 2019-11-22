import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'urlSanitizer' })
export class UrlSanitizerPipe implements PipeTransform {
    public constructor(private sanitizer: DomSanitizer) {}

    public transform(url: string): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
