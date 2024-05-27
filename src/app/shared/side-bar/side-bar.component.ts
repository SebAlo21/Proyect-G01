import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

  menuPrincipal:Array<any>=[]
  listaRecomendados:Array<any>=[]
  
   ngOnInit(): void {
     this.menuPrincipal=[
      {
        name:'principal',
        icon:'fa-house',
        router:['/']
      },
      {
        name:'generos',
        icon:'fa-music',
        router:['/','generos']
      }
      ,
      {
        name:'lista',
        icon:'fa-list',
        router:['/','lista']
      }
      ,
      {
        name:'popular',
        icon:'fa-heart',
        router:['/','popular']
      }
     ]
     this.listaRecomendados=[
      {
        name:"Mi playlist 1",
      },
      {
        name:"Mi playlist 2",
      },
      {
        name:"Mi playlist 3",
      },
      {
        name:"Mi playlist 4",
      }
     ]
   }
}
