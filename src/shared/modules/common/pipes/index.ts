import { GenderPipe } from '@shared/modules/common/pipes/gender.pipe';
import { HtmlSanitizerPipe } from '@shared/modules/common/pipes/html-sanitizer.pipe';
import { MaritalStatusPipe } from '@shared/modules/common/pipes/marital-status.pipe';
import { NullStripPipe } from '@shared/modules/common/pipes/null-strip.pipe';
import { TimeAgoPipe } from '@shared/modules/common/pipes/time-ago.pipe';
import { UrlSanitizerPipe } from '@shared/modules/common/pipes/url-sanitizer.pipe';

export const SHARED_COMMON_PIPES: any[] = [GenderPipe, HtmlSanitizerPipe, MaritalStatusPipe, NullStripPipe, TimeAgoPipe, UrlSanitizerPipe];
