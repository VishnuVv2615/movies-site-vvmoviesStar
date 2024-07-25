import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsPageComponent } from './pages/Details/details-page/details-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'movie/:id',
        component:DetailsPageComponent
    }
];
