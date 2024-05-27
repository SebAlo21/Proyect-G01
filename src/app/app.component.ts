import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../core/header/header.component';
import { LoginButtonComponent } from '../core/login-button/login-button.component';
import { FooterComponent } from '../core/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,HeaderComponent,LoginButtonComponent,FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyect-G01';
}
