// src/app/components/register/register.component.ts

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  // ✅ Note: use plural styleUrls
})
export class RegisterComponent {

  registerData = {
    username: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // You can show success message or redirect to login
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
