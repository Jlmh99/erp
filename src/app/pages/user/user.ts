import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CardModule,
    ButtonModule,InputTextModule,ToastModule,
    CommonModule,ReactiveFormsModule,],
  providers: [MessageService],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User implements OnInit{
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  userForm!: FormGroup;

  ngOnInit() {
    // Inicializamos el formulario con TUS validaciones del register
    this.userForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]]
    });

    // Cargar datos iniciales (de localStorage o valores por defecto)
    const savedData = localStorage.getItem('perfilUsuario');
    if (savedData) {
      this.userForm.patchValue(JSON.parse(savedData));
    } else {
      // Valores por defecto si no hay nada guardado
      this.userForm.patchValue({
        nombreCompleto: 'Juan Luis',
        email: 'juan@email.com',
        telefono: '1234567890'
      });
    }
  }

  actualizar() {
    if (this.userForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, revisa los campos marcados'
      });
      return;
    }

    // Guardar en localStorage
    localStorage.setItem('perfilUsuario', JSON.stringify(this.userForm.value));
    
    this.messageService.add({
      severity: 'success',
      summary: 'Actualizado',
      detail: 'Perfil guardado correctamente'
    });
  }
}
