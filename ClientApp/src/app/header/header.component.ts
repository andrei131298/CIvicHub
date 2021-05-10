import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { faHome, faFileContract, faPhone, faUser, faCity, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

    firstName: string;
  logged:string;
    userId: number;
    faHome = faHome;
    faFileContract = faFileContract;
    faPhone = faPhone;
    faUser = faUser;
    faCity = faCity;
    faEdit = faEdit;

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/home"]);
  }

  constructor(public authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.firstName = sessionStorage.getItem('firstName');
        this.logged = sessionStorage.getItem('isLogged');
        console.log(this.logged);
        this.userId = parseInt(sessionStorage.getItem('userId'));
  }
  checkLoggedIn(){
    if (this.logged == 'true'){
      this.router.navigate(["/profile"]);
      console.log("se executa")
    }
    else{
      this.router.navigate(["/login"]);
    }
  }
}
