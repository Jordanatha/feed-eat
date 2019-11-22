import { ErrorMessages, Rule } from '@ubud/form';

export class SearchRule extends Rule {
    public get errorMessages(): ErrorMessages {
        return {
            keyword: {
                required: (params: any) => 'Kolom kata kunci tidak boleh kosong',
            },
        };
    }

    public get keyword(): Function | null {
        return null;
    }

    public getFormControls(): { [p: string]: any } {
        return {
            keyword: ['', this.keyword],
        };
    }
}
