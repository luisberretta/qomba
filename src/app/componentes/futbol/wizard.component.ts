import { Component, OnInit } from '@angular/core';
import { camisetas } from '../../clases/Camiseta';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  paso: string = 'camiseta';
  numeroPaso: number = 1;
  categoria: string = 'basica';
  camisetas: any = camisetas;
  partesCamiseta: any;
  seleccionoModelo: boolean = false;

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

  basica() {
    this.categoria = 'basica';
  }

  intermedia() {
    this.categoria = 'intermedia';
  }

  premium() {
    this.categoria = 'premium';
  }

  propio() {
    this.categoria = 'propio';
  }

  modeloElegido(id) {
    this.seleccionoModelo = true;
    for (let i = 0; i < this.camisetas.length; i++) {
      if(id == this.camisetas[i].id) {
        this.camisetas[i].seleccionado = true;
        this.partesCamiseta = this.camisetas[i].partes;
      } else {
        this.camisetas[i].seleccionado = false;
      }
    }
  }

  siguiente(event) {
    this.numeroPaso++;
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
