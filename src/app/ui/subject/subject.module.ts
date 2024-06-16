import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpService } from "@infrastructure/http/http.service";

import { CreateUserComponent } from "./add-subjects/create-user.component";
import { UserRoutingModule } from "./subject-routing.module";
import { UserComponent } from "./subject.component";
import { SubjectListComponent } from "./subject-list/subject-list.component";
import { StudentService } from "@core/services/user-service.interface";
import { StudentRepository } from "@infrastructure/repositories/student-repository.service";
import {ListStudentBySubjectComponent} from "./list-student-by-subject/list-student-by-subject.component";

@NgModule({
  declarations: [UserComponent, CreateUserComponent, SubjectListComponent, ListStudentBySubjectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    HttpService,
    { provide: StudentService, useClass: StudentRepository },
  ],
  exports: [],
})
export class UserModule {}
