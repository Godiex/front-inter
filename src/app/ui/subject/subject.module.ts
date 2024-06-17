import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {SubjectRoutingModule} from "./subject-routing.module";
import { SubjectComponent } from "./subject.component";
import { SubjectListComponent } from "./subject-list/subject-list.component";
import { StudentService } from "@core/services/user-service.interface";
import { StudentRepository } from "@infrastructure/repositories/student-repository.service";
import {HttpService} from "@infrastructure/http/http.service";

@NgModule({
  declarations: [SubjectComponent,  SubjectListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubjectRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    HttpService,
    { provide: StudentService, useClass: StudentRepository },
  ],
  exports: [],
})
export class SubjectModule {}
