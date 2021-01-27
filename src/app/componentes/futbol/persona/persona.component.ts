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
  @Input() url: any;
  @Input() camisetasSvg: any;
  @Input() colorShort: String;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  colors = ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#FF37E1', '#992328', '#FFFFFF', '#000000'];
  selectorColorVisible: boolean = false;
  idGrupo: String;
  parteSeleccionada: string;
  @Input() paso: string;
  @ViewChild('dataFrente') dataFrente: ElementRef;
  @ViewChild('dataDorso') dataDorso: ElementRef;

  constructor(public renderer: Renderer2,
              private svgService: SvgService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.camisetasSvg && changeRecord.camisetasSvg.currentValue) {
      this.svgService.obtenerSVG(this.url + changeRecord.camisetasSvg.currentValue[0]).subscribe((data) => {
        this.frente = this.sanitizer.bypassSecurityTrustHtml(data);
      });
      this.svgService.obtenerSVG(this.url + changeRecord.camisetasSvg.currentValue[1]).subscribe((data) => {
        this.dorso = this.sanitizer.bypassSecurityTrustHtml(data);
      });
    }
  }

  generarImagenes(): any {
    return this.dataContainer.nativeElement;
    let images: HTMLAllCollection[] = [];
    images.push(this.dataFrente.nativeElement);
    images.push(this.dataDorso.nativeElement);
    return images;
  }

  obtenerElementos(event) {
    this.selectorColorVisible = true;
    this.idGrupo = event.target.parentNode.id;
    let grupos = this.dataContainer.nativeElement.getElementsByTagName('g');
    for (let i = 0; i < grupos.length; i++) {
      if (grupos[i].id == this.idGrupo) {
        grupos[i].classList.add('parte-seleccionada');
      } else {
        grupos[i].classList.remove('parte-seleccionada');
      }
    }
    this.parteSeleccionada = this.idGrupo.toString().charAt(0).toUpperCase() + this.idGrupo.toString().slice(1);
  }

  cambiarColor(color) {
    let grupos = this.dataContainer.nativeElement.getElementsByTagName('g');
    for (let i = 0; i < grupos.length; i++) {
      if (grupos[i].id == this.idGrupo) {
        let paths = grupos[i].getElementsByTagName('path');
        for (let i = 0; i < paths.length; i++) {
          paths[i].setAttribute('fill', color);
        }
        grupos[i].classList.remove('parte-seleccionada');
      }
    }
  }

}
