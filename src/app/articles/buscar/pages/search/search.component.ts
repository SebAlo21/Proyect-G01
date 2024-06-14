import { CommonModule } from '@angular/common';
import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { playlistService } from '../../../playlist/services/playlist-service';
import { computeMsgId } from '@angular/compiler';
import { Playlist } from '../../../../shared/modules/albums';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {
  @Output() envioDatos:EventEmitter<any>=new EventEmitter() 
  nombre:string=''  
  constructor( ){}
  
  
  getParametro(term:string):void{ 
     this.envioDatos.emit(term)
   }

 
 
}
