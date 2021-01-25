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

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit, OnChanges {

  color: string = "blue";
  @Input() colorPartes: any;
  @Input() partesSvg: any;
  @Input() colorShort: String;
  @ViewChildren('path') paths: QueryList<any>;
  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(public renderer : Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      let svg = this.dataContainer.nativeElement.innerHTML;

      let svgArchivo = svgAsPngUri(this.dataContainer.nativeElement,"diagram.png");
    }, 2000);
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if(changeRecord.colorPartes && changeRecord.colorPartes.currentValue) {
      this.paths.forEach((path) => {
        let idParte = path.nativeElement.attributes['data-idparte'].value;
        let idParteColor = changeRecord.colorPartes.currentValue.idParte;
        let color = changeRecord.colorPartes.currentValue.color;
        if(idParte == idParteColor) {
          this.renderer.setAttribute(path.nativeElement, 'fill', color);
        }
      });
    }
  }

  ngAfterViewInit() {
    console.log(this.dataContainer);
    this.paths.forEach((path) => {
      this.renderer.setAttribute(path.nativeElement, 'fill', '#ffffff');
    });
  }


}
