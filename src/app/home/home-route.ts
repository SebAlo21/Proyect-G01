import { Routes } from "@angular/router";

export const homeRoutes:Routes=[
    
    {
     path:'generos',loadComponent:()=>import('../articles/genres/genres.component').then((c)=>c.GenresComponent)
    }
    ,
    {
        path:'lista',loadComponent:()=>import('../articles/my-list/my-list.component').then((c)=>c.MyListComponent)
    },
    {
        path:'popular',loadComponent:()=>import('../articles/popular/popular.component').then((c)=>c.PopularComponent)
    }

    
]