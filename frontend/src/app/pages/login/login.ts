import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InputComponent } from "../../components/input-component/input-component";
import { IconButtonComponent } from "../../components/icon-button-component/icon-button-component";
import { ButtonComponent } from "../../components/button-component/button-component";
@Component({
  selector: 'app-login',
  imports: [RouterOutlet, InputComponent, IconButtonComponent, ButtonComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private router: Router
  ) {};

  redirectToRegister() {
    this.router.navigate(["/register"])
  }
}
