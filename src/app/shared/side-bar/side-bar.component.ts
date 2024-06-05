import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/pages/login.component'; 

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
        name:'Album',
        icon:'fa-music',
        router:['/','album']
      }
      ,
      {
        name:'lista',
        icon:'fa-list',
        router:['/','lista']
      } 
      ,
      {
        name:'Buscar',
        icon:'fa-magnifying-glass',
        router:['/','buscar']
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
