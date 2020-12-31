import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componentes/layout/header/header.component';
import { FooterComponent } from './componentes/layout/footer/footer.component';
import { CamisetaComponent } from './componentes/futbol/camiseta/camiseta.component';
import { NumeroComponent } from './componentes/futbol/numero/numero.component';
import { ShortComponent } from './componentes/futbol/short/short.component';
import { EquipoComponent } from './componentes/futbol/equipo/equipo.component';
import { CheckoutComponent } from './componentes/futbol/checkout/checkout.component';
import { WizardComponent } from './componentes/futbol/wizard.component';
import { ColorGithubModule } from 'ngx-color/github';
import { PersonaComponent } from './componentes/futbol/persona/persona.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './componentes/home/home.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import {NgxUiLoaderModule} from "ngx-ui-loader";

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
    PersonaComponent,
    HomeComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ColorGithubModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot({
      hasProgressBar: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
