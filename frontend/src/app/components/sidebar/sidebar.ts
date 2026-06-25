import { Component, inject } from '@angular/core';
import { LucideSparkles } from "@lucide/angular"
import { SidebarStateService } from '../../services/sidebar/sidebar-state-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sidebar',
  imports: [LucideSparkles, NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
  openSideBar = inject(SidebarStateService);
}
