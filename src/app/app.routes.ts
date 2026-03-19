import { Routes } from '@angular/router';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Group } from './pages/group/group';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { TicketComponent } from './pages/ticket/ticket';
import { User } from './pages/user/user';

export const routes: Routes = [
  /* redirección inicial */
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },

  /* páginas públicas */
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'landing', component: Landing },
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]
  },
  /* layout principal del sistema (usuario)*/
  {
    path: 'home',
    component: MainLayout,
    children: [
      {
        path: '',component: Dashboard
      },
      { 
        path:'user', component: User
       },
      { 
        path:'group', component: Group
      },
      { path: 'ticket', component: TicketComponent }
    ]
  },

  /* layout de administración */
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: Dashboard
      }
    ]
  },

  /* fallback por si la ruta no existe */
  {
    path: '**',
    redirectTo: 'login'
  }
];
