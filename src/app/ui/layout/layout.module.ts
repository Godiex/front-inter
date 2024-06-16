import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    MatToolbarModule,
    NgIf,
    RouterLink,
    NgClass
  ],
  providers: [],
  exports: [HeaderComponent,  FooterComponent],
})
export class LayoutModule {}
