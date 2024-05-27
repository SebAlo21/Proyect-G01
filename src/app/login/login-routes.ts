import { Routes } from '@angular/router';

export const loginRoutes:Routes=[
    
    {
     path:'',loadComponent:()=>import('../login/pages/login.component').then((c)=>c.LoginComponent)
    }
    
    
]