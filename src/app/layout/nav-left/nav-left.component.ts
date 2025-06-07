import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  imports: [],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss'
})
export class NavLeftComponent {
   @Output() NavCollapsedMob = new EventEmitter();
}
