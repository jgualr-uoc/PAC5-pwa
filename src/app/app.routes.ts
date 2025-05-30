import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Detail } from './Components/detail/detail';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'detail/:id', component: Detail},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
