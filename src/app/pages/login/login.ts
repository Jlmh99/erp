import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    loginForm!: FormGroup; // 👈 declaramos sin inicializar

   // 🔒 Credenciales hardcodeadas
  private readonly USER = 'admin';
  private readonly PASSWORD = 'Admin123!@#';

  constructor(private fb: FormBuilder, private router: Router) {

      this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    if (username === this.USER && password === this.PASSWORD) {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

  preventEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}
