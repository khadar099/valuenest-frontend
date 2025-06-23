// src/app/services/auth.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://13.127.72.112:8282/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${API_URL}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${API_URL}/login`, data);
  }
}
