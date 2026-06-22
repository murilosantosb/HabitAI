import { Component, Input } from '@angular/core';
import { LucideMail, LucideLockKeyhole } from "@lucide/angular";

@Component({
  selector: 'icon-button-component',
  imports: [LucideMail, LucideLockKeyhole],
  templateUrl: './icon-button-component.html',
  styleUrl: './icon-button-component.css',
})
export class IconButtonComponent {
  @Input() variant: "email" | "password" = "email"

}
