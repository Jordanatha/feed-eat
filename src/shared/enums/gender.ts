import { Color } from '@shared/enums/ui';
import { EnumOption } from '@shared/enums/enum-option';
import { NullEnumOption } from '@shared/models/null-enum-option';

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export namespace Gender {
    export function getValues(): EnumOption<Gender>[] {
        return [
            {
                id: Gender.MALE,
                text: 'Laki-laki',
                color: Color.Primary,
            },
            {
                id: Gender.FEMALE,
                text: 'Perempuan',
                color: Color.Danger,
            },
        ];
    }

    export function find(gender: Gender): EnumOption<Gender> {
        const finded = Gender.getValues().find(item => item.id === gender);

        return finded ? finded : new NullEnumOption();
    }
}
