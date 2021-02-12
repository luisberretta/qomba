import {
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges, ViewChild,
} from '@angular/core';
import {SvgService} from "../../../servicios/svg.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  DERECHA = 180;
  IZQUIERDA = 400;
  CENTRO = 290;
  NUMERO_DELANTERO = "NUMERO_DELANTERO";
  ESCUDO_DELANTERO = "ESCUDO_DELANTERO";
  modelo: any;
  short: any;
  ocultarModelo = true;
  @Input() urlCamiseta: any;
  @Input() camisetasSvg: any;
  @Input() colorShort: String;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  colors = ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#FF37E1', '#992328', '#FFFFFF', '#000000'];
  idGrupo: String;
  parteSeleccionada: string;
  @Input() paso: string;
  @ViewChild('camisetaFrente') camisetaFrente: ElementRef;
  @ViewChild('camisetaDorso') camisetaDorso: ElementRef;
  @Input() llevaShort;
  @Input() escudo;
  @Input() posicionEscudoCamiseta;
  imgUrl: any;

  constructor(public renderer: Renderer2,
              private svgService: SvgService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  generarModelo(modelo) {
    this.modelo = modelo;
  }

  visualizarModeloCompleto() {
    this.ocultarModelo = !this.ocultarModelo;
  }

  cambiarColorParte(cambiar) {
    let grupos = this.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if (grupos[i].id == cambiar.parte) {
        let paths = grupos[i].getElementsByTagName('path');
        for (let j = 0; j < paths.length; j++) {
          paths[j].setAttribute('fill', cambiar.color);
        }
        grupos[i].classList.remove('parte-seleccionada');
      }
    }
  }

  cambiarColorEstampa(cambiar) {
    let grupos = this.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if (grupos[i].id == cambiar.parte) {
        grupos[i].setAttribute('fill', cambiar.color);
      }
    }
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
      estampado = estampado.getElementsByTagName('image').namedItem('escudo');
    } else {
      estampado = estampado.getElementsByTagName('text').namedItem('numero');
    }
    if(posicion.posicion == posicion.posicionOcupada){
      switch (posicion.posicionOcupada) {
        case 'Centro':
          estampado.transform.baseVal.getItem('matrix').matrix.e = this.DERECHA;
          break;
        case 'Derecha':
          estampado.transform.baseVal.getItem('matrix').matrix.e = this.IZQUIERDA;
          break;
        case 'Izquierda':
          estampado.transform.baseVal.getItem('matrix').matrix.e = this.CENTRO;
          break;
      }
    }
    else{
      switch (posicion.posicion) {
        case 'Centro':
          estampado.transform.baseVal.getItem('matrix').matrix.e = this.CENTRO;
          break;
        case 'Derecha':
          estampado.transform.baseVal.getItem('matrix').matrix.e = this.DERECHA;
          break;
        case 'Izquierda':
          estampado.transform.baseVal.getItem('matrix').matrix.e = this.IZQUIERDA;
          break;
      }
    }

  }

  estamparEscudo(escudo) {
    let reader = new FileReader();
    reader.readAsDataURL(escudo);
    let grupos = this.obtenerGrupos();
    let estampado = grupos.namedItem(this.ESCUDO_DELANTERO);
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
        let ancho = 100;
        let alto = ancho / relacionAspecto;

        estampado.firstElementChild.setAttribute('height', alto.toString() + 'px');
        estampado.firstElementChild.setAttribute('width', ancho.toString() + 'px');
      };
      estampado.firstElementChild.setAttribute('xlink:href', this.imgUrl);
    }
  }


  generarImagenes(): any {
    let images: HTMLAllCollection[] = [];
    images.push(this.camisetaFrente.nativeElement.children.namedItem('Layer_1'));
    images.push(this.camisetaDorso.nativeElement.children.namedItem('Layer_1'));
    return images;
  }

  obtenerElementos(event) {
    this.idGrupo = event.target.parentNode.id;
    let grupos = this.obtenerGrupos();
    if (this.idGrupo == 'short' && !this.llevaShort) {
      return false;
    } else {
      for (let i = 0; i < grupos.length; i++) {
        if (grupos[i].id == this.idGrupo) {
          grupos[i].classList.add('parte-seleccionada');
        } else {
          grupos[i].classList.remove('parte-seleccionada');
        }
      }
      this.parteSeleccionada = this.idGrupo.toString().charAt(0).toUpperCase() + this.idGrupo.toString().slice(1);
    }
  }


  obtenerGrupos() {
    return this.dataContainer.nativeElement.getElementsByTagName('g');
  }

}
