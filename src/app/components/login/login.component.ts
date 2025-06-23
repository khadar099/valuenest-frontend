// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // ✅ Note: Use `styleUrls` (plural)
})
export class LoginComponent {

  // Object to hold login form input
  loginData = {
    usernameOrPhone: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // You can redirect user or store token here
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
