import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent implements OnInit{
listaGeneros:Array<any>=[]

ngOnInit(): void {
  this.listaGeneros=[
    {
      name:'Rock',
      imagen:'../../../assets/img/rock.jpg'
    },
    {
      name:'Jazz',
      imagen:'../../../assets/img/jazz.jpg'
    },
    {
      name:'Pop',
      imagen:'../../../assets/img/pop.jpg'
    },
    {
      name:'Electronica',
      imagen:'../../../assets/img/electronica.jpg'
    },
    {
      name:'Baladas',
      imagen:'../../../assets/img/baladas.jpg'
    }
    

  ]
}

}
