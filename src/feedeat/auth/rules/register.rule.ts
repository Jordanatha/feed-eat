import { ErrorMessages, Rule } from '@ubud/form';
import { ValidatorUtil } from '@shared/utils/validator.util';
import { Validators } from '@angular/forms';

export class RegisterRule extends Rule {
    public get errorMessages(): ErrorMessages {
        return {
            email: {
                required: (params: any) => 'Email harus diisi',
                email: (params: any) => 'Format email tidak benar',
            },
            password: {
                required: (params: any) => 'Password harus diisi',
            },
            passwordConfirmation: {
                required: (params: any) => 'Konfirmasi password harus diisi',
                match: (params: any) => 'Password tidak sama',
            },
            firstName: {
                required: (params: any) => 'Nama harus diisi',
            },
            lastName: {
                required: (params: any) => 'Nama Akhir harus diisi',
            },
            birthDate: {
                required: (params: any) => 'Tanggal lahir harus diisi',
            },
            address: {
                required: (params: any) => 'Alamat harus diisi',
            },
            phone: {
                required: (params: any) => 'Nomor Handphone harus diisi',
            },
        };
    }

    public get email(): Function[] {
        return [Validators.required, Validators.email];
    }

    public get password(): Function[] {
        return [Validators.required];
    }

    public get passwordConfirmation(): Function[] {
        return [Validators.required, ValidatorUtil.matchValidator('password')];
    }

    public get firstName(): Function[] {
        return [Validators.required];
    }

    public get lastName(): Function[] {
        return [Validators.required];
    }

    public get birthDate(): Function[] {
        return [Validators.required];
    }

    public get address(): Function[] {
        return [Validators.required];
    }

    public get phone(): Function[] {
        return [Validators.required];
    }

    public getFormControls(): { [p: string]: any } {
        return {
            email: ['', this.email],
            password: ['', this.password],
            passwordConfirmation: ['', this.passwordConfirmation],
            firstName: ['', this.firstName],
            lastName: ['', this.lastName],
            birthDate: ['', this.birthDate],
            address: ['', this.address],
            phone: ['', this.phone],
        };
    }
}
