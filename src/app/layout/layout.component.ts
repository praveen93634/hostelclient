import { CommonModule, LocationStrategy } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from '../app.routes';
import { Location } from '@angular/common';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
