import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizardComponent} from "./componentes/futbol/wizard.component";

const routes: Routes = [
  { path: 'futbol', component: WizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
