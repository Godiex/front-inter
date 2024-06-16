import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgClass, NgIf} from "@angular/common";
import {AuthResponse} from "@core/models/login/auth-response.model";
import {Router, RouterLink} from "@angular/router";
import {MODULES} from "../../routes.constants";
import {AuthService} from "@core/services/auth-service.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  userLogged: boolean = JSON.parse(localStorage.getItem("userLogged") || "false");
  studentName: string = "";

  ngOnInit(): void {
    this.authService.userLogged$.subscribe(logged => {
      this.userLogged = logged;
      let stringAuth: string | null = localStorage.getItem("auth");
      if (logged) {
        if (stringAuth) {
          let auth: AuthResponse = JSON.parse(stringAuth);
          this.studentName = auth.name;
        }
      }
    });
  }

  constructor(private router: Router, private authService: AuthService)
  {
    let stringAuth: string | null = localStorage.getItem("auth");
    if (stringAuth) {
      let auth: AuthResponse = JSON.parse(stringAuth);
      this.studentName = auth.name;
      this.router.navigate([MODULES.USERS.USER]);
    }
  }

  logout() {
    localStorage.removeItem("auth");
    this.authService.logout();
    this.router.navigate(['']);
  }
}
