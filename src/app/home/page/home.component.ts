import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
