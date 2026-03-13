import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [FormsModule,TableModule,CardModule,
    ButtonModule,InputTextModule,ToastModule],
  providers: [MessageService],
  templateUrl: './group.html',
  styleUrls: ['./group.css']
})
export class Group {

  display = {
    N: 10
  }

  grupos:any[] = [];

  nuevoGrupo = {
    id:'',
    nombre:'',
    categoria:'',
    nivel:'',
    autor:'',
    miembros:0,
    tickets:0
  };

  constructor(private messageService: MessageService){}

  agregar(){

    try{

      this.grupos.push({...this.nuevoGrupo});

      this.messageService.add({
        severity:'success',
        summary:'Grupo creado',
        detail:'Grupo agregado correctamente'
      });

      this.nuevoGrupo = {
        id:'',
        nombre:'',
        categoria:'',
        nivel:'',
        autor:'',
        miembros:0,
        tickets:0
      };

    }catch{

      this.messageService.add({
        severity:'error',
        summary:'Error',
        detail:'No se pudo crear el grupo'
      });

    }

  }

  eliminar(grupo:any){

    this.grupos = this.grupos.filter(g => g !== grupo);

    this.messageService.add({
      severity:'warn',
      summary:'Grupo eliminado',
      detail:'Se eliminó el grupo'
    });

  }
}
