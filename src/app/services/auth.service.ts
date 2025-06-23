// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // ✅ This makes it injectable
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post('http://13.127.72.112:8282/api/auth/register', data);
  }

  login(data: any): Observable<any> {
    return this.http.post('http://13.127.72.112:8282/api/auth/login', data);
  }
}
