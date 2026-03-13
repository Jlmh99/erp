import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CardModule,
    ButtonModule,InputTextModule,ToastModule],
  providers: [MessageService],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {

  usuario = {
    nombre: 'Juan Luis',
    email: 'juan@email.com',
    telefono: '1234567890'
  };

  constructor(private messageService: MessageService) {}

  actualizar() {

    try {

      this.messageService.add({
        severity: 'success',
        summary: 'Actualizado',
        detail: 'Perfil actualizado correctamente'
      });

    } catch {

      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo actualizar el perfil'
      });

    }

  }
}
