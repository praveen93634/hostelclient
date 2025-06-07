import { Component, output } from '@angular/core';
import { NavLeftComponent } from "../nav-left/nav-left.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavLeftComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    // public props
  NavCollapse = output();
  NavCollapsedMob = output();
  // navCollapsed: boolean;
  windowWidth: number;
  navCollapsedMob: boolean;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    // this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
    this.navCollapsedMob = false;
  }

  // public method
  navCollapse() {
    if (this.windowWidth >= 1025) {
      // this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
}
