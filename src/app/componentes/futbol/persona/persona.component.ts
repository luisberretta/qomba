import {
  Component,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {svgs} from "../../../clases/ParteSvg";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit, OnChanges {

  color: string = "blue";
  @Input() colorPartes: any;
  @Input() partesSvg: any;
  @ViewChildren('path') paths: QueryList<any>;

  constructor(public renderer : Renderer2) { }

  ngOnInit(): void {

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


}
