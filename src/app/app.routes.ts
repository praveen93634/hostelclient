import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"login",loadComponent:()=>import('../app/auth/login/login.component').then(x=>x.LoginComponent)}
];
