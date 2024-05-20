import { Component } from '@angular/core';
import { ArticulosComponent } from './articulos/articulos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ArticulosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
