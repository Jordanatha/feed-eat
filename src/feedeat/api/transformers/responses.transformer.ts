import { OperatorFunction, UnaryFunction } from 'rxjs/interfaces';
import { Observable } from 'rxjs/Observable';
import { pipe } from 'rxjs/util/pipe';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import { Collection } from '@shared/types/collection';
import { GridData } from '@shared/types/grid';

export function mapToArrayClass<T>(type: { new (): T }): UnaryFunction<Observable<any>, Observable<T[]>> {
    return pipe(
        map(data => {
            if (Array.isArray(data)) {
                return plainToClass(type, data);
            }

            throw new Error('The data is not an array');
        }),
    );
}

export function mapToClass<T>(type: { new (): T }): UnaryFunction<Observable<any>, Observable<T>> {
    return pipe(
        map(data => {
            if (!Array.isArray(data)) {
                return plainToClass(type, <T>data);
            }

            throw new Error('The data is an array');
        }),
    );
}

export function mapToData<T extends HttpResponse<any>>(): UnaryFunction<Observable<any>, Observable<any>> {
    return pipe(
        map((res: any) => {
            if (res.data) {
                return res.data;
            }

            throw new Error('There are no body to be transformed');
        }),
    );
}

export function mapToCollection<T>(type: { new (): T }): OperatorFunction<any, Collection<T>> {
    return pipe(
        map((res: any) => {
            const { perPage, currentPage, total, lastPage } = res.meta.pagination;

            return {
                total,
                lastPage,
                data: plainToClass(type, res.data),
                limit: perPage,
                page: currentPage,
            };
        }),
    );
}

export function mapToGridData<T>(type: { new (): T }): OperatorFunction<Collection<T>, GridData<T>> {
    return pipe(
        map((collection: Collection<T>) => {
            if (!collection) {
                return null;
            }

            return {
                data: {
                    data: collection.data,
                    total: collection.total,
                },
                limit: collection.limit,
                skip: collection.limit * (collection.page - 1),
            };
        }),
    );
}
