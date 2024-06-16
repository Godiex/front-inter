import { Injectable } from "@angular/core";
import {AuthService} from "@core/services/auth-service.interface";

@Injectable({
  providedIn: "root",
})
export class AuthRepository extends AuthService {
  constructor() {

    const storedState = localStorage.getItem('userLogged');
    const initialLoggedState = storedState !== null ? JSON.parse(storedState) : false;
    super(initialLoggedState);
  }

  login(): void {
    this.userLoggedSubject.next(true);
    localStorage.setItem('userLogged', JSON.stringify(true));
  }

  logout(): void {
    this.userLoggedSubject.next(false);
    localStorage.setItem('userLogged', JSON.stringify(false));
  }
}
