import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  paso: string = 'camiseta';

  // @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  image = new Image();
  image2 = new Image();
  image3 = new Image();
  image4 = new Image();

  // private ctx: CanvasRenderingContext2D | null;

  constructor() {

  }

  ngOnInit(): void {
    // this.image.src = "/assets/images/hombre_frente.png";
    // this.image2.src = "/assets/images/rocky01.png";
    // this.image3.src = "/assets/images/rocky02.png";
    // this.image4.src = "/assets/images/rocky03.png";
    // let ctx: CanvasRenderingContext2D | null = this.canvas.nativeElement.getContext('2d');
    //
    // this.image.onload = () => {
    //   // ctx.fillStyle = "white";
    //   // ctx.fillRect(0, 0, 500, 500);
    //   ctx.globalAlpha = 0.9;
    //   // ctx.globalCompositeOperation = "destination-atop";
    //   ctx.drawImage(this.image, 100, 100);
    //
    // }
    //
    // this.image2.onload = () => {
    //   ctx.fillStyle = "#09F";
    //   ctx.fillRect(0, 0, 500, 500);
    //   ctx.globalAlpha = 0.5;
    //   ctx.globalCompositeOperation = "destination-over";
    //   ctx.drawImage(this.image2, 116, 157);
    // }
    //
    // // this.image3.onload = () => {
    // //   ctx.drawImage(this.image3, 116, 157);
    // // }
    // //
    // // this.image4.onload = () => {
    // //   ctx.drawImage(this.image4, 116, 157);
    // // }

  }

  pasoCamiseta(paso) {
    this.paso = paso;
  }

  pasoNumero(paso) {
   this.paso = paso;
  }

  pasoShort(paso) {
   this.paso = paso;
  }

  pasoEquipo(paso) {
    this.paso = paso;
  }

  pasoCheckout(paso) {
    this.paso = paso;
  }

}
