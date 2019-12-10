import { UUIDModel } from '@shared/models/uuid-model';
import { Type } from 'class-transformer';
import { forwardRef } from '@angular/core';
import { User } from '@feedeat/auth/models/user';

export class Customer extends UUIDModel<Customer> {
    public address: string;
    public birthDate: string;
    public firstName: string;
    public lastName: string;
    public userId: string;

    @Type(forwardRef(() => User) as any)
    public user: User;
}
