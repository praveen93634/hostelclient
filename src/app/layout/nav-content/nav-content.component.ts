import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from "../nav-item/nav-item.component";
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NavigationItem, NavigationItems } from '../../shared/data/menu';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [RouterModule, CommonModule, NavItemComponent,NgScrollbarModule],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent {
   private location = inject(Location);

  // public props
  NavCollapsedMob = output();
  SubmenuCollapse = output();

  // version
  title = 'Demo application for version numbering';

  navigations!: NavigationItem[];
  windowWidth: number;

  // Constructor
  constructor() {
    this.navigations = NavigationItems;
    this.windowWidth = window.innerWidth;
  }

  // Life cycle events
  ngOnInit() {
    if (this.windowWidth < 1025) {
      setTimeout(() => {
        (document.querySelector('.coded-navbar') as HTMLDivElement).classList.add('menupos-static');
      }, 500);
    }
  }

  fireOutClick() {
    // let current_url = this.location.path();
    // eslint-disable-next-line
    // @ts-ignore
    if (this.location['_baseHref']) {
      // eslint-disable-next-line
      // @ts-ignore
      current_url = this.location['_baseHref'] + this.location.path();
    }
    const link = "a.nav-link[ href='" +  + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
  }
}
