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
import {coloresParte} from "../../../clases/ColorParte";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  ESCUDO_DELANTERO = "Escudo_remera";
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
    let svgMatrix = null;
    if (posicion.posicion == posicion.posicionOcupada) {
      switch (posicion.posicionOcupada) {
        case 'Centro':
          svgMatrix = coloresParte.find(x => x.idParte == posicion.parte).posicionMatrix.derecha;
          this.cambiarMatrix(estampado, svgMatrix);
          break;
        case 'Derecha':
          svgMatrix = coloresParte.find(x => x.idParte == posicion.parte).posicionMatrix.izquierda;
          this.cambiarMatrix(estampado, svgMatrix)
          break;
        case 'Izquierda':
          svgMatrix = coloresParte.find(x => x.idParte == posicion.parte).posicionMatrix.centro;
          this.cambiarMatrix(estampado, svgMatrix);
          break;
      }
    } else {
      switch (posicion.posicion) {
        case 'Centro':
          svgMatrix = coloresParte.find(x => x.idParte == posicion.parte).posicionMatrix.centro;
          this.cambiarMatrix(estampado, svgMatrix)
          break;
        case 'Derecha':
          svgMatrix = coloresParte.find(x => x.idParte == posicion.parte).posicionMatrix.derecha;
          this.cambiarMatrix(estampado, svgMatrix)
          break;
        case 'Izquierda':
          svgMatrix = coloresParte.find(x => x.idParte == posicion.parte).posicionMatrix.izquierda;
          this.cambiarMatrix(estampado, svgMatrix)
          break;
      }
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
        let ancho = 710; //ANCHO DE IMAGEN ORIGINAL-
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
