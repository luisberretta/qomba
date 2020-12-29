import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {svgAsPngUri} from 'save-svg-as-png';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @ViewChild('dataContainer') dataContainer: ElementRef;
  munieco: string = '/assets/images/frente.svg';
  color: string = "#FA0580";
  imagenSVG: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.dataContainer);
    setTimeout(() => {
      console.log();
      let svg = this.dataContainer.nativeElement.innerHTML;

      let svgArchivo = svgAsPngUri(this.dataContainer.nativeElement,"diagram.png");
      console.log(svgArchivo);
    }, 2000);
  }

  cambioPath() {

  }

}
