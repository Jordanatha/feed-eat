import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfirmationService {
    private readonly confirmingSubject: BehaviorSubject<boolean>;
    private readonly confirmedSubject: BehaviorSubject<boolean>;
    private readonly titleSubject: BehaviorSubject<string>;

    public constructor() {
        this.confirmingSubject = new BehaviorSubject<boolean>(false);
        this.confirmedSubject = new BehaviorSubject<boolean>(false);
        this.titleSubject = new BehaviorSubject<string>('Aksi ini bersifat permanen, apakah Anda yakin ingin melanjutkan?');
    }

    public get confirming$(): Observable<boolean> {
        return this.confirmingSubject.asObservable();
    }

    public get confirmed$(): Observable<boolean> {
        return this.confirmedSubject.asObservable();
    }

    public get title$(): Observable<string> {
        return this.titleSubject.asObservable();
    }

    public confirming(confirm: boolean, title?: string): void {
        this.confirmingSubject.next(confirm);
        if (title) {
            this.titleSubject.next(title);
        }
    }

    public confirmed(yes: boolean): void {
        this.confirmedSubject.next(yes);
    }
}
