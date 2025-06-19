import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
export interface auth{
  exp:number
}
export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token=localStorage.getItem('token');
  const decode:auth=jwtDecode(token ||'')
  const isExpired = decode.exp * 1000 < Date.now();
  if(!token || isExpired){
    alert('Please Login First');
    router.navigateByUrl('login');
    return false;
  }
  else{
    return true;
  }
  
};
