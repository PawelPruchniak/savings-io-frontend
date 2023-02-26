import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, shareReplay, startWith } from 'rxjs';
import { ObjectState } from '@savings-io/shared/commons';

@Injectable({
  providedIn: 'root',
})
export class CommonsService {
  public prepareObjectState(content$: Observable<any>) {
    const data$ = content$.pipe(shareReplay(1));
    return {
      content$: data$,
      loading$: data$.pipe(
        map(() => false),
        startWith(true),
        catchError(() => of(false)),
      ),
      error$: data$.pipe(catchError((e) => of(e))),
    } as ObjectState<any>;
  }
}
