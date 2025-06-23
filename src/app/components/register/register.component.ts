import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    username: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private authService: AuthService) {}  // ✅ Correct type

  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: (response: any) => {
        console.log('Registration successful', response);
      },
      error: (error: any) => {
        console.error('Registration failed', error);
      }
    });
  }
}
