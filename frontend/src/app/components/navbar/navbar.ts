import { Component, inject } from '@angular/core';
import { LucidePanelLeft } from "@lucide/angular";
import { SidebarStateService } from '../../services/sidebar/sidebar-state-service';

@Component({
  selector: 'navbar',
  imports: [LucidePanelLeft],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  sidebarService = inject(SidebarStateService);

  toggleSideBar() {
    this.sidebarService.isOpen.update(value => !value);
  }
}
