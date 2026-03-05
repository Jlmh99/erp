import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header-auth',
  standalone: true,
  imports: [RouterModule, ButtonModule, MenubarModule],
  templateUrl: './header-auth.html',
  styleUrl: './header-auth.css',
})
export class HeaderAuth {
items: MenuItem[];

  constructor(private router: Router) {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/'])
      },
      {
        label: 'Login',
        icon: 'pi pi-sign-in',
        command: () => this.router.navigate(['/login'])
      },
      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        command: () => this.router.navigate(['/register'])
      }
    ];
  }
}
