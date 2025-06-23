// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ Required for standalone component
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    usernameOrPhone: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        // You can store token or navigate here
      },
      error: (error: any) => {
        console.error('Login failed', error);
      }
    });
  }
}
