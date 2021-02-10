import {Component, OnInit} from '@angular/core';
import {SvgService} from "../../servicios/svg.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private svgService: SvgService) {
  }

  ngOnInit(): void {
    this.svgService.obtenerSVGlogo().subscribe((data) => {
      console.log(data.toString())
    })
  }

}
