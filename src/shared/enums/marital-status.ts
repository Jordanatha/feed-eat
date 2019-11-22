import { NullEnumOption } from '@shared/models/null-enum-option';
import { Color } from '@shared/enums/ui';
import { EnumOption } from '@shared/enums/enum-option';

export enum MaritalStatus {
    MARRIED = 'married',
    SINGLE = 'single',
    DIVORCED = 'divorced',
}

export namespace MaritalStatus {
    export function getValues(): EnumOption<MaritalStatus>[] {
        return [
            { id: MaritalStatus.MARRIED, text: 'Sudah Menikah', color: Color.Success },
            { id: MaritalStatus.SINGLE, text: 'Lajang / Belum Menikah', color: Color.Primary },
            { id: MaritalStatus.DIVORCED, text: 'Cerai', color: Color.Danger },
        ];
    }

    export function find(status: MaritalStatus): EnumOption<MaritalStatus> {
        const finded = MaritalStatus.getValues().find(item => item.id === status);

        return finded ? finded : new NullEnumOption();
    }
}
