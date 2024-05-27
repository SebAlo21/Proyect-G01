import { Component } from '@angular/core';
import { LoginFormComponent } from '../../core/login-form/login-form.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { AsideRightComponent } from './aside-right/aside-right.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { SeccionComponent } from './seccion/seccion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginFormComponent,AsideLeftComponent,AsideRightComponent,MainHomeComponent,SeccionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {





  
}
