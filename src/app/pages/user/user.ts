import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {}
