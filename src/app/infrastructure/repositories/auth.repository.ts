import { Injectable } from "@angular/core";
import { Paginated } from "@core/models/paginated.interface";
import { CreateStudent } from "@core/models/student/create-student.model";
import { User } from "@core/models/student/student.model";
import { StudentService } from "@core/services/user-service.interface";
import { environment, resources } from "@env/environment";
import { HttpService } from "@infrastructure/http/http.service";
import { Observable, concatMap, map } from "rxjs";
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
