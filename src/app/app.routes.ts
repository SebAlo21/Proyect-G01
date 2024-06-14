import { Routes } from '@angular/router';
import { HomeComponent } from './home/page/home.component';
import { LoginComponent } from './login/pages/login/login.component'; 


export const routes: Routes = [
{
    path:'',component:HomeComponent,
    loadChildren:()=>import('./home/home-route').then(m=>m.homeRoutes)
},
{
    path:'login',loadChildren:()=>import('./login/login-routes').then(m=>m.loginRoutes)
}

];
