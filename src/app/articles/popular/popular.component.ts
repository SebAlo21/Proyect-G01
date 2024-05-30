import { Component, OnInit } from '@angular/core';
import { spotifyService } from '../../shared/service/spotifyApi';
import { Artista } from '../../shared/service/interfaceApi';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit {

  
  ngOnInit(): void {  
      
  }
}
