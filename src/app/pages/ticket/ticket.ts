import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

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
    InputTextModule,DatePipe
  ]
})
export class TicketComponent {

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

  crearTicket() {
    const ticket: Ticket = {
      id: Date.now(),
      titulo: this.nuevoTicket.titulo || '',
      descripcion: this.nuevoTicket.descripcion || '',
      estado: this.nuevoTicket.estado || 'Pendiente',
      asignadoA: this.nuevoTicket.asignadoA || '',
      prioridad: this.nuevoTicket.prioridad || 'Media',
      fechaCreacion: new Date(),
      fechaLimite: this.nuevoTicket.fechaLimite || '',
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
}