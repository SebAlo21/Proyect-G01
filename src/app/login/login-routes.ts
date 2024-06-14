import { Routes } from '@angular/router';

export const loginRoutes:Routes=[
    
    {
        path:'',loadComponent:()=>import('./pages/login/login.component').then((c)=>c.LoginComponent)
    },
    {
        path:'register',loadComponent:()=>import('../login/pages/register/register.component').then((c)=>c.RegisterComponent)
    }

    
]