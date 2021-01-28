import {Component, OnInit, ViewChild} from '@angular/core';
import {camisetaModelos} from "../../clases/CamisetaModelo";
import {Pedido} from "../../clases/Pedido";
import {WizardService} from "../../servicios/wizard.service";
import {PersonaComponent} from "./persona/persona.component";
import {svgAsPngUri} from 'save-svg-as-png';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  paso: string = 'camiseta';
  numeroPaso: number = 1;
  categoria: string = 'basica';
  url: string = '/assets/images/basicas/';
  camisetaModelos: any = camisetaModelos;
  camisetasSvg: any;
  camiseta: any;
  seleccionoModelo: boolean = false;
  pedido: Pedido = {imagenes: []};
  formCamiseta: any;
  formShort: any;
  formNumero: any;
  formEquipo: any;
  formCheckOut: any;
  short: boolean;

  @ViewChild(PersonaComponent) personaComponent: PersonaComponent;

  constructor(private wizardService: WizardService) {

  }

  ngOnInit(): void {
    this.initCamisetas();
  }

  basica() {
    this.categoria = 'basica';
    this.url = '/assets/images/basicas/';
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
      this.camisetaModelos[i].seleccionado = false;
      if (id == this.camisetaModelos[i].id) {
        this.camisetaModelos[i].seleccionado = true;
        this.camiseta = this.camisetaModelos[i];
        this.camisetasSvg = this.camisetaModelos[i].urlsSvg;
      }
    }
  }

  siguiente(event) {
    switch (this.numeroPaso) {
      case 1:
        this.generarPedidoCamiseta(event);
        this.paso = 'short';
        this.numeroPaso = 2;
        this.generarFormShort();
        break;
      case 2:
        this.generarPedidoShort(event);
        this.paso = 'numero';
        this.numeroPaso = 3;
        this.generarFormNumero();
        break;
      case 3:
        this.generarPedidoNumero(event);
        this.paso = 'equipo';
        this.numeroPaso = 4;
        this.generarFormEquipo();
        break;
      case 4:
        this.generarPedidoEquipo(event);
        this.paso = 'checkout';
        this.numeroPaso = 5;
        this.generarFormCheckOut();
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
        this.generarFormShort();
        break;
      case 4:
        this.numeroPaso = 3;
        this.paso = 'numero';
        this.generarFormNumero();
        break;
      case 5:
        this.numeroPaso = 4;
        this.paso = 'equipo';
        this.generarFormEquipo();
        break;
    }
  }

  generarPedidoCamiseta(event) {
    this.pedido.cuelloCamiseta = event.cuello;
    // this.pedido.escudo = this.convertirBase64(event.escudo);
    this.pedido.posicionEscudo = event.posicionEscudo;
    this.pedido.calidadEscudo = event.calidadEscudo;
  }

  generarPedidoShort(event) {
    this.pedido.llevaShort = event.llevaShort;
    this.pedido.llevaEscudoShort = event.llevaEscudoShort;
    this.pedido.llevaNroShort = event.llevaNroShort;
  }

  generarPedidoNumero(event) {
    this.pedido.llevaNombreCamiseta = event.llevaNombreCamiseta;
    this.pedido.llevaNumeroCamiseta = event.llevaNumeroCamiseta;
    this.pedido.llevaNumeroFrontalCamiseta = event.llevaNumeroFrontalCamiseta;
    this.pedido.posicionNumeroCamiseta = event.posicionNumeroCamiseta;
    this.pedido.llevaNumeroShort = event.llevaNumeroShort;
    this.pedido.posicionNumeroSort = event.posicionNumeroSort;
  }

  generarPedidoEquipo(event) {
    this.pedido.detalleEquipo = event.equipo;
  }

  generarPedido(event) {
    this.pedido.mail = event.mail;
    svgAsPngUri(this.personaComponent.generarImagenes(), "imagenes.png").then((data) => {
      this.pedido.imagenes.push(this.convertirBase64(data[0]));
      this.pedido.imagenes.push(this.convertirBase64(data[1]));
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

  initCamisetas() {
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionado = false;
    }
  }

  generarFormCamiseta() {
    this.formCamiseta = {
      cuelloCamiseta: this.pedido.cuelloCamiseta,
      escudo: this.pedido.escudo,
      posicionEscudo: this.pedido.posicionEscudo,
      calidadEscudo: this.pedido.calidadEscudo,
    };
  }

  generarFormShort() {
    this.formShort = {
      llevaShort: this.pedido.llevaShort,
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
      llevaShort: this.pedido.llevaShort,
      llevaNumeroShort: this.pedido.llevaNumeroShort,
      posicionNumeroSort: this.pedido.posicionNumeroSort,
    }
  }

  generarFormEquipo() {
    this.formEquipo = {
      llevaNombreCamiseta: this.pedido.llevaNombreCamiseta,
      llevaNumeroCamiseta: this.pedido.llevaNumeroCamiseta,
      llevaShort: this.pedido.llevaShort,
      detalleEquipo : this.pedido.detalleEquipo,
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
      llevaShort: this.pedido.llevaShort,
      llevaEscudoShort: this.pedido.llevaEscudoShort,
      llevaNumeroShort: this.pedido.llevaNumeroShort,
      posicionNumeroSort: this.pedido.posicionNumeroSort,
      detalleEquipo: this.pedido.detalleEquipo,
    }
  }

  llevaShort(event) {
    this.short = event;
  }
}
