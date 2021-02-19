import {Component, OnInit, ViewChild} from '@angular/core';
import {Pedido} from "../../clases/Pedido";
import {WizardService} from "../../servicios/wizard.service";
import {PersonaComponent} from "./persona/persona.component";
import {svgAsPngUri} from 'save-svg-as-png';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ModeloComponent} from "./modelo/modelo.component";
import {coloresParte} from "../../clases/ColorParte";
import {ColorComponent} from "./color/color.component";
import {CamisetaComponent} from "./camiseta/camiseta.component";
import {ShortComponent} from "./short/short.component";
import {EquipoComponent} from "./equipo/equipo.component";
import {CheckoutComponent} from "./checkout/checkout.component";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  ESCUDO_DELANTERO = "Remera_escudo";
  ESCUDO_SHORT = "Short_escudo"

  paso: string = 'modelo';
  numeroPaso: number = 1;
  pedido: Pedido = {imagenes: []};
  formModelo: any;
  formColor: any;
  formCamiseta: any;
  formShort: any;
  formResumenPrecio: any;
  formEquipo: any;
  formCheckOut: any;
  short: boolean;
  nombreMostrarPaso: string = 'Elegí tu Modelo';
  modeloElegido:any;

  @ViewChild(PersonaComponent) personaComponent: PersonaComponent;
  @ViewChild(ModeloComponent) modeloComponent: ModeloComponent;
  @ViewChild(ColorComponent) colorComponent: ColorComponent;
  @ViewChild(CamisetaComponent) camisetaComponent: CamisetaComponent;
  @ViewChild(ShortComponent) shortComponent: ShortComponent;
  @ViewChild(EquipoComponent) equipoComponet: EquipoComponent;
  @ViewChild(CheckoutComponent) checkOutComponent: CheckoutComponent;

  constructor(private wizardService: WizardService, private modalService: NgbModal,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  siguiente(event?) {
    switch (this.numeroPaso) {
      case 1:
        if (!event) {
          this.modeloComponent.siguiente();
          break;
        }
        this.generarPedidoModelo(event);
        this.paso = 'color';
        this.nombreMostrarPaso = 'Elige Colores';
        this.numeroPaso = 2;
        this.generarFormColorIndumentaria();
        this.personaComponent.visualizarModeloCompleto();
        break;
      case 2:
        if (!event) {
          this.colorComponent.siguiente();
          break;
        }
        this.generarPedidoColor(event);
        this.paso = 'camiseta';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.numeroPaso = 3;
        this.generarFormCamiseta();
        break;
      case 3:
        if (!event) {
          this.camisetaComponent.siguiente();
          break;
        }
        this.generarPedidoCamiseta(event);
        this.paso = 'short';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.numeroPaso = 4;
        this.generarFormShort();
        break;
      case 4:
        if (!event) {
          this.shortComponent.siguiente();
          break;
        }
        this.generarPedidoShort(event);
        this.paso = 'equipo';
        this.nombreMostrarPaso = 'Armá tu Equipo';
        this.numeroPaso = 5;
        this.generarFormEquipo();
        break;
      case 5:
        if (!event) {
          this.equipoComponet.siguiente();
          break;
        }
        this.generarPedidoEquipo(event);
        this.paso = 'checkout';
        this.nombreMostrarPaso = 'Confirmación';
        this.numeroPaso = 6;
        this.generarFormCheckOut();
        this.generarFormResumenPrecio();
        break;
      case 6:
        if (!event) {
          this.checkOutComponent.confirmar();
          break;
        }
        this.generarPedido(event);
        break;
    }
    this.inicioDePagina();
  }

  anterior(event?) {
    switch (this.numeroPaso) {
      case 2:
        if (!event) {
          this.colorComponent.anterior();
          break;
        }
        this.generarPedidoColor(event);
        this.numeroPaso = 1;
        this.paso = 'modelo';
        this.nombreMostrarPaso = 'Elegí tu Modelo';
        this.personaComponent.visualizarModeloCompleto();
        this.generarFormModelo();
        break;
      case 3:
        if (!event) {
          this.camisetaComponent.anterior();
          break;
        }
        this.generarPedidoCamiseta(event);
        this.numeroPaso = 2;
        this.paso = 'color';
        this.nombreMostrarPaso = 'Elige Colores';
        this.generarFormColorIndumentaria();
        break;
      case 4:
        if (!event) {
          this.shortComponent.anterior();
          break;
        }
        this.generarPedidoShort(event);
        this.numeroPaso = 3;
        this.paso = 'camiseta';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.generarFormCamiseta();
        break;
      case 5:
        if (!event) {
          this.equipoComponet.anterior();
          break;
        }
        this.generarPedidoEquipo(event);
        this.numeroPaso = 4;
        this.paso = 'short';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.generarFormShort();
        break;
      case 6:
        this.numeroPaso = 5;
        this.paso = 'equipo';
        this.nombreMostrarPaso = 'Armá tu Equipo';
        this.generarFormEquipo();
        break;
    }
    this.inicioDePagina();
  }


  modeloSeleccionado(modelo) {
    this.modeloElegido = modelo;
    this.pedido = {imagenes: []};
    // this.camisetaComponent.modeloElegido(this.modeloElegido);
    this.personaComponent.generarModelo(this.modeloElegido);
  }

  cambiarColor(cambiar) {
    if (cambiar.esEstampa) {
      this.personaComponent.cambiarColorEstampa(cambiar);
    }
    this.personaComponent.cambiarColorParte(cambiar);
  }

  visualizarEstampado(visualizar) {
    this.personaComponent.visualizarEstampado(visualizar);
  }

  generarPedidoModelo(formModelo) {
    this.pedido.modelo = formModelo.modelo;
    this.pedido.agregarShort = formModelo.agregarShort;
    this.pedido.agregarMedias = formModelo.agregarMedias;
  }

  generarPedidoCamiseta(formCamiseta) {
    this.pedido.llevaEscudoDelantero = formCamiseta.llevaEscudoDelantero;
    this.pedido.posicionEscudoDelantero = formCamiseta.posicionEscudoDelantero;
    this.pedido.llevaNumeroDelantero = formCamiseta.llevaNumeroDelantero;
    this.pedido.posicionNumeroDelantero = formCamiseta.posicionNumeroDelantero;
    this.pedido.colorNumeroDelantero = formCamiseta.colorNumeroDelantero;
    this.pedido.llevaNombreEspalda = formCamiseta.llevaNombreEspalda;
    this.pedido.colorNombreEspalda = formCamiseta.colorNombreEspalda;
    this.pedido.llevaNumeroEspalda = formCamiseta.llevaNumeroEspalda;
    this.pedido.colorNumeroEspalda = formCamiseta.colorNumeroEspalda;
  }

  generarPedidoShort(event) {
    this.pedido.agregarEscudoShort = event.agregarEscudoShort;
    this.pedido.agregarNumeroShort = event.agregarNumeroShort;
    this.pedido.tipoLetra = event.tipoLetra;
    this.pedido.sponsorDelantero = event.sponsorDelantero;
    this.pedido.posicionSponsorDelantero = event.posicionSponsorDelantero;
    this.pedido.sponsorTrasero = event.sponsorTrasero;
    this.pedido.posicionSponsorTrasero = event.posicionSponsorTrasero;
    this.pedido.sponsorManga = event.sponsorManga;
    this.pedido.posicionSponsorManga = event.posicionSponsorManga;
  }

  generarPedidoColor(event) {
    this.pedido.coloresModelo = event.partesArray;
  }


  generarPedidoEquipo(event) {
    this.pedido.detalleEquipo = event.equipo;
    this.pedido.nombreEquipo = event.nombreEquipo;
    this.pedido.nombreContacto = event.nombreContacto;
    this.pedido.telefonoContacto = event.telefonoContacto;
    this.pedido.emailContacto = event.emailContacto;
    this.pedido.cantidadEquipo = event.cantidadEquipo;
  }

  generarPedido(event) {
    this.pedido.email = event.email;
    this.pedido.observaciones = event.observaciones;
    let imagenes = this.personaComponent.generarImagenes();
    svgAsPngUri(imagenes[0], "imagenes.png").then((data) => {
      this.pedido.imagenes.push(this.convertirABase64(data));
      // this.pedido.escudo = this.convertirABase64(this.pedido.escudo);
      this.wizardService.generarPedido(this.pedido).subscribe((data) => {
        alert("Tu pedido fue realizado con éxito!");
        this.router.navigate(['/']);
        if (data) {
          console.log("La operación se realizó con éxito.");
        }
      })
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
      let parteColor = {nombreMostrar: undefined, idParte: undefined, colores: []}
      if (this.perteneceIndumentaria(gruposColor[i])) {
        if (this.esGrupoShort(gruposColor[i])) {
          if (this.pedido.agregarShort) {
            parteColor.idParte = gruposColor[i];
          }
        } else {
          parteColor.idParte = gruposColor[i];
        }
        if (parteColor.idParte) {
          let parteColores = coloresParte.find(x=>x.idModelo == this.modeloElegido.id).partes.find(x => x.idParte == parteColor.idParte);
          if (parteColores) {
            parteColor.colores = parteColores.colores;
            parteColor.nombreMostrar = parteColores.nombreMostrar;
            formColor.push(parteColor);
          }
        }
      }
    }

    if (!this.pedido.agregarShort && this.pedido.coloresModelo) {
      this.pedido.coloresModelo = this.pedido.coloresModelo.filter(x => !x.idParte.includes("Short"));
    }

    if (this.pedido.coloresModelo) {
      for (let i = 0; i < formColor.length; i++) {
        for (let j = 0; j < this.pedido.coloresModelo.length; j++) {
          let indexColor = formColor.findIndex(x => x.idParte == this.pedido.coloresModelo[j].idParte);
          if (indexColor) {
            formColor[indexColor].color = this.pedido.coloresModelo[j].color;
          } else {
            formColor[i].color = null;
          }
        }
      }
    }
    this.formColor = formColor;
  }

  perteneceIndumentaria(grupoColor) {
    return grupoColor != 'Nombre' &&
      grupoColor != 'Número_espalda' &&
      grupoColor != 'Número_delantero' &&
      grupoColor != 'Remera_escudo' &&
      grupoColor != 'Short_número' &&
      grupoColor != 'Short_escudo' &&
      !grupoColor.includes("GENERICO");
  }

  esGrupoShort(grupoColor) {
    return grupoColor.includes("Short");
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

  generarFormCamiseta() {
    this.formCamiseta = {
      llevaEscudoDelantero: this.pedido.llevaEscudoDelantero,
      posicionEscudoDelantero: this.pedido.posicionEscudoDelantero,
      llevaNumeroDelantero: this.pedido.llevaNumeroDelantero,
      posicionNumeroDelantero: this.pedido.posicionNumeroDelantero,
      colorNumeroDelantero: this.pedido.colorNumeroDelantero,
      llevaNombreEspalda: this.pedido.llevaNombreEspalda,
      colorNombreEspalda: this.pedido.colorNombreEspalda,
      llevaNumeroEspalda: this.pedido.llevaNumeroEspalda,
      colorNumeroEspalda: this.pedido.colorNumeroEspalda
    }
  }

  generarFormShort() {
    this.formShort = {
      llevaEscudoDelantero: this.pedido.llevaEscudoDelantero,
      agregarShort: this.pedido.agregarShort,
      agregarEscudoShort: this.pedido.agregarEscudoShort,
      agregarNumeroShort: this.pedido.agregarNumeroShort,
      tipoLetra: this.pedido.tipoLetra,
      sponsorDelantero: this.pedido.sponsorDelantero,
      posicionSponsorDelantero: this.pedido.posicionSponsorDelantero,
      sponsorTrasero: this.pedido.sponsorTrasero,
      posicionSponsorTrasero: this.pedido.posicionSponsorTrasero,
      sponsorManga: this.pedido.sponsorManga,
      posicionSponsorManga: this.pedido.posicionSponsorManga,
    };
  }

  generarFormEquipo() {
    this.formEquipo = {
      llevaNombreCamiseta: this.pedido.llevaNombreEspalda,
      llevaNumeroCamiseta: this.pedido.llevaNumeroDelantero,
      llevaShort: this.pedido.agregarShort,
      detalleEquipo: this.pedido.detalleEquipo,
      nombreEquipo: this.pedido.nombreEquipo,
      nombreContacto: this.pedido.nombreContacto,
      telefonoContacto: this.pedido.telefonoContacto,
      emailContacto: this.pedido.emailContacto,
      cantidadEquipo: this.pedido.cantidadEquipo,
    }
  }

  generarFormCheckOut() {
    this.formCheckOut = {
      imagen: this.pedido.imagen,
      email: this.pedido.email,
    }
  }

  generarFormResumenPrecio() {
    let formResumenPrecio = {
      precioCamiseta: this.pedido.precioCamiseta,
      precioShort: this.pedido.precioShort,
      precioMedias: this.pedido.precioMedias,
      precioConjunto: this.pedido.precioConjunto,
    }
  }

  llevaShort(event) {
    this.short = event;
  }

  archivoEscudo(escudo) {
    this.personaComponent.estamparEscudo(escudo, this.ESCUDO_DELANTERO);
    if (this.pedido.agregarShort)
      this.personaComponent.estamparEscudo(escudo, this.ESCUDO_SHORT);
  }

  open(content) {
    this.modalService.open(content, {centered: true});
  }

  close() {
    this.modalService.dismissAll();
    this.router.navigate(['/']);
  }

  inicioDePagina() {
    window.scroll({
      top: 100,
      behavior: 'smooth'
    });
  }


}
