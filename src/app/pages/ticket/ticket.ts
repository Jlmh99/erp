import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

export interface Ticket {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
  asignadoA: string;
  prioridad: string;
  fechaCreacion: Date;
  fechaLimite: string; // 🔥 string para evitar problemas
  comentarios: string[];
  historial: string[];
}

@Component({
  selector: 'app-ticket',
  standalone: true,
  templateUrl: './ticket.html',
  styleUrls: ['./ticket.css'],
  imports: [
    CommonModule,FormsModule,
    ButtonModule,DialogModule,
    InputTextModule,DatePipe,ToastModule
  ],
  providers: [MessageService]
})
export class TicketComponent {

  constructor(private messageService: MessageService) {}

  tickets: Ticket[] = [];

  mostrarCreate = false;
  mostrarDetail = false;

  nuevoTicket: Partial<Ticket> = {};
  ticketSeleccionado!: Ticket;

  // =========================
  abrirCreate() {
    this.nuevoTicket = {};
    this.mostrarCreate = true;
  }

  estados = ['Pendiente', 'En progreso', 'Revision', 'Finalizado'];

  prioridades = ['Baja', 'Media', 'Alta'];

  crearTicket(form: any) {

  // validación extra (trim)
  if (
    !this.esTextoValido(this.nuevoTicket.titulo) ||
    !this.esTextoValido(this.nuevoTicket.descripcion) ||
    !this.esTextoValido(this.nuevoTicket.asignadoA)
  ) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'No se permiten campos vacíos o solo espacios'
    });
   
    return;
  }

  if (form.invalid) {
    Object.values(form.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    return;
  }

  const ticket: Ticket = {
    id: Date.now(),
    titulo: this.nuevoTicket.titulo!.trim(),
    descripcion: this.nuevoTicket.descripcion!.trim(),
    estado: this.nuevoTicket.estado!,
    asignadoA: this.nuevoTicket.asignadoA!.trim(),
    prioridad: this.nuevoTicket.prioridad!,
    fechaCreacion: new Date(),
    fechaLimite: this.nuevoTicket.fechaLimite!,
    comentarios: [],
    historial: ['Ticket creado']
  };

  this.tickets.push(ticket);
  this.mostrarCreate = false;
}

  verDetalle(ticket: Ticket) {
    this.ticketSeleccionado = ticket;
    this.mostrarDetail = true;
  }

  esTextoValido(valor: string | undefined): boolean {
  return !!valor && valor.trim().length > 0;
  }
}