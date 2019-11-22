import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { mapToArrayClass, mapToClass, mapToData } from '@feedeat/api/transformers/responses.transformer';

export abstract class KbjiResourceInputService<T> extends BehaviorSubject<T[] | null> {
    public readonly _loading: BehaviorSubject<boolean>;

    protected abstract path: string;
    protected field: string;
    protected queries: any;

    protected constructor(protected client: HttpClient) {
        super(null);

        this._loading = new BehaviorSubject<boolean>(false);
        this.field = 'keyword';
        this.queries = {
            [this.field]: '',
            limit: 10,
        };
    }

    public get loading$(): Observable<boolean> {
        return this._loading.asObservable();
    }

    public fetchById(id: string): Observable<T> {
        return this.client.get<any>(`${this.path}/${id}`).pipe(
            mapToData(),
            mapToClass(this.type()),
            map((response: T) => {
                return this.map(response);
            }),
        );
    }

    public fetch(input?: string): Observable<T[] | null> {
        if (input !== null) {
            this.queries[this.field] = input;
            this.queries['limit'] = 10;
        }

        return this.client.get(`${this.path}`, { params: this.queries }).pipe(
            mapToData(),
            mapToArrayClass(this.type()),
            map((response: T[]) => {
                return response.map((item: T) => {
                    return this.map(item);
                });
            }),
        );
    }

    public changePath(path: string): void {
        this.path = path;
    }

    public changeField(field: string): void {
        this.field = field;
    }

    public getPath(): string {
        return this.path;
    }

    public changeQueries(queries: any): void {
        this.queries = queries;
    }

    protected abstract type(): any;

    protected abstract map(item: T): any;
}
