import {Component, OnInit, ViewChild} from '@angular/core';
import {Pedido} from "../../clases/Pedido";
import {WizardService} from "../../servicios/wizard.service";
import {PersonaComponent} from "./persona/persona.component";
import {svgAsPngUri} from 'save-svg-as-png';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  paso: string = 'camiseta';
  numeroPaso: number = 1;
  url: string = '/assets/images/basicas/';
  pedido: Pedido = {imagenes: []};
  formCamiseta: any;
  formShort: any;
  formNumero: any;
  formEquipo: any;
  formCheckOut: any;
  short: boolean;
  imagenEscudo: any;
  posicionEscudoCamiseta: any;
  nombreMostrarPaso: string = 'Elegí tu Modelo';

  @ViewChild(PersonaComponent) personaComponent: PersonaComponent;

  constructor(private wizardService: WizardService, private modalService: NgbModal, private router: Router) {

  }

  ngOnInit(): void {

  }

  // modeloElegido(id) {
  //   this.seleccionoModelo = true;
  //   for (let i = 0; i < this.camisetaModelos.length; i++) {
  //     this.camisetaModelos[i].seleccionado = false;
  //     if (id == this.camisetaModelos[i].id) {
  //       this.camisetaModelos[i].seleccionado = true;
  //       this.camiseta = this.camisetaModelos[i];
  //       this.camisetasSvg = this.camisetaModelos[i].urlsSvg;
  //     }
  //   }
  // }

  siguiente(event) {
    switch (this.numeroPaso) {
      case 1:
        this.generarPedidoCamiseta(event);
        this.paso = 'short';
        this.nombreMostrarPaso = 'Elige Colores';
        this.numeroPaso = 2;
        this.generarFormShort();
        break;
      case 2:
        this.generarPedidoShort(event);
        this.paso = 'numero';
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
        this.generarPedidoShort(event);
        this.numeroPaso = 1;
        this.paso = 'camiseta';
        this.nombreMostrarPaso = 'Elegí tu Modelo';
        this.generarFormCamiseta();
        break;
      case 3:
        this.generarPedidoNumero(event);
        this.numeroPaso = 2;
        this.paso = 'short';
        this.nombreMostrarPaso = 'Elige Colores';
        this.generarFormShort();
        break;
      case 4:
        this.generarPedidoEquipo(event);
        this.numeroPaso = 3;
        this.paso = 'numero';
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

  generarPedidoCamiseta(event) {
    this.pedido.cuelloCamiseta = event.cuello;
    if (event.escudo) {
      this.pedido.escudo = event.escudo;
    }
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
    return cadena.substring(cadena.indexOf(",")+1,cadena.length+1);
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
      posicionNumeroShort: this.pedido.posicionNumeroShort,
    }
  }

  generarFormEquipo() {
    this.formEquipo = {
      llevaNombreCamiseta: this.pedido.llevaNombreCamiseta,
      llevaNumeroCamiseta: this.pedido.llevaNumeroCamiseta,
      llevaShort: this.pedido.llevaShort,
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
      llevaShort: this.pedido.llevaShort,
      llevaEscudoShort: this.pedido.llevaEscudoShort,
      llevaNumeroShort: this.pedido.llevaNumeroShort,
      posicionNumeroSort: this.pedido.posicionNumeroShort,
      detalleEquipo: this.pedido.detalleEquipo,
    }
  }

  llevaShort(event) {
    this.short = event;
  }

  escudo(event) {
    this.imagenEscudo = event;
  }

  editarPersona(editarCamiseta) {
    this.personaComponent.editarCamiseta(editarCamiseta);
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
