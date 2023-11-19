import { Injectable } from '@angular/core';
import { http } from '../shared/http';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: http) { }

  getLists() {
    return this.http.get(`partners`)
  }
}