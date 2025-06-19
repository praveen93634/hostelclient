import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
  {
    path:'home',loadComponent:()=>import('./components/home/home.component').then(home=>home.HomeComponent),canActivate:[authGuard]
  },
  {
    path: 'login', loadComponent: () => import('./auth/login/login.component').then(x => x.LoginComponent)
  },
  
  {
    path:'signup',loadComponent:()=>import('./auth/sign-up/sign-up.component').then(signup=>signup.SignUpComponent)
  }

];
