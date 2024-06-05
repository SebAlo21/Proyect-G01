import { Routes } from "@angular/router";

export const buscarRoutes:Routes=[
    
    {
     path:'',loadComponent:()=>import('../buscar/search-cancion/search-cancion.component').then((c)=>c.SearchCancionComponent)
    }
   
    
]