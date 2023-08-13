import { BehaviorSubject, Observable } from 'rxjs';

export interface ObjectState<T> {
  content$: BehaviorSubject<T | any>;
  loading$: Observable<boolean>;
  error$: Observable<Error | undefined>;
}
