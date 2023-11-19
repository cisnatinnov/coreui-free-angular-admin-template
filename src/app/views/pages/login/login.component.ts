import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/interfaces/auth.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    identifier: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
  });
  message!: String
  valid: Boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthService
  ) {}

  get identifier() {
    return this.loginForm.controls['identifier'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  login() {
    const postData = { ...this.loginForm.value };
    this.service.loginUser(postData as login).subscribe(
      (response: any) => {
        this.message = 'Successfully Login'
        this.valid = true
        sessionStorage.setItem('jwt', response.jwt)
        sessionStorage.setItem('id', response.user.id)
        sessionStorage.setItem('email', response.user.email)
        sessionStorage.setItem('username', response.user.username)
        this.router.navigate([''])
      },
      _error => {
        console.log(_error)
        this.message = 'Username or/and password invalid'
        this.valid = false
      }
    )
  }
}
