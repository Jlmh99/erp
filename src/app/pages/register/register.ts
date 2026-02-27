import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'register',
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
    CardModule,
    InputNumberModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm!: FormGroup; // 👈 declaramos primero

  constructor(private fb: FormBuilder, private router: Router) {

    this.registerForm = this.fb.group({
    usuario: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(/^(?=.*[!@#$%^&*._]).{10,}$/)
    ]],
    confirmPassword: ['', Validators.required],
    nombreCompleto: ['', Validators.required],
    direccion: ['', Validators.required],
    edad: ['', [
      Validators.required,
      Validators.min(18),
      Validators.max(100)
    ]],
    telefono: ['', [
      Validators.required,
      Validators.pattern(/^[0-9]{10,10}$/)
    ]]
  }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: AbstractControl) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    alert('Registro exitoso');
    this.router.navigate(['/home']);
  }

  preventEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}