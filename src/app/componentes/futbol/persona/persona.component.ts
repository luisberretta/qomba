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
export class PersonaComponent implements OnInit, OnChanges {

  frente: any;
  dorso: any;
  short: any;
  @Input() urlCamiseta: any;
  @Input() camisetasSvg: any;
  @Input() colorShort: String;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  urlShort: string = 'assets/images/short/short.svg';
  colors = ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#FF37E1', '#992328', '#FFFFFF', '#000000'];
  idGrupo: String;
  parteSeleccionada: string;
  @Input() paso: string;
  @ViewChild('camisetaFrente') camisetaFrente: ElementRef;
  @ViewChild('camisetaDorso') camisetaDorso: ElementRef;
  @Input() llevaShort;
  @Input() escudo;
  imgUrl: any;

  constructor(public renderer: Renderer2,
              private svgService: SvgService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.camisetasSvg && changeRecord.camisetasSvg.currentValue) {
      this.svgService.obtenerSVGCamiseta(this.urlCamiseta + changeRecord.camisetasSvg.currentValue[0]).subscribe((data) => {
        this.frente = this.sanitizer.bypassSecurityTrustHtml(data);
      });
      this.svgService.obtenerSVGCamiseta(this.urlCamiseta + changeRecord.camisetasSvg.currentValue[1]).subscribe((data) => {
        this.dorso = this.sanitizer.bypassSecurityTrustHtml(data);
      });
      this.svgService.obtenerSVGShort(this.urlShort).subscribe((data) => {
        this.short = this.sanitizer.bypassSecurityTrustHtml(data);
      });
    }
    // console.log(changeRecord.escudo.currentValue)
    if(changeRecord.escudo && changeRecord.escudo.currentValue) {
      let reader = new FileReader();
      reader.readAsDataURL(changeRecord.escudo.currentValue);
      reader.onload = (_event) => {
        this.imgUrl = reader.result;
        let img = new Image();
        if (typeof reader.result === "string") {
          img.src = reader.result;
        }
        img.onload = function(){
          let imgSize = {
            w: img.width,
            h: img.height
          };
          let relacionAspecto = imgSize.w / imgSize.h;
          let ancho = 100;
          let alto = ancho / relacionAspecto;

          document.getElementById('escudo_remera').firstElementChild.setAttribute('height', alto.toString() + 'px');
          document.getElementById('escudo_remera').firstElementChild.setAttribute('width', ancho.toString() + 'px');
        };
        document.getElementById('escudo_remera').firstElementChild.setAttribute('xlink:href', this.imgUrl);

      }
    }
  }

  generarImagenes(): any {
    return this.dataContainer.nativeElement;
    let images: HTMLAllCollection[] = [];
    images.push(this.camisetaFrente.nativeElement);
    images.push(this.camisetaDorso.nativeElement);
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

  cambiarColor(color) {
    let grupos = this.obtenerGrupos();
    if (this.idGrupo == 'short' && !this.llevaShort) {
      return false;
    } else {
      for (let i = 0; i < grupos.length; i++) {
        if (grupos[i].id == this.idGrupo) {
          let paths = grupos[i].getElementsByTagName('path');
          for (let j = 0; j < paths.length; j++) {
            paths[j].setAttribute('fill', color);
          }
          grupos[i].classList.remove('parte-seleccionada');
        }
      }
    }
  }

  editarCamiseta(editarCamiseta) {
    if (editarCamiseta.editar) {
      let numeroFrontal;
      let grupos = this.obtenerGrupos();
      if (editarCamiseta.editar == 'numero_frente') {
        numeroFrontal = grupos.namedItem(editarCamiseta.editar);
        if (editarCamiseta.posicion) {
          let tagText = numeroFrontal.getElementsByTagName('text').namedItem('numero');
          this.editarPosicionNumero(tagText,editarCamiseta.posicion);
        }
      } else {
        numeroFrontal = grupos.namedItem(editarCamiseta.editar);
      }
      if (editarCamiseta.valor) {
        numeroFrontal.setAttribute('visibility', 'visible');
      } else {
        if (editarCamiseta.valor != undefined) {
          numeroFrontal.setAttribute('visibility', 'hidden');
        }
      }
    }

  }

  obtenerGrupos() {
    return this.dataContainer.nativeElement.getElementsByTagName('g');
  }

  editarPosicionNumero(text, posicion) {
    let DERECHA = 180;
    let IZQUIERDA = 400;
    let CENTRO = 290;
    if (posicion == 'Derecha') {
      text.transform.baseVal.getItem('matrix').matrix.e = DERECHA;
    }
    if( posicion == 'Izquierda'){
      text.transform.baseVal.getItem('matrix').matrix.e = IZQUIERDA;
    }
    if(posicion == 'Centro'){
      text.transform.baseVal.getItem('matrix').matrix.e = CENTRO;
    }

  }

}
