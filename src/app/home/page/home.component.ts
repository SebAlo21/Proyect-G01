import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { ReproductorComponent } from '../../shared/reproductor/reproductor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,ReproductorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
