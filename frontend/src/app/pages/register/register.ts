import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InputComponent } from "../../components/input-component/input-component";
import { ButtonComponent } from "../../components/button-component/button-component";


@Component({
  selector: 'app-register',
  imports: [RouterOutlet, InputComponent, ButtonComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(
    private router: Router
  ) {}

  redirectToLogin() {
    this.router.navigate(["/login"])
  }
}
