import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  template: `
      <app-header></app-header>

      <router-outlet></router-outlet>

      <app-footer></app-footer>
    `
  })
export class App {}