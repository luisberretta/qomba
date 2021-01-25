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
  @Input() camisetaSvg: any;
  @Input() colorShort: String;
  @ViewChildren('path') paths: QueryList<any>;
  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(public renderer: Renderer2,
              private svgService: SvgService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      let svg = this.dataContainer.nativeElement.innerHTML;

      let svgArchivo = svgAsPngUri(this.dataContainer.nativeElement, "diagram.png");
    }, 2000);
  }


  ngOnChanges(changeRecord: SimpleChanges): void {
    console.log("AFUERA");
    if (changeRecord.camiseta && changeRecord.camiseta.currentValue) {
      console.log("ADENTROOO");
      console.log(changeRecord.camiseta.currentValue.urls[0]);
      this.svgService.obtenerSVG(this.url + changeRecord.camiseta.currentValue.urls[0]).subscribe((data) => {
        this.frente = data;
      });
      this.svgService.obtenerSVG(this.url + changeRecord.camiseta.currentValue.urls[1]).subscribe((data) => {
        this.dorso = data;
      });
    }
  }

  generarImagenes(): any {
    return this.dataContainer.nativeElement;

  }

  cambiarColor(event) {
    let g = event.target.parentNode;
    if (g.nodeName == 'g') {
      let elementos = g.getElementsByTagName('path');
      if (elementos) {
        for (let i = 0; i < elementos.length; i++) {
          elementos[i].setAttribute('fill', 'red');
        }
      }
    }

  }


}
