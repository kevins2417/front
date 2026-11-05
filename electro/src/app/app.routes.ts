import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Listado } from './listado/listado';
import { Noencontrado } from './noencontrado/noencontrado';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'productos', component: Listado },
  { path: '**', component: Noencontrado },
];
