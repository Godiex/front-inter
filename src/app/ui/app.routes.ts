import { Routes } from "@angular/router";
import { IDENTITIES } from "./routes.constants";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./identity/identity.module").then((m) => m.IdentityModule),
  },
  {
    path: IDENTITIES.NAME,
    loadChildren: () => import("./identity/identity.module").then((m) => m.IdentityModule),
  },
];
