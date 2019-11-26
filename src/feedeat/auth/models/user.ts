import { UUIDModel } from '../../../shared/models/uuid-model';

export class User extends UUIDModel<User> {
    public username: string;
    public name: string;
    public email: string;
    public mobile: string;
    public gender: number;
    public status: string;
}
