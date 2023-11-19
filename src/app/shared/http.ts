import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class http {

  private baseUrl = 'http://localhost:1338/api';

  constructor(private http: HttpClient) { }

  private httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
  });

  get(routes: string) {
    return this.http.get(`${this.baseUrl}/${routes}`, { headers: this.httpHeaders })
  }

  post(routes: string, data: object) {
    return this.http.post(`${this.baseUrl}/${routes}`, data, { headers: this.httpHeaders });
  }

  postLogin(routes: string, data: object) {
    return this.http.post(`${this.baseUrl}/${routes}`, data);
  }

  put(routes: string, data: object, id: Number) {
    return this.http.put(`${this.baseUrl}/${routes}/${id}`, data, { headers: this.httpHeaders });
  }

  del(routes: string, id: Number) {
    return this.http.delete(`${this.baseUrl}/${routes}/${id}`, { headers: this.httpHeaders });
  }  
}
