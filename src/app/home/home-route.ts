import { Routes } from "@angular/router";

export const homeRoutes:Routes=[
    
    {
     path:'album',loadChildren:()=>import('../articles/albums/album-route').then((m)=>m.albumRoutes)
    }
    ,
    {
        path:'lista',loadComponent:()=>import('../articles/my-list/my-list.component').then((c)=>c.MyListComponent)
    },
 
    {
        path:'buscar',loadChildren:()=>import('../articles/buscar/buscar-route').then(m=>m.buscarRoutes)

    }
]