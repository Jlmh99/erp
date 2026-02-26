import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [RouterModule, CardModule, ButtonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {}