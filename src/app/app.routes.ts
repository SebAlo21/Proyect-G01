import { Routes } from '@angular/router';
import { HomeComponent } from '../articles/home/home.component';
import { SearchComponent } from '../articles/search/search.component';
import { PopularComponent } from '../articles/popular/popular.component';
import { MyListComponent } from '../articles/my-list/my-list.component';
import { GenresComponent } from '../articles/genres/genres.component';

export const routes: Routes = [
{ path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'genres',component:GenresComponent},
{path:'search',component:SearchComponent},
{path:'popular',component:PopularComponent},
{path:'myList',component:MyListComponent},

];
