import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from '../../components/footer/footer';
import { HeaderAuth } from '../../components/header-auth/header-auth';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderAuth, Footer],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

}
