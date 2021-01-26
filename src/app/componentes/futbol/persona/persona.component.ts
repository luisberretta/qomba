import {svgAsPngUri} from 'save-svg-as-png';
import {
  AfterViewInit,
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  Renderer2,
  SimpleChanges, ViewChild,
  ViewChildren
} from '@angular/core';
import {SvgService} from "../../../servicios/svg.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit, OnChanges {

  color: string = "blue";
  frente: any;
  dorso: any;
  @Input() url: any;
  @Input() camisetasSvg: any;
  @Input() colorShort: String;
  @ViewChildren('path') paths: QueryList<any>;
  @ViewChild('dataContainer') dataContainer: ElementRef;
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
    let images: HTMLAllCollection[] = [];
    images.push(this.dataFrente.nativeElement);
    images.push(this.dataDorso.nativeElement);
    return images;
  }

  obtenerElementos(event) {
    let groups = this.dataContainer.nativeElement
      .getElementsByTagName('g')
    console.log(event.target.parentNode.id);
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].id == event.target.parentNode.id) {
        let paths = groups[i].getElementsByTagName('path');
        this.cambiarColor(paths);
      }
    }
  }

  cambiarColor(elementos) {
    if (elementos) {
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].setAttribute('fill', 'red');
      }
    }
  }
}
