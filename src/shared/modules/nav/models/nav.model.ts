export class Nav {
    public active: boolean;
    public disabled: boolean;
    public id: string;
    public link: string;
    public title: string;
    public style?: any;
    public summary?: any;

    public constructor(data: Partial<Nav>) {
        Object.assign(this, data);
    }
}
