import {BehaviorSubject, Observable} from "rxjs";

export abstract class AuthService {
  protected userLoggedSubject: BehaviorSubject<boolean>;

  userLogged$: Observable<boolean>;

  protected constructor(initialState: boolean) {
    this.userLoggedSubject = new BehaviorSubject<boolean>(initialState);
    this.userLogged$ = this.userLoggedSubject.asObservable();
  }

  abstract login(): void;
  abstract logout(): void;
}
