import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'register',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  name = signal('');
  email = signal('');
  password = signal('');

  register() {
    console.log('Register:', this.name(), this.email(), this.password());
  }
}