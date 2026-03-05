import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule,ProgressSpinnerModule],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading {

  visible: boolean = true;
}
