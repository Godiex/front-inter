import { Component, OnInit } from "@angular/core";
import { StudentService } from "@core/services/user-service.interface";
import {GetSubjectByIdentificationDto} from "@core/models/subject/get-subject-by-identification";

@Component({
  selector: "app-subject-list",
  templateUrl: "./subject-list.component.html",
  styleUrl: "./subject-list.component.css",
})
export class SubjectListComponent implements OnInit {
  subjects: GetSubjectByIdentificationDto[] = [];
  constructor(
    private studentService: StudentService
  ) {}
  ngOnInit(): void {
    this.fetchSubject();
  }
  public fetchSubject(): void {
    this.subjects.push({name: "Quimica", id: "quim", professor: {name: "juan valdez"}})
  }

  displayStudents(test: string) {

  }
}
