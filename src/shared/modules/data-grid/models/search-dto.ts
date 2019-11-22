export class SearchDto {
    public keyword: string;

    public constructor(data?: Partial<SearchDto>) {
        Object.assign(this, data);
    }
}
