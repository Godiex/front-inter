import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IDENTITY } from "../routes.constants";
import { UserComponent } from "./subject.component";
import { CreateUserComponent } from "./add-subjects/create-user.component";

const routes: Routes = [
  {
    path: IDENTITY.USER,
    component: UserComponent,
  },
  {
    path: IDENTITY.CREATE,
    component: CreateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
