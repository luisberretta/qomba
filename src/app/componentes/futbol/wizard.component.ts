import {Component, OnInit, Output, ViewChild} from '@angular/core';
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
import {NgxUiLoaderService} from "ngx-ui-loader";
import {indumentariaInferior} from "../../clases/IndumentariaInferior";
import {tipografias} from "../../clases/Tipografia";
import {CompressorConfig, ImageCompressorService} from 'ngx-image-compressor';

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

  @ViewChild('template', {static: true}) modalTemplate;
  @ViewChild(PersonaComponent) personaComponent: PersonaComponent;
  @ViewChild(ModeloComponent) modeloComponent: ModeloComponent;
  @ViewChild(ColorComponent) colorComponent: ColorComponent;
  @ViewChild(CamisetaComponent) camisetaComponent: CamisetaComponent;
  @ViewChild(ShortComponent) shortComponent: ShortComponent;
  @ViewChild(EquipoComponent) equipoComponet: EquipoComponent;
  @ViewChild(MediasComponent) mediasComponent: MediasComponent;
  @ViewChild(ResumenPrecioComponent) resumenPrecioComponent: ResumenPrecioComponent;

  constructor(private wizardService: WizardService, private modalService: NgbModal,
              private router: Router, private ngxLoader: NgxUiLoaderService,
              private imageCompressor: ImageCompressorService) {

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
        this.nombreMostrarPaso = 'Elegí los Colores';
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
        this.inicioDePagina(0);
        this.generarPedido();
        break;
    }
    this.inicioDePagina(100);
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
        this.nombreMostrarPaso = 'Elegí los Colores';
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
        this.generarPedidoMedias(event);
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
        this.generarPedidoEquipo(event);
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
    this.inicioDePagina(100);
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

  cambiarColorNumeroShort(color){
    this.personaComponent.cambiarColorNumeroShort(color);
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
    this.pedido.imagenEscudo = formCamiseta.escudoDelantero;
    this.pedido.llevaEscudoDelantero = !!formCamiseta.llevaEscudoDelantero;
    this.pedido.posicionEscudoDelantero = formCamiseta.posicionEscudoDelantero;
    this.pedido.llevaNumeroDelantero = !!formCamiseta.llevaNumeroDelantero;
    this.pedido.posicionNumeroDelantero = formCamiseta.posicionNumeroDelantero;
    this.pedido.llevaNombreEspalda = !!formCamiseta.llevaNombreEspalda;
    this.pedido.llevaNumeroEspalda = !!formCamiseta.llevaNumeroEspalda;
    this.pedido.colorEstampado = formCamiseta.colorEstampado;
    this.pedido.tipoLetra = formCamiseta.tipoLetra;
  }

  generarPedidoShort(formShort) {
    this.pedido.agregarShort = !!formShort.agregarShort;
    this.pedido.imagenEscudo = formShort.escudoShort ? formShort.escudoShort : this.pedido.imagenEscudo;
    this.pedido.agregarEscudoShort = !!formShort.agregarEscudoShort;
    this.pedido.agregarNumeroShort = !!formShort.agregarNumeroShort;
    this.pedido.colorNumeroShort = formShort.colorNumeroShort;
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
    this.pedido.agregarMedias = !!formMedias.agregarMedias;
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

  generarPedido() {
    this.ngxLoader.startLoader('loader-pedido');
    let svgImage = this.personaComponent.generarImagen();
    svgAsPngUri(svgImage, "svg.png").then((data) => {
      fetch(data).then(res=> res.blob()).then(async blob => {
        let fileSVG = new File([blob], "imagenSVG",{type:"image/png"});
        let config: CompressorConfig = {orientation: 1, ratio: 20, quality: 20, enableLogs: true};
        let svgComprimida: File = await this.imageCompressor.compressFile(fileSVG, config);
        let pedido = this.confeccionarPedido();
        let formData = new FormData();
        this.pedido.coloresElegidos = this.generarColoresModelo();
        formData.append("pedido", pedido);
        formData.append("fileSVG", svgComprimida);
        formData.append("fileEscudo", this.pedido.archivoEscudo);
        formData.append("coloresModelo", JSON.stringify(this.pedido.coloresElegidos));
        this.wizardService.generarPedido(formData).subscribe((data) => {
            this.modalText = "Gracias por tu pedido ! Un asesor te contactará dentro de las 24 horas hábiles para coordinar el pago y el plazo de entrega.";
            this.abrirModal();
            this.ngxLoader.stopLoader('loader-pedido');
          },
          (error) => {
            this.modalText = "Ocurrió un error al procesar el pedido, por favor intente nuevamente en unos minutos."
            this.abrirModal();
            this.ngxLoader.stopLoader('loader-pedido');
          });
      });
    });

  }

  generarColoresModelo(){
    return this.personaComponent.obtenerColoresModelo();
  }

  confeccionarPedido() {
    return JSON.stringify({
      nombreCliente: this.pedido.nombreContacto,
      celular: this.pedido.telefonoContacto,
      email: this.pedido.emailContacto,
      nombreEquipo: this.pedido.nombreEquipo,
      cantidadJugadores: this.pedido.cantidadEquipo,
      modelo: this.pedido.modelo.nombre,
      precioTotal: this.pedido.precioTotal,
      llevaEscudoDelantero: this.pedido.llevaEscudoDelantero,
      llevaNumeroDelantero: this.pedido.llevaNumeroDelantero,
      llevaNumeroEspalda: this.pedido.llevaNumeroEspalda,
      llevaNombreEspalda: this.pedido.llevaNombreEspalda,
      tipoLetra: this.obtenerNombreLetra(),
      colorLetra: this.pedido.colorEstampado,
      llevaShort: this.pedido.agregarShort,
      llevaEscudoShort: this.pedido.agregarEscudoShort,
      llevaNumeroShort: this.pedido.agregarNumeroShort,
      llevaMedias: this.pedido.agregarMedias,
      detalleEquipo: this.pedido.detalleEquipo,
      imagenes: this.pedido.imagenes,
      nombreEscudo: this.pedido.nombreEscudo,
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
      let parteColor = {nombreMostrar: undefined, idParte: undefined, colores: [], color: undefined}
      if (this.perteneceRemera(gruposColor[i])) {
        parteColor.idParte = gruposColor[i];
        if (parteColor.idParte) {
          let partes = [];
          partes = coloresParte.find(x => x.idModelo == this.modeloElegido.id).partes
          let parteColores = partes.find(x => x.idParte == parteColor.idParte);
          if (parteColores) {
            parteColor.colores = parteColores.colores;
            parteColor.nombreMostrar = parteColores.nombreMostrar;
            parteColor.color = parteColores.color;
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
          }
        }
      }
    }
    this.formColor = formColor;
  }

  generarFormCamiseta() {
    this.formCamiseta = {
      escudoDelantero: this.pedido.imagenEscudo,
      colorCamiseta: this.pedido.coloresModelo.find(x => x.idParte == 'Remera_principal').color,
      llevaEscudoDelantero: this.pedido.llevaEscudoDelantero,
      posicionEscudoDelantero: this.pedido.posicionEscudoDelantero,
      llevaNumeroDelantero: this.pedido.llevaNumeroDelantero,
      posicionNumeroDelantero: this.pedido.posicionNumeroDelantero,
      llevaNombreEspalda: this.pedido.llevaNombreEspalda,
      llevaNumeroEspalda: this.pedido.llevaNumeroEspalda,
      colorEstampado: this.pedido.colorEstampado,
      tipoLetra: this.pedido.tipoLetra,
      colorNumeroShort : this.pedido.colorNumeroShort
    }
  }

  generarFormShort() {
    let gruposColor = this.obtenerGruposColor();
    let partesShortSVG = [];
    for (let i = 0; i < gruposColor.length; i++) {
      let parteColor = {nombreMostrar: undefined, idParte: undefined, colores: [], color: undefined};
      if (this.perteneceShort(gruposColor[i])) {
        parteColor.idParte = gruposColor[i];
        if (parteColor.idParte) {
          let partes = [];
          partes = coloresParte.find(x => x.idModelo == this.modeloElegido.id).partes
          let parteColores = partes.find(x => x.idParte == parteColor.idParte);
          if (parteColores) {
            parteColor.colores = parteColores.colores;
            parteColor.nombreMostrar = parteColores.nombreMostrar;
            parteColor.color = parteColores.color;
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
          }
        }
      }
    }
    this.formShort = {
      escudoShort: this.pedido.imagenEscudo,
      llevaEscudoDelantero: this.pedido.llevaEscudoDelantero,
      agregarShort: this.pedido.agregarShort,
      colorNumeroShort: this.pedido.colorNumeroShort ? this.pedido.colorNumeroShort : this.pedido.colorEstampado,
      agregarEscudoShort: this.pedido.agregarEscudoShort,
      agregarNumeroShort: this.pedido.agregarNumeroShort,
      partesShortSVG: partesShortSVG,
    }
  }

  generarFormMedias() {
    let gruposColor = this.obtenerGruposColor();
    let partesMediasSVG = [];
    for (let i = 0; i < gruposColor.length; i++) {
      let parteColor = {nombreMostrar: undefined, idParte: undefined, colores: [], color: undefined}
      if (this.perteneceMedias(gruposColor[i])) {
        parteColor.idParte = gruposColor[i];
        if (parteColor.idParte) {
          let partes = [];
          partes = coloresParte.find(x => x.idModelo == this.modeloElegido.id).partes
          let parteColores = partes.find(x => x.idParte == parteColor.idParte);
          if (parteColores) {
            parteColor.colores = parteColores.colores;
            parteColor.nombreMostrar = parteColores.nombreMostrar;
            parteColor.color = parteColores.color;
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
      modelo: this.pedido.modelo.nombre,
      cantidadJugadores: this.pedido.cantidadEquipo,
      precioCamiseta: this.pedido.cantidadEquipo > 6 ? this.pedido.modelo.precioMayorista : this.pedido.modelo.precioIndividual,
      precioShort: this.pedido.cantidadEquipo > 6 ? this.pedido.agregarShort ? indumentariaInferior[0].precioMayorista : 0 : this.pedido.agregarShort ? indumentariaInferior[0].precioIndividual : 0,
      precioMedias: indumentariaInferior[1].precioIndividual,
    }
  }

  agregarPrecioTotal(precioTotal) {
    this.pedido.precioTotal = precioTotal;
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
    this.pedido.nombreEscudo = escudo.name;
    this.pedido.archivoEscudo = escudo;
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

  inicioDePagina(scroll) {
    window.scroll({
      top: scroll,
      behavior: 'smooth'
    });
  }

  abrirModal() {
    this.modalRef = this.modalService.open(this.modalTemplate, {centered: true});
  }

  cerrar() {
    this.modalService.dismissAll();
  }

  cambiarTipografia(tipografia) {
    this.personaComponent.cambiarTipografia(tipografia);
  }

  obtenerNombreLetra() {
    return tipografias.find(x => x.valor == this.pedido.tipoLetra).nombre;
  }

  redireccionar() {
    this.modalService.dismissAll();
    window.location.reload();
  }
}
