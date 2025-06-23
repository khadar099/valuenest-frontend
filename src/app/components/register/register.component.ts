import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common'; // Optional if using *ngIf etc.

@Component({
  selector: 'app-register',
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule here
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

  constructor(private authService: any) {}

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
