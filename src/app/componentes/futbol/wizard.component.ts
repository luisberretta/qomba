import {Component, OnInit, ViewChild} from '@angular/core';
import {Pedido} from "../../clases/Pedido";
import {WizardService} from "../../servicios/wizard.service";
import {PersonaComponent} from "./persona/persona.component";
import {svgAsPngUri} from 'save-svg-as-png';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ModeloComponent} from "./modelo/modelo.component";
import {coloresParte} from "../../clases/ColorParte";
import {ColorComponent} from "./color/color.component";
import {CamisetaComponent} from "./camiseta/camiseta.component";
import {ShortComponent} from "./short/short.component";
import {EquipoComponent} from "./equipo/equipo.component";
import {MediasComponent} from "./medias/medias.component";
import {ResumenPrecioComponent} from "./resumen-precio/resumen-precio.component";

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
  formMedias: any;
  nombreMostrarPaso: string = 'Elegí tu Modelo';
  modeloElegido: any;
  modalRef: NgbModalRef;
  modalText: string;

  @ViewChild('template', { static: true }) modalTemplate;
  @ViewChild(PersonaComponent) personaComponent: PersonaComponent;
  @ViewChild(ModeloComponent) modeloComponent: ModeloComponent;
  @ViewChild(ColorComponent) colorComponent: ColorComponent;
  @ViewChild(CamisetaComponent) camisetaComponent: CamisetaComponent;
  @ViewChild(ShortComponent) shortComponent: ShortComponent;
  @ViewChild(EquipoComponent) equipoComponet: EquipoComponent;
  @ViewChild(MediasComponent) mediasComponent: MediasComponent;
  @ViewChild(ResumenPrecioComponent) resumenPrecioComponent: ResumenPrecioComponent;

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
        this.generarFormColor();
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
        this.paso = 'medias';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.numeroPaso = 5;
        this.generarFormMedias();
        break;
      case 5:
        if (!event) {
          this.mediasComponent.siguiente();
          break;
        }
        this.generarPedidoMedias(event);
        this.paso = 'equipo';
        this.nombreMostrarPaso = 'Armá tu Equipo';
        this.numeroPaso = 6;
        this.generarFormEquipo();
        break;
      case 6:
        if (!event) {
          this.equipoComponet.siguiente();
          break;
        }
        this.generarPedidoEquipo(event);
        this.paso = 'resumen-precio';
        this.nombreMostrarPaso = 'Confirmación';
        this.numeroPaso = 7;
        this.generarFormResumenPrecio();
        break;
      case 7:
        if (!event) {
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
        this.generarFormColor();
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
          this.mediasComponent.anterior();
          break;
        }
        this.generarPedidoEquipo(event);
        this.numeroPaso = 4;
        this.paso = 'short';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.generarFormShort();
        break;
      case 6:
        if (!event) {
          this.equipoComponet.anterior();
          break;
        }
        this.numeroPaso = 5;
        this.paso = 'medias';
        this.nombreMostrarPaso = 'Personalizá tu Modelo';
        this.generarFormMedias();
        break;
      case 7:
        if (!event) {
          this.resumenPrecioComponent.anterior();
          break;
        }
        this.numeroPaso = 6;
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
  }

  generarPedidoColor(formColor) {
    if (this.pedido.coloresModelo) {
      for (let i = 0; i < formColor.partesRemeraSVG.length; i++) {
        let indexParte = -1;
        for (let j = 0; j < this.pedido.coloresModelo.length; j++) {
          if (this.pedido.coloresModelo[j].idParte == formColor.partesRemeraSVG[i].idParte) {
            indexParte = j;
          }
        }
        if (indexParte > -1) {
          this.pedido.coloresModelo[indexParte] = formColor.partesRemeraSVG[i];
        } else {
          this.pedido.coloresModelo.push(formColor.partesRemeraSVG[i]);
        }
        indexParte = -1;
      }
    } else {
      this.pedido.coloresModelo = formColor.partesRemeraSVG;
    }
  }

  generarPedidoCamiseta(formCamiseta) {
    this.pedido.llevaEscudoDelantero = formCamiseta.llevaEscudoDelantero;
    this.pedido.posicionEscudoDelantero = formCamiseta.posicionEscudoDelantero;
    this.pedido.llevaNumeroDelantero = formCamiseta.llevaNumeroDelantero;
    this.pedido.posicionNumeroDelantero = formCamiseta.posicionNumeroDelantero;
    this.pedido.llevaNombreEspalda = formCamiseta.llevaNombreEspalda;
    this.pedido.llevaNumeroEspalda = formCamiseta.llevaNumeroEspalda;
    this.pedido.colorEstampado = formCamiseta.colorEstampado;
    this.pedido.tipoLetra = formCamiseta.tipoLetra;
  }

  generarPedidoShort(formShort) {
    this.pedido.agregarShort = formShort.agregarShort;
    this.pedido.agregarEscudoShort = formShort.agregarEscudoShort;
    this.pedido.agregarNumeroShort = formShort.agregarNumeroShort;
    for (let i = 0; i < formShort.partesShortSVG.length; i++) {
      let indexParte = -1;
      for (let j = 0; j < this.pedido.coloresModelo.length; j++) {
        if (this.pedido.coloresModelo[j].idParte == formShort.partesShortSVG[i].idParte) {
          indexParte = j;
        }
      }
      if (indexParte > -1) {
        this.pedido.coloresModelo[indexParte] = formShort.partesShortSVG[i];
      } else {
        this.pedido.coloresModelo.push(formShort.partesShortSVG[i]);
      }
    }
  }

  generarPedidoMedias(formMedias) {
    this.pedido.agregarMedias = formMedias.agregarMedias;
    this.pedido.sponsorDelantero = formMedias.sponsorDelantero;
    this.pedido.posicionSponsorDelantero = formMedias.posicionSponsorDelantero;
    this.pedido.sponsorTrasero = formMedias.sponsorTrasero;
    this.pedido.posicionSponsorTrasero = formMedias.posicionSponsorTrasero;
    this.pedido.sponsorManga = formMedias.sponsorManga;
    this.pedido.posicionSponsorManga = formMedias.posicionSponsorManga;
    for (let i = 0; i < formMedias.partesMediasSVG.length; i++) {
      let indexParte = -1
      for (let j = 0; j < this.pedido.coloresModelo.length; j++) {
        if (this.pedido.coloresModelo[j].idParte == formMedias.partesMediasSVG[i].idParte) {
          indexParte = j;
        }
      }
      if (indexParte > -1) {
        this.pedido.coloresModelo[indexParte] = formMedias.partesMediasSVG[i];
      } else {
        this.pedido.coloresModelo.push(formMedias.partesMediasSVG[i]);
      }
    }
  }

  generarPedidoEquipo(formEquipo) {
    this.pedido.detalleEquipo = formEquipo.equipo;
    this.pedido.nombreEquipo = formEquipo.nombreEquipo;
    this.pedido.nombreContacto = formEquipo.nombreContacto;
    this.pedido.telefonoContacto = formEquipo.telefonoContacto;
    this.pedido.emailContacto = formEquipo.emailContacto;
    this.pedido.cantidadEquipo = formEquipo.cantidadEquipo;
  }

  generarPedido(formResumenPrecio) {
    this.pedido.email = formResumenPrecio.email;
    this.pedido.observaciones = formResumenPrecio.observaciones;
    let imagenes = this.personaComponent.generarImagenes();
    svgAsPngUri(imagenes[0], "imagenes.png").then((data) => {
      this.pedido.imagenes.push(this.convertirABase64(data));

      // this.pedido.escudo = this.convertirABase64(this.pedido.escudo);
      this.wizardService.generarPedido(this.pedido).subscribe((data) => {
        this.abrirModal();
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
    };
  }

  generarFormColor() {
    let gruposColor = this.obtenerGruposColor();
    let formColor = [];
    for (let i = 0; i < gruposColor.length; i++) {
      let parteColor = {nombreMostrar: undefined, idParte: undefined, colores: []}
      if (this.perteneceRemera(gruposColor[i])) {
        parteColor.idParte = gruposColor[i];
        if (parteColor.idParte) {
          let parteColores = coloresParte.find(x => x.idModelo == this.modeloElegido.id).partes.find(x => x.idParte == parteColor.idParte);
          if (parteColores) {
            parteColor.colores = parteColores.colores;
            parteColor.nombreMostrar = parteColores.nombreMostrar;
            formColor.push(parteColor);
          }
        }
      }
    }
    if (this.pedido.coloresModelo) {
      for (let i = 0; i < formColor.length; i++) {
        for (let j = 0; j < this.pedido.coloresModelo.length; j++) {
          let indexColor = formColor.findIndex(x => x.idParte == this.pedido.coloresModelo[j].idParte);
          if (indexColor > -1) {
            formColor[indexColor].color = this.pedido.coloresModelo[j].color;
          } else {
            formColor[i].color = null;
          }
        }
      }
    }
    this.formColor = formColor;
  }

  generarFormCamiseta() {
    this.formCamiseta = {
      llevaEscudoDelantero: this.pedido.llevaEscudoDelantero,
      posicionEscudoDelantero: this.pedido.posicionEscudoDelantero,
      llevaNumeroDelantero: this.pedido.llevaNumeroDelantero,
      posicionNumeroDelantero: this.pedido.posicionNumeroDelantero,
      llevaNombreEspalda: this.pedido.llevaNombreEspalda,
      llevaNumeroEspalda: this.pedido.llevaNumeroEspalda,
      colorEstampado: this.pedido.colorEstampado,
      tipoLetra: this.pedido.tipoLetra,
    }
  }

  generarFormShort() {
    let gruposColor = this.obtenerGruposColor();
    let partesShortSVG = [];
    for (let i = 0; i < gruposColor.length; i++) {
      let parteColor = {nombreMostrar: undefined, idParte: undefined, colores: []}
      if (this.perteneceShort(gruposColor[i])) {
        parteColor.idParte = gruposColor[i];
        if (parteColor.idParte) {
          let parteColores = coloresParte.find(x => x.idModelo == this.modeloElegido.id).partes.find(x => x.idParte == parteColor.idParte);
          if (parteColores) {
            parteColor.colores = parteColores.colores;
            parteColor.nombreMostrar = parteColores.nombreMostrar;
            partesShortSVG.push(parteColor);
          }
        }
      }
    }
    if (this.pedido.coloresModelo) {
      for (let i = 0; i < partesShortSVG.length; i++) {
        for (let j = 0; j < this.pedido.coloresModelo.length; j++) {
          let indexColor = partesShortSVG.findIndex(x => x.idParte == this.pedido.coloresModelo[j].idParte);
          if (indexColor > -1) {
            partesShortSVG[indexColor].color = this.pedido.coloresModelo[j].color;
          } else {
            partesShortSVG[i].color = null;
          }
        }
      }
    }
    this.formShort = {
      llevaEscudoDelantero: this.pedido.llevaEscudoDelantero,
      agregarShort: this.pedido.agregarShort,
      agregarEscudoShort: this.pedido.agregarEscudoShort,
      agregarNumeroShort: this.pedido.agregarNumeroShort,
      partesShortSVG: partesShortSVG,
    }
  }


  generarFormMedias() {
    let gruposColor = this.obtenerGruposColor();
    let partesMediasSVG = [];
    for (let i = 0; i < gruposColor.length; i++) {
      let parteColor = {nombreMostrar: undefined, idParte: undefined, colores: []}
      if (this.perteneceMedias(gruposColor[i])) {
        parteColor.idParte = gruposColor[i];
        if (parteColor.idParte) {
          let parteColores = coloresParte.find(x => x.idModelo == this.modeloElegido.id).partes.find(x => x.idParte == parteColor.idParte);
          if (parteColores) {
            parteColor.colores = parteColores.colores;
            parteColor.nombreMostrar = parteColores.nombreMostrar;
            partesMediasSVG.push(parteColor);
          }
        }
      }
    }
    if (this.pedido.coloresModelo) {
      for (let i = 0; i < partesMediasSVG.length; i++) {
        for (let j = 0; j < this.pedido.coloresModelo.length; j++) {
          let indexColor = partesMediasSVG.findIndex(x => x.idParte == this.pedido.coloresModelo[j].idParte);
          if (indexColor > -1) {
            partesMediasSVG[indexColor].color = this.pedido.coloresModelo[j].color;
          } else {
            partesMediasSVG[i].color = null;
          }
        }
      }
    }
    this.formMedias = {
      agregarMedias: this.pedido.agregarMedias,
      sponsorDelantero: this.pedido.sponsorDelantero,
      posicionSponsorDelantero: this.pedido.posicionSponsorDelantero,
      sponsorTrasero: this.pedido.sponsorTrasero,
      posicionSponsorTrasero: this.pedido.posicionSponsorTrasero,
      sponsorManga: this.pedido.sponsorManga,
      posicionSponsorManga: this.pedido.posicionSponsorManga,
      partesMediasSVG: partesMediasSVG
    }
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

  generarFormResumenPrecio() {
    this.formResumenPrecio = {
      precioCamiseta: this.pedido.precioCamiseta,
      precioShort: this.pedido.precioShort,
      precioMedias: this.pedido.precioMedias,
      precioConjunto: this.pedido.precioConjunto,
    }
  }

  perteneceRemera(grupoColor) {
    return grupoColor.includes('Remera') && grupoColor != 'Remera_escudo';
  }

  perteneceShort(grupoColor) {
    return grupoColor.includes('Short') && grupoColor != 'Short_escudo' && grupoColor != 'Short_número';
  }

  perteneceMedias(grupoColor) {
    return grupoColor.includes('Medias');
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

  archivoEscudo(escudo) {
    this.personaComponent.estamparEscudo(escudo, this.ESCUDO_DELANTERO);
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

  abrirModal() {
    this.modalRef = this.modalService.open(this.modalTemplate, { centered: true });
  }

  cerrar() {
    this.modalService.dismissAll();
  }
}
