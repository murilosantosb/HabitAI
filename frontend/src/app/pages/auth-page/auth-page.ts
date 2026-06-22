import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button-component/button-component';
import { IconButtonComponent } from "../../components/icon-button-component/icon-button-component";
import { InputComponent } from "../../components/input-component/input-component";
import { Login } from "../login/login";
import { Register } from "../register/register";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  imports: [ButtonComponent, IconButtonComponent, InputComponent, Login, Register],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {

  constructor(
    private router: Router
  ) {}

  
  whichRoute() {
    return this.router.url;
  }
}
