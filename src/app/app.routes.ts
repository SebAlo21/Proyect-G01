import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

export const routes: Routes = [
    {path:"",component:InicioComponent},
    {path:"inicio",component:InicioComponent},
    {path:"biblioteca",component:BibliotecaComponent}
];
