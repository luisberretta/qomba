import {Component, OnInit, ViewChild} from '@angular/core';
import {Pedido} from "../../clases/Pedido";
import {WizardService} from "../../servicios/wizard.service";
import {PersonaComponent} from "./persona/persona.component";
import {svgAsPngUri} from 'save-svg-as-png';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ModeloComponent} from "./modelo/modelo.component";
import {SvgService} from "../../servicios/svg.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  paso: string = 'modelo';
  numeroPaso: number = 1;
  url: string = '/assets/images/';
  pedido: Pedido = {imagenes: []};
  formModelo: any;
  formColor: any;
  formShort: any;
  formNumero: any;
  formEquipo: any;
  formCheckOut: any;
  short: boolean;
  imagenEscudo: any;
  posicionEscudoCamiseta: any;
  nombreMostrarPaso: string = 'Elegí tu Modelo';

  @ViewChild(PersonaComponent) personaComponent: PersonaComponent;
  @ViewChild(ModeloComponent) camisetaComponent: ModeloComponent;

  constructor(private wizardService: WizardService, private modalService: NgbModal,
              private router: Router, private svgService: SvgService,
              private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {

  }

  siguiente(event) {
    switch (this.numeroPaso) {
      case 1:
        this.generarPedidoModelo(event);
        this.paso = 'color';
        this.nombreMostrarPaso = 'Elige Colores';
        this.numeroPaso = 2;
        this.generarFormColorIndumentaria();
        this.personaComponent.visualizarModeloCompleto();
        break;
      case 2:
        this.generarPedidoColor(event);
        this.paso = 'camiseta';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.numeroPaso = 3;
        this.generarFormNumero();
        break;
      case 3:
        this.generarPedidoNumero(event);
        this.paso = 'equipo';
        this.nombreMostrarPaso = 'Armá tu Equipo';
        this.numeroPaso = 4;
        this.generarFormEquipo();
        break;
      case 4:
        this.generarPedidoEquipo(event);
        this.paso = 'checkout';
        this.nombreMostrarPaso = 'Confirmación';
        this.numeroPaso = 5;
        this.generarFormCheckOut();
        break;
      case 5:
        this.generarPedido(event);
        break;
    }
  }

  anterior(event) {
    switch (this.numeroPaso) {
      case 2:
        this.generarPedidoColor(event);
        this.numeroPaso = 1;
        this.paso = 'modelo';
        this.nombreMostrarPaso = 'Elegí tu Modelo';
        this.personaComponent.visualizarModeloCompleto();
        this.generarFormModelo();
        console.log(this.pedido);
        break;
      case 3:
        this.generarPedidoNumero(event);
        this.numeroPaso = 2;
        this.paso = 'color';
        this.nombreMostrarPaso = 'Elige Colores';
        this.generarFormColorIndumentaria();
        break;
      case 4:
        this.generarPedidoEquipo(event);
        this.numeroPaso = 3;
        this.paso = 'camiseta';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.generarFormNumero();
        break;
      case 5:
        this.numeroPaso = 4;
        this.paso = 'equipo';
        this.nombreMostrarPaso = 'Armá tu Equipo';
        this.generarFormEquipo();
        break;
    }
  }

  modeloSeleccionado(urlSvg) {
    this.svgService.obtenerSVGFrente(this.url + urlSvg).subscribe((data) => {
      this.personaComponent.generarModelo(this.sanitizer.bypassSecurityTrustHtml(data));
    });
  }

  cambiarColor(cambiar) {
    if(cambiar.esEstampa){
      this.personaComponent.cambiarColorEstampa(cambiar);
    }
    this.personaComponent.cambiarColorParte(cambiar);
  }

  visualizarEstampado(visualizar){
    this.personaComponent.visualizarEstampado(visualizar);
  }

  generarPedidoModelo(formModelo) {
    this.pedido.modelo = formModelo.modelo;
    this.pedido.agregarShort = formModelo.agregarShort;
    this.pedido.agregarMedias = formModelo.agregarMedias;
  }

  generarPedidoShort(event) {
    // this.pedido.llevaShort = event.llevaShort;
    this.pedido.llevaEscudoShort = event.llevaEscudoShort;
    this.pedido.llevaNroShort = event.llevaNroShort;
  }

  generarPedidoColor(event) {
    this.pedido.coloresModelo = event.partesArray;
  }


  generarPedidoNumero(event) {
    this.pedido.llevaNombreCamiseta = event.llevaNombreCamiseta;
    this.pedido.llevaNumeroCamiseta = event.llevaNumeroCamiseta;
    this.pedido.llevaNumeroFrontalCamiseta = event.llevaNumeroFrontalCamiseta;
    this.pedido.posicionNumeroCamiseta = event.posicionNumeroCamiseta;
    this.pedido.llevaNumeroShort = event.llevaNumeroShort;
    this.pedido.posicionNumeroShort = event.posicionNumeroShort;
  }

  generarPedidoEquipo(event) {
    this.pedido.detalleEquipo = event.equipo;
  }

  generarPedido(event) {
    this.pedido.email = event.email;
    this.pedido.observaciones = event.observaciones;
    let imagenes = this.personaComponent.generarImagenes();
    svgAsPngUri(imagenes[0], "imagenes.png").then((data) => {
      this.pedido.imagenes.push(this.convertirABase64(data));
      svgAsPngUri(imagenes[1], "imagenes.png").then((data) => {
        this.pedido.imagenes.push(this.convertirABase64(data));
        this.pedido.escudo = this.convertirABase64(this.pedido.escudo);
        this.wizardService.generarPedido(this.pedido).subscribe((data) => {
          alert("Tu pedido fue realizado con éxito!");
          this.router.navigate(['/']);
          if (data) {
            console.log("La operación se realizó con éxito.");
          }
        })
      });
    });

  }

  convertirABase64(cadena) {
    return cadena.substring(cadena.indexOf(",") + 1, cadena.length + 1);
  }

  generarFormModelo() {
    this.formModelo = {
      modelo: this.pedido.modelo,
      agregarShort: this.pedido.agregarShort,
      agregarMedias: this.pedido.agregarMedias,
    };
  }

  generarFormColorIndumentaria() {
    let gruposColor = this.obtenerGruposColor();
    let formColor = [];
    for (let i = 0; i < gruposColor.length; i++) {
      if (this.perteneceIndumentaria(gruposColor[i])) {
        let parteColor = {
          idParte: gruposColor[i],
          color: undefined,
        }
        formColor.push(parteColor);
      }
    }
    if(this.pedido.coloresModelo){
      for (let i = 0; i < formColor.length; i++) {
        formColor[i].color = this.pedido.coloresModelo[i].color;
      }
    }
    this.formColor = formColor;
  }

  perteneceIndumentaria(grupoColor) {
    return grupoColor != 'NOMBRE' &&
      grupoColor != 'NUMERO_ESPALDA' &&
      grupoColor != 'NUMERO_DELANTERO' &&
      grupoColor != 'ESCUDO_REMERA' &&
      grupoColor != 'NUMERO_SHORT' &&
      grupoColor != 'ESCUDO_SHORT' &&
      !grupoColor.includes("GENERICO");
  }

  obtenerGruposColor() {
    let gruposColor = [];
    let grupos = this.personaComponent.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if (grupos[i].id != '' && !this.existeEnGrupoColor(grupos[i].id, gruposColor)) {
        gruposColor.push(grupos[i].id);
      }
    }
    return gruposColor;
  }

  existeEnGrupoColor(id, grupoColor) {
    return grupoColor.filter(x => x == id).length > 0;
  }


  generarFormShort() {
    this.formShort = {
      // llevaShort: this.pedido.llevaShort,
      llevaEscudoShort: this.pedido.llevaEscudoShort,
      llevaNroShort: this.pedido.llevaNroShort,
    };
  }

  generarFormNumero() {
    this.formNumero = {
      llevaNombreCamiseta: this.pedido.llevaNombreCamiseta,
      llevaNumeroCamiseta: this.pedido.llevaNumeroCamiseta,
      llevaNumeroFrontalCamiseta: this.pedido.llevaNumeroFrontalCamiseta,
      posicionNumeroCamiseta: this.pedido.posicionNumeroCamiseta,
      // llevaShort: this.pedido.llevaShort,
      llevaNumeroShort: this.pedido.llevaNumeroShort,
      posicionNumeroShort: this.pedido.posicionNumeroShort,
    }
  }

  generarFormEquipo() {
    this.formEquipo = {
      llevaNombreCamiseta: this.pedido.llevaNombreCamiseta,
      llevaNumeroCamiseta: this.pedido.llevaNumeroCamiseta,
      // llevaShort: this.pedido.llevaShort,
      detalleEquipo: this.pedido.detalleEquipo,
    }
  }

  generarFormCheckOut() {
    this.formCheckOut = {
      cuelloCamiseta: this.pedido.cuelloCamiseta,
      escudo: this.pedido.escudo,
      posicionEscudo: this.pedido.posicionEscudo,
      calidadEscudo: this.pedido.calidadEscudo,
      llevaNombreCamiseta: this.pedido.llevaNombreCamiseta,
      llevaNumeroCamiseta: this.pedido.llevaNumeroCamiseta,
      llevaNumeroFrontalCamiseta: this.pedido.llevaNumeroFrontalCamiseta,
      posicionNumeroCamiseta: this.pedido.posicionNumeroCamiseta,
      // llevaShort: this.pedido.llevaShort,
      llevaEscudoShort: this.pedido.llevaEscudoShort,
      llevaNumeroShort: this.pedido.llevaNumeroShort,
      posicionNumeroSort: this.pedido.posicionNumeroShort,
      detalleEquipo: this.pedido.detalleEquipo,
    }
  }

  llevaShort(event) {
    this.short = event;
  }

  archivoEscudo(escudo) {
    this.personaComponent.estamparEscudo(escudo);
  }


  cambiarPosicionEscudo(event) {
    this.posicionEscudoCamiseta = event;
  }

  open(content) {
    this.modalService.open(content, {centered: true});
  }

  close() {
    this.modalService.dismissAll();
    this.router.navigate(['/']);
  }
}
