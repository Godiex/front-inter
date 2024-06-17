import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SUBJECTS } from "../routes.constants";
import {SubjectListComponent} from "./subject-list/subject-list.component";

const routes: Routes = [
  {
    path: "",
    component: SubjectListComponent,
  },
  {
    path: SUBJECTS.GET_SUBJECTS_BY_IDENTIFICATION,
    component: SubjectListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectRoutingModule {}
