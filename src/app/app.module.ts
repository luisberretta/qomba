import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componentes/layout/header/header.component';
import { FooterComponent } from './componentes/layout/footer/footer.component';
import { ModeloComponent } from './componentes/futbol/modelo/modelo.component';
import { ColorComponent } from './componentes/futbol/color/color.component';
import { CamisetaComponent } from './componentes/futbol/camiseta/camiseta.component';
import { ResumenPrecioComponent } from './componentes/futbol/resumen-precio/resumen-precio.component';
import { ShortComponent } from './componentes/futbol/short/short.component';
import { EquipoComponent } from './componentes/futbol/equipo/equipo.component';
import { MediasComponent } from './componentes/futbol/medias/medias.component';
import { WizardComponent } from './componentes/futbol/wizard.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PersonaComponent } from './componentes/futbol/persona/persona.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { HomeComponent } from './componentes/home/home.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import {NgxUiLoaderModule} from "ngx-ui-loader";
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import {ColorCircleModule} from "ngx-color/circle";
import { NgxColorsModule } from 'ngx-colors';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModeloComponent,
    ResumenPrecioComponent,
    ShortComponent,
    EquipoComponent,
    MediasComponent,
    WizardComponent,
    PersonaComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    ColorComponent,
    CamisetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ColorCircleModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot({
      hasProgressBar: false,
    }),
    NgxColorsModule,
    HttpClientModule,
    AlifeFileToBase64Module,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
