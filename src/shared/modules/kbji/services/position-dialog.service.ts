import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Position } from '@shared/modules/kbji/models/position';

@Injectable()
export class PositionDialogService {
    private readonly openSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private readonly selectedSubject: BehaviorSubject<Position | null> = new BehaviorSubject(null);

    public get open$(): Observable<boolean> {
        return this.openSubject.asObservable();
    }

    public get selected$(): Observable<Position | null> {
        return this.selectedSubject.asObservable();
    }

    public toggle(open: boolean): void {
        this.openSubject.next(open);
    }

    public select(position: Position): void {
        this.selectedSubject.next(position);
        this.toggle(false);
    }
}
