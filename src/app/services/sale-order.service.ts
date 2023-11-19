import { Injectable } from '@angular/core';
import { http } from '../shared/http';

@Injectable({
  providedIn: 'root'
})
export class SaleOrderService {

  constructor(private http: http) { }

  getLists() {
    return this.http.get(`sale-orders`)
  }
}
