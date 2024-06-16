import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MODULES } from "../routes.constants";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrl: "./student.component.css",
})
export class UserComponent implements OnInit {
  formControl!: FormGroup;
  filter!: string;
  constructor(
    private formBuilder: FormBuilder
  ) {}
  private CreateForm(): void {
    this.formControl = this.formBuilder.group({
      user: [""],
    });
  }
  ngOnInit(): void {
    this.CreateForm();
  }
  handleSearchEvent(filter: string) {
  }
  protected readonly MODULES = MODULES;
}
