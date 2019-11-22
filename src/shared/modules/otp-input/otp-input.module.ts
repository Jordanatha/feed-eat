import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpInputComponent } from '@shared/modules/otp-input/components/otp-input.component';

@NgModule({
    imports: [CommonModule],
    declarations: [OtpInputComponent],
    exports: [OtpInputComponent],
})
export class OtpInputModule {}
