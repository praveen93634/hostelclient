import { CommonModule, LocationStrategy } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavigationComponent, RouterModule, FormsModule, CommonModule, NavBarComponent, BreadcrumbsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    private location = inject(Location);
  private locationStrategy = inject(LocationStrategy);
  cdr = inject(ChangeDetectorRef);

  // public props
  currentLayout!: string;
  navCollapsed = true;
  navCollapsedMob = false;
  windowWidth!: number;

  // Constructor

  // life cycle hook

  ngAfterViewInit() {
    const baseHref = this.locationStrategy.getBaseHref();

    

    this.windowWidth = window.innerWidth;

    this.cdr.detectChanges();
  }

  // private method
  private isThemeLayout(layout: string) {
    this.currentLayout = layout;
  }

  // public method
  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.coded-navbar')?.classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('mob-open');
    }
  }
}
