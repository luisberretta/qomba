import {Component, OnInit} from '@angular/core';
import { SVG } from '@svgdotjs/svg.js'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  munieco: string = '/assets/images/frente.svg';
  color: string = "blue";

  constructor() { }

  ngOnInit(): void {

  }


}
