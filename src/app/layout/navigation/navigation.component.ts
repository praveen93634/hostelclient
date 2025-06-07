import { Component, EventEmitter, Output } from '@angular/core';
import { NavContentComponent } from "../nav-content/nav-content.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavContentComponent,RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Output() NavCollapsedMob = new EventEmitter<void>();
  @Output() SubmenuCollapse = new EventEmitter<void>();
  navCollapsedMob = false;
  windowWidth = window.innerWidth;
  themeMode!: string;

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }

  navSubmenuCollapse() {
    document.querySelector('app-navigation.coded-navbar')?.classList.add('coded-trigger');
  }
}

