import { Component, Input } from '@angular/core';
import { IconButtonComponent } from "../icon-button-component/icon-button-component";

@Component({
  selector: 'input-component',
  imports: [IconButtonComponent],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {
  @Input() type: "text" | "email" | "password" = "text";

  @Input() label = "";

  @Input() placeholder = "";

  @Input() icon: "email" | "password" = "email"
}
