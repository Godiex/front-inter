import { Injectable } from "@angular/core";
import { Paginated } from "@core/models/paginated.interface";
import { CreateStudent } from "@core/models/student/create-student.model";
import { User } from "@core/models/student/student.model";
import { StudentService } from "@core/services/user-service.interface";
import { environment, resources } from "@env/environment";
import { HttpService } from "@infrastructure/http/http.service";
import { Observable, concatMap, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserRepository extends StudentService {
  baseUrl = `${environment.apiUrl}${environment.apiSuffix}${resources.user}`;
  constructor(protected httpService: HttpService) {
    super();
  }
  override createStudent(user: CreateStudent): Observable<void> {
    return this.httpService.doPost<CreateStudent, void>(this.baseUrl, user);
  }

  override getAll(
    identification: string,
    subjectId: string
  ): Observable<any> {
    return this.httpService.doGet<User[]>(
      `${this.baseUrl}/${identification}/${subjectId}`
    );
  }
}
