import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [MenubarModule, AvatarModule, ButtonModule, MenuModule],
  templateUrl: './header-main.html',
  styleUrl: './header-main.css'
})
export class HeaderMain {

  items: MenuItem[];
  userMenu: MenuItem[];

  constructor(private router: Router) {

    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-line',
        command: () => this.router.navigate(['/home'])
      },
      {
        label: 'Group',
        icon: 'pi pi-file',
        routerLink: '/home/group'
      },
      {
        label: 'Tickets',
        icon: 'pi pi-file',
        routerLink: '/home/ticket'
      },
    ];

    this.userMenu = [
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        routerLink: '/home/user'
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog'
      },
      {
        separator: true
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
