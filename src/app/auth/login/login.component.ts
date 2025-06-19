import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../model/auth.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public login: Auth = new Auth()
  constructor(private AuthService: AuthService, private toastr: ToastrService, private router: Router) { }
  onsubmit() {
    this.AuthService.login(this.login).subscribe((res: { result?: { token?: string, user?: string } }) => {
      this.toastr.success('Login Sucessfully', '', {
        progressBar: true
      })
      let token = res?.result?.token;
      let user = res?.result?.user;
      localStorage.setItem('token', token || '');
      this.router.navigateByUrl('home');
    }, (err: any) => {
      this.toastr.error(err)
    })
  }
}
