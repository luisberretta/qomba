import {svgAsPngUri} from 'save-svg-as-png';
import {
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  Renderer2,
  SimpleChanges, ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit, OnChanges {

  @Input() colorPartes: any;
  @Input() partesSvg: any;
  @ViewChildren('path') paths: QueryList<any>;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  @ViewChildren('dataGroup') dataGroup: ElementRef;
  color: string;

  constructor(public renderer : Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      let svg = this.dataContainer.nativeElement.innerHTML;

      let svgArchivo = svgAsPngUri(this.dataContainer.nativeElement,"diagram.png");
    }, 2000);
  }

  ngOnChanges(changeRecord: SimpleChanges): void {

  }

  cambiarColor(event) {
    console.log(event);
    // this.renderer.setAttribute(this.dataGroup.nativeElement, 'fill', "red");
    // if(booleano == "parte1") {
    //   document.getElementById('grupo-1').setAttribute('fill', red);
    // } else if(booleano == "mangas") {
    //   document.getElementById('grupo-2').setAttribute('fill', 'green')
    // } else {
    //   document.getElementById('grupo-3').setAttribute('fill', 'yellow')
    // }
  }

  aumentarZoom() {
    document.getElementById('grupo-1').classList.add("zoom");
  }

  quitarZoom() {
    document.getElementById('grupo-1').classList.remove("zoom");
  }


}
