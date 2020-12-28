import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  paso: string = 'camiseta';
  numeroPaso: number = 1;

  constructor() {

  }

  ngOnInit(): void {

  }

  pasoCamiseta(paso) {
      this.paso = paso;
      this.numeroPaso = 1;
  }

  pasoShort(paso) {
    if(this.numeroPaso > 2) {
      this.paso = paso;
      this.numeroPaso = 2;
    }
  }
  confirmarNumero(eventoNumero){
    console.log(eventoNumero);
  }

  pasoNumero(paso) {
    if(this.numeroPaso > 3) {
      this.paso = paso;
      this.numeroPaso = 3;
    }
  }

  pasoEquipo(paso) {
    if(this.numeroPaso > 4) {
      this.paso = paso;
      this.numeroPaso = 4;
    }
  }

  pasoCheckout(paso) {
    if(this.numeroPaso > 5) {
      this.paso = paso;
      this.numeroPaso = 5;
    }
  }

  siguiente(event) {
    this.numeroPaso = 4;
    switch (this.numeroPaso) {
      case 1:
        this.paso = 'camiseta';
        break;
      case 2:
        this.paso = 'short';
        break;
      case 3:
        this.paso = 'numero';
        break;
      case 4:
        this.paso = 'equipo';
        break;
      case 5:
        this.paso = 'checkout';
        break;
    }
  }

}
