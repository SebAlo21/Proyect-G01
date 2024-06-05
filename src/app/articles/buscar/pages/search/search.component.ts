import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() envioDatos:EventEmitter<any>=new EventEmitter()
  nombre:string=''
  getParametro(term:string):void{ 
     this.envioDatos.emit(term)
   }
}
