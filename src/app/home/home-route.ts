import { Routes } from "@angular/router";

export const homeRoutes:Routes=[
    
    {
     path:'album',loadComponent:()=>import('../articles/albums/album-cancion/album-cancion.component').then((c)=>c.AlbumCancionComponent)
    }
    , 
 
    {
        path:'buscar',loadComponent:()=>import('../articles/buscar/search-cancion/search-cancion.component').then(c=>c.SearchCancionComponent)

    },
    {
        path:'playlist',loadComponent:()=>import('../articles/playlist/playlist-page/playlist-page.component').then((c)=>c.PlaylistPageComponent)
    },
 

    
]