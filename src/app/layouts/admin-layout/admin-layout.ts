import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { HeaderMain } from '../../components/header-main/header-main';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet,HeaderMain,Footer,
    CardModule],
  templateUrl: './admin-layout.html',
  styleUrls: ['./admin-layout.css']
})
export class AdminLayout {

}
