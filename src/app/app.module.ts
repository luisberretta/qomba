import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componentes/layout/header/header.component';
import { FooterComponent } from './componentes/layout/footer/footer.component';
import { CamisetaComponent } from './componentes/futbol/camiseta/camiseta.component';
import { NumeroComponent } from './componentes/futbol/numero/numero.component';
import { ShortComponent } from './componentes/futbol/short/short.component';
import { EquipoComponent } from './componentes/futbol/equipo/equipo.component';
import { CheckoutComponent } from './componentes/futbol/checkout/checkout.component';
import { WizardComponent } from './componentes/futbol/wizard.component';
import { ColorGithubModule } from 'ngx-color/github';
import {ReactiveFormsModule} from "@angular/forms";
import { PersonaComponent } from './componentes/futbol/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CamisetaComponent,
    NumeroComponent,
    ShortComponent,
    EquipoComponent,
    CheckoutComponent,
    WizardComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ColorGithubModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
