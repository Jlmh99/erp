import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = signal('');
  password = signal('');

  login() {
    console.log('Login:', this.email(), this.password());
  }
}
