import {
  Component, ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {SvgService} from "../../../servicios/svg.service";
import {DomSanitizer} from "@angular/platform-browser";
import {coloresParte} from "../../../clases/ColorParte";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  ESCUDO_DELANTERO = "Remera_escudo";
  VALORES_ESTAMPA = ['Número_espalda', 'Número_delantero', 'Nombre', 'Short_número'];
  modeloSVG: any;
  url: string = '/assets/images/modelosSVG/';
  modeloSeleccionado: any;
  ocultarModelo = true;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  @Input() paso: string;
  @ViewChild('remera') remera: ElementRef;
  @Input() llevaShort;
  @Input() posicionEscudoCamiseta;
  imgUrl: any;

  constructor(private svgService: SvgService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  generarModelo(modelo) {
    this.modeloSeleccionado = modelo;
    this.modeloSVG = null;
    this.svgService.obtenerSVG(this.url + modelo.urlSvg).subscribe((data) => {
      this.modeloSVG = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  visualizarModeloCompleto() {
    this.ocultarModelo = !this.ocultarModelo;
  }

  cambiarColorParte(cambiar) {
    let grupos = this.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if (grupos[i].id == cambiar.parte) {
        let paths = grupos[i].getElementsByTagName('path');
        let polygon = grupos[i].getElementsByTagName('polygon');
        let line = grupos[i].getElementsByTagName('line');
        let polyline = grupos[i].getElementsByTagName('polyline');
        let ellipse = grupos[i].getElementsByTagName('ellipse');
        let rect = grupos[i].getElementsByTagName('rect');
        for (let j = 0; j < paths.length; j++) {
          paths[j].setAttribute('fill', cambiar.color);
        }
        for (let j = 0; j < polygon.length; j++) {
          polygon[j].setAttribute('fill', cambiar.color);
        }
        for (let j = 0; j < line.length; j++) {
          line[j].setAttribute('fill', cambiar.color);
        }
        for (let j = 0; j < polyline.length; j++) {
          polyline[j].setAttribute('fill', cambiar.color);
        }
        for (let j = 0; j < ellipse.length; j++) {
          ellipse[j].setAttribute('fill',cambiar.color);
        }
        for (let j = 0; j < rect.length; j++) {
          rect[j].setAttribute('fill',cambiar.color);
        }
        grupos[i].classList.remove('parte-seleccionada');
      }
    }
  }

  cambiarColorEstampa(cambiar) {
    let grupos = this.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if (this.perteneceEstampado(grupos[i]))
        grupos[i].getElementsByTagName('text')[0].setAttribute('fill', cambiar.color);
    }
  }

  cambiarColorNumeroShort(color){
    let grupos = this.obtenerGrupos();
    let estampado = grupos.namedItem("Short_número");
    let shortNumero = estampado.getElementsByTagName('text')[0];
    shortNumero.setAttribute('fill',color);
  }

  perteneceEstampado(grupo) {
    return this.VALORES_ESTAMPA.find(x => x == grupo.id);
  }

  visualizarEstampado(visualizar) {
    if (visualizar.parte) {
      let grupos = this.obtenerGrupos();
      let estampado = grupos.namedItem(visualizar.parte);
      if (visualizar.valor) {
        estampado.setAttribute('visibility', 'visible');
        this.posicionEstampado(visualizar);
      } else {
        estampado.setAttribute('visibility', 'hidden');
      }
    }
  }

  posicionEstampado(posicion) {
    let grupos = this.obtenerGrupos();
    let estampado = grupos.namedItem(posicion.parte);
    if (estampado.id == this.ESCUDO_DELANTERO) {
      estampado = estampado.getElementsByTagName('image')[0];
    } else {
      estampado = estampado.getElementsByTagName('text')[0];
    }
    let svgMatrix = null;
    let coloresModelo = [];
    let posicionesTipografia = [];
    let posicionTipografia = null;
    let posicionesEscudo = null;
    coloresModelo = coloresParte.find(x => x.idModelo == this.modeloSeleccionado.id).partes;
    posicionesTipografia = coloresModelo.find(x => x.idParte == posicion.parte).posicionesTipografia;
    if (posicionesTipografia?.length) {
      posicionTipografia = posicionesTipografia.find(x => x.tipografia == posicion.tipografia);
    } else {
      posicionesEscudo = coloresModelo.find(x => x.idParte == posicion.parte).posicionMatrix;
    }
    switch (posicion.posicion) {
      case 'Centro':
        svgMatrix = posicionTipografia ? posicionTipografia.posicionMatrix.centro : posicionesEscudo.centro;
        this.cambiarMatrix(estampado, svgMatrix)
        break;
      case 'Derecha':
        svgMatrix = posicionTipografia ? posicionTipografia.posicionMatrix.derecha : posicionesEscudo.derecha;
        this.cambiarMatrix(estampado, svgMatrix)
        break;
      case 'Izquierda':
        svgMatrix = posicionTipografia ? posicionTipografia.posicionMatrix.izquierda : posicionesEscudo.izquierda;
        this.cambiarMatrix(estampado, svgMatrix)
        break;
      case 'Unica':
        svgMatrix = posicionTipografia.posicionMatrix.unica;
        this.cambiarMatrix(estampado, svgMatrix)
    }
  }

  cambiarMatrix(estampado, ubicacion) {
    if (ubicacion) {
      estampado.transform.baseVal.getItem('matrix').matrix.a = ubicacion[0];
      estampado.transform.baseVal.getItem('matrix').matrix.b = ubicacion[1];
      estampado.transform.baseVal.getItem('matrix').matrix.c = ubicacion[2];
      estampado.transform.baseVal.getItem('matrix').matrix.d = ubicacion[3];
      estampado.transform.baseVal.getItem('matrix').matrix.e = ubicacion[4];
      estampado.transform.baseVal.getItem('matrix').matrix.f = ubicacion[5];
    }
  }

  estamparEscudo(escudo, estampadoEscudo) {
    let reader = new FileReader();
    reader.readAsDataURL(escudo);
    let grupos = this.obtenerGrupos();
    let estampadoGrupo = grupos.namedItem(estampadoEscudo);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
      let img = new Image();
      if (typeof reader.result === "string") {
        img.src = reader.result;
      }
      img.onload = function () {
        let imgSize = {
          w: img.width,
          h: img.height
        };
        let relacionAspecto = imgSize.w / imgSize.h;
        let ancho = 200; //ANCHO DE IMAGEN ORIGINAL-
        let alto = ancho / relacionAspecto;

        estampadoGrupo.firstElementChild.setAttribute('height', alto.toString() + 'px');
        estampadoGrupo.firstElementChild.setAttribute('width', ancho.toString() + 'px');
      };
      estampadoGrupo.firstElementChild.setAttribute('xlink:href', this.imgUrl);
    }
  }

  generarImagen(): any {
    let imagen: HTMLAllCollection;
    imagen = this.remera.nativeElement.getElementsByTagName('svg')[0];
    return imagen;
  }

  obtenerGrupos() {
    return this.dataContainer.nativeElement.getElementsByTagName('g');
  }

  cambiarTipografia(tipografia) {
    let grupos = this.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if (this.perteneceTipografia(grupos[i].id)) {
        this.cambiarTamañoTipografia(tipografia,grupos[i]);
        grupos[i].getElementsByTagName('text')[0].setAttribute('font-family', tipografia.tipografia);
        let visualizar = {
          parte: grupos[i].id,
          tipografia: tipografia.tipografia,
          posicion: grupos[i].id == "Número_delantero" ? tipografia.posicion : 'Unica',
        }
        this.posicionEstampado(visualizar);
      }
    }
  }

  cambiarTamañoTipografia(tipografia,grupo){
    if(grupo.id == 'Número_espalda'){
      grupo.getElementsByTagName('text')[0].setAttribute('font-size', tipografia.fontSizeNumeroEspalda);
    }
    if(grupo.id == 'Nombre'){
      grupo.getElementsByTagName('text')[0].setAttribute('font-size', tipografia.fontSizeNombre);
    }
    if(grupo.id == 'Short_número'){
      grupo.getElementsByTagName('text')[0].setAttribute('font-size', tipografia.fontSizeNumeroShort);
    }
    if(grupo.id == 'Número_delantero'){
      grupo.getElementsByTagName('text')[0].setAttribute('font-size', tipografia.fontSizeNumeroDelantero);
    }
  }

  perteneceTipografia(grupo) {
    return grupo == "Número_espalda" || grupo == "Nombre" || grupo == "Short_número" || grupo == "Número_delantero";
  }

}
