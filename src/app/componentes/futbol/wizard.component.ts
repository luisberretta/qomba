import {camisetaSvg} from "../../clases/CamisetaSvg";
import {Component, OnInit, ViewChild} from '@angular/core';
import {camisetaModelos} from "../../clases/CamisetaModelo";
import {Pedido} from "../../clases/Pedido";
import {WizardService} from "../../servicios/wizard.service";
import {PersonaComponent} from "./persona/persona.component";
import {svgAsPngUri} from 'save-svg-as-png';
import {CamisetaComponent} from "./camiseta/camiseta.component";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  paso: string = 'camiseta';
  numeroPaso: number = 1;
  categoria: string = 'basica';
  url: string;
  camisetaModelos: any = camisetaModelos;
  camisetaSvg: any = camisetaSvg;
  partesSvg: any;
  camiseta: any;
  seleccionoModelo: boolean = false;
  pedido: Pedido = {imagenes: []};
  colorPartes: any;
  colorShort: String;
  formCamiseta: any;

  @ViewChild(PersonaComponent) personaComponent: PersonaComponent;

  constructor(private wizardService: WizardService) {

  }

  ngOnInit(): void {
    this.initCamisetas();
  }

  pasoCamiseta(paso) {
    this.paso = paso;
    this.numeroPaso = 1;
  }

  pasoShort(paso) {
    if (this.numeroPaso > 2) {
      this.paso = paso;
      this.numeroPaso = 2;
    }
  }

  pasoNumero(paso) {
    if (this.numeroPaso > 3) {
      this.paso = paso;
      this.numeroPaso = 3;
    }
  }

  pasoEquipo(paso) {
    if (this.numeroPaso > 4) {
      this.paso = paso;
      this.numeroPaso = 4;
    }
  }

  pasoCheckout(paso) {
    if (this.numeroPaso > 5) {
      this.paso = paso;
      this.numeroPaso = 5;
    }
  }

  basica() {
    this.categoria = 'basica';
    this.url = '/assets/images/basicas/'
  }

  intermedia() {
    this.categoria = 'intermedia';
    this.url = '/assets/images/intermedias/'
  }

  premium() {
    this.categoria = 'premium';
    this.url = '/assets/images/premium/'
  }

  propio() {
    this.categoria = 'propio';
  }

  modeloElegido(id) {
    this.seleccionoModelo = true;
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      if (id == this.camisetaModelos[i].id) {
        this.camisetaModelos[i].seleccionado = true;
        this.camiseta = this.camisetaModelos[i];
      } else {
        this.camisetaModelos[i].seleccionado = false;
      }
    }
    for (let i = 0; i < this.camisetaSvg.length; i++) {
      if (id == this.camisetaSvg[i].idModelo) {
        this.partesSvg = this.camisetaSvg[i];
      }
    }
  }

  siguiente(event) {
    switch (this.numeroPaso) {
      case 1:
        this.generarPedidoCamiseta(event);
        this.paso = 'short';
        this.numeroPaso = 2;
        break;
      case 2:
        this.generarPedidoShort(event);
        this.paso = 'numero';
        this.numeroPaso = 3;
        break;
      case 3:
        this.generarPedidoNumero(event);
        this.paso = 'equipo';
        this.numeroPaso = 4;
        break;
      case 4:
        this.generarPedidoEquipo(event);
        this.paso = 'checkout';
        this.numeroPaso = 5;
        break;
      case 5:
        this.generarPedido(event);
        break;
    }
  }

  anterior() {
    switch (this.numeroPaso) {
      case 2:
        this.numeroPaso = 1;
        this.paso = 'camiseta';
        this.generarFormCamiseta();
        break;
      case 3:
        this.numeroPaso = 2;
        this.paso = 'short';
        break;
      case 4:
        this.numeroPaso = 3;
        this.paso = 'numero';
        break;
      case 5:
        this.numeroPaso = 4;
        this.paso = 'equipo';
        break;
    }
  }

  generarPedidoCamiseta(event) {
    this.pedido.cuelloCamiseta = event.cuello;
    this.pedido.escudo = this.convertirBase64(event.escudo);
    this.pedido.posicionEscudo = event.posicionEscudo;
    this.pedido.calidadEscudo = event.calidadEscudo;
  }

  generarPedidoShort(event) {
    if (event) {
      // Realizar mapeo de datos
    } else {
      this.pedido.tieneShort = null;
    }
  }

  generarPedidoNumero(event) {
    this.pedido.tieneNroFrontalCamiseta = event.camisetaValor;
    this.pedido.posicionNroFrontalCamiseta = event.posicionNumeroCamiseta;
    this.pedido.tieneNroShort = event.shortValor
    this.pedido.posicionNroShort = event.posicionesNumeroShort;
  }

  generarPedidoEquipo(event) {
    this.pedido.detalleEquipo = event.equipo;
  }

  generarPedido(event) {
    this.pedido.mail = event.mail;
    svgAsPngUri(this.personaComponent.generarImagenes(), "imagenes.png").then((data) => {
      this.pedido.imagenes.push(this.convertirBase64(data));
      this.pedido.imagenes.push(this.convertirBase64(data));
      this.wizardService.generarPedido(this.pedido).subscribe((data) => {
        if (data) {
          console.log("La operación se realizó con éxito.");
        }
      })
    });

  }

  convertirBase64(cadena) {
    return cadena.replace('data:image/png;base64,', '');
  }

  cambiarColor(event) {
    this.colorPartes = event;
  }

  cambiarColorShort(event) {
    this.colorShort = event;
  }

  initCamisetas() {
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionado = false;
    }
  }

  generarFormCamiseta() {
    let form = {
      'cuelloCamiseta': this.pedido.cuelloCamiseta,
      'escudo': this.pedido.escudo,
      'posicionEscudo': this.pedido.posicionEscudo,
      'calidadEscudo': this.pedido.calidadEscudo,
    }

    this.formCamiseta = form;
  }
}
