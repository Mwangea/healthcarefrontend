import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(event: { collapsed: boolean; screenWidth: number }): void {
    this.isSideNavCollapsed = event.collapsed;
    this.screenWidth = event.screenWidth;
  }

}
