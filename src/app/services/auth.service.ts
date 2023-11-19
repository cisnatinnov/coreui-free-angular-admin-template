import { Injectable } from '@angular/core';
import { register, login } from '../interfaces/auth.interface';
import { http } from '../shared/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: http) { }

  registerUser(userDetails: register) {
    return this.http.postLogin(`auth/local/register`, userDetails);
  }

  loginUser(userDetails: login) {
    return this.http.postLogin(`auth/local`, userDetails);
  }


}