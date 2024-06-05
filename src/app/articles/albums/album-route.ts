import { Routes } from "@angular/router";

export const albumRoutes:Routes=[
    
    {
     path:'',loadComponent:()=>import('../albums/album-cancion/album-cancion.component').then((c)=>c.AlbumCancionComponent)
    }
   
    
]