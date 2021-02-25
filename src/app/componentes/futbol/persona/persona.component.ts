import {
  Component, ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {SvgService} from "../../../servicios/svg.service";
import {DomSanitizer} from "@angular/platform-browser";
import {coloresParte} from "../../../clases/ColorParte";
import {Router} from "@angular/router";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  ESCUDO_DELANTERO = "Remera_escudo";
  VALORES_ESTAMPA = ['Número_espalda','Número_delantero','Nombre'];
  modeloSVG: any;
  url: string = '/assets/images/modelosSVG/';
  modeloSeleccionado: any;
  ocultarModelo = true;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  idGrupo: String;
  parteSeleccionada: string;
  @Input() paso: string;
  @ViewChild('remera') remera: ElementRef;
  @Input() llevaShort;
  @Input() posicionEscudoCamiseta;
  imgUrl: any;

  constructor(private svgService: SvgService,private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  generarModelo(modelo) {
    this.modeloSeleccionado = modelo;
    this.modeloSVG = null;
    this.svgService.obtenerSVG(this.url + modelo.urlSvg).subscribe((data) => {
      this.modeloSVG =this.sanitizer.bypassSecurityTrustHtml(data);
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
        grupos[i].classList.remove('parte-seleccionada');
      }
    }
  }

  cambiarColorEstampa(cambiar) {
    let grupos = this.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if(this.perteneceEstampado(grupos[i]))
        grupos[i].setAttribute('fill', cambiar.color);
    }
  }

  perteneceEstampado(grupo){
    return this.VALORES_ESTAMPA.find(x=> x == grupo.id);
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
    let coloresModelo = coloresParte.find(x=> x.idModelo == this.modeloSeleccionado.id).partes;
    switch (posicion.posicion) {
      case 'Centro':
        svgMatrix = coloresModelo.find(x => x.idParte == posicion.parte).posicionMatrix.centro;
        this.cambiarMatrix(estampado, svgMatrix)
        break;
      case 'Derecha':
        svgMatrix = coloresModelo.find(x => x.idParte == posicion.parte).posicionMatrix.derecha;
        this.cambiarMatrix(estampado, svgMatrix)
        break;
      case 'Izquierda':
        svgMatrix = coloresModelo.find(x => x.idParte == posicion.parte).posicionMatrix.izquierda;
        this.cambiarMatrix(estampado, svgMatrix)
        break;
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
    imagen = this.remera.nativeElement.children.namedItem('svg');
    return imagen;
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

  cambiarTipografia(tipografia) {
    let grupos = this.obtenerGrupos();
    for (let i = 0; i < grupos.length; i++) {
      if(this.perteneceTipografia(grupos[i].id)) {
        if(tipografia == 'Sablon') {
          tipografia = 'SablonUp-College';
        }
        grupos[i].getElementsByTagName('text')[0].setAttribute('font-family', tipografia);
      }
    }
  }

  perteneceTipografia(grupo) {
    return grupo == "Número_espalda" || grupo == "Nombre" || grupo == "Short_número" || grupo == "Número_delantero";
  }

}
