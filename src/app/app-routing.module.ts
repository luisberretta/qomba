import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizardComponent} from "./componentes/futbol/wizard.component";
import {HomeComponent} from "./componentes/home/home.component";
import {PaginaNoEncontradaComponent} from "./componentes/pagina-no-encontrada/pagina-no-encontrada.component";

const routes: Routes = [
  { path: 'futbol', component: WizardComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
