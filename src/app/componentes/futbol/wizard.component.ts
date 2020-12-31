import {Component, OnInit} from '@angular/core';
import {camisetas} from "../../clases/Camiseta";
import {Pedido} from "../../clases/Pedido";
import {WizardService} from "./wizard.service";

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
  pedido: Pedido = {imagenes: []};


  constructor(private wizardService: WizardService) {

  }

  ngOnInit(): void {

  }

  pasoCamiseta(paso) {
    this.paso = paso;
    this.numeroPaso = 1;
  }

  pasoShort(paso) {
    if (this.numeroPaso > 2) {
      this.paso = paso;
      this.numeroPaso = 2;
    }
  }

  confirmarNumero(eventoNumero) {
    console.log(eventoNumero);
  }

  pasoNumero(paso) {
    if (this.numeroPaso > 3) {
      this.paso = paso;
      this.numeroPaso = 3;
    }
  }

  pasoEquipo(paso) {
    if (this.numeroPaso > 4) {
      this.paso = paso;
      this.numeroPaso = 4;
    }
  }

  pasoCheckout(paso) {
    if (this.numeroPaso > 5) {
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
      if (id == this.camisetas[i].id) {
        this.camisetas[i].seleccionado = true;
        this.partesCamiseta = this.camisetas[i].partes;
      } else {
        this.camisetas[i].seleccionado = false;
      }
    }
  }

  siguiente(event) {
    switch (this.numeroPaso) {
      case 1:
        this.generarPedidoCamiseta(event);
        this.paso = 'short';
        this.numeroPaso = 2;
        break;
      case 2:
        this.generarPedidoShort(event);
        this.paso = 'numero';
        this.numeroPaso = 3;
        break;
      case 3:
        this.generarPedidoNumero(event);
        this.paso = 'equipo';
        this.numeroPaso = 4;
        break;
      case 4:
        this.generarPedidoEquipo(event);
        this.paso = 'checkout';
        this.numeroPaso = 5;
        break;
      case 5:
        this.generarPedido(event);
        break;
    }
  }

  generarPedidoCamiseta(event) {
    this.pedido.cuelloCamiseta = event.cuello;
    this.pedido.posicionEscudo = event.posicionEscudo;
    this.pedido.calidadEscudo = event.calidadEscudo;
  }

  generarPedidoShort(event) {
    if (event) {
      // Realizar mapeo de datos
    } else {
      this.pedido.tieneShort = null;
    }
  }

  generarPedidoNumero(event) {
    this.pedido.tieneNroFrontalCamiseta = event.camisetaValor;
    this.pedido.posicionNroFrontalCamiseta = event.posicionNumeroCamiseta;
    this.pedido.tieneNroShort = event.shortValor
    this.pedido.posicionNroShort = event.posicionesNumeroShort;
  }

  generarPedidoEquipo(event) {
    this.pedido.detalleEquipo = event.equipo;
  }

  generarPedido(event) {
    this.pedido.mail = event.mail;
    this.pedido.imagenes.push("iVBORw0KGgoAAAANSUhEUgAAAH0AAACbCAYAAABPnZS6AAASs0lEQVR4Xu2dCZgU1bXHz79uVffMsKvgHkUTkuAWjUt8hqcosskuCC7EuGE0wT2oIFI9M2BUFPcl");
    this.wizardService.generarPedido(this.pedido).subscribe((data) => {
      if (data) {
        console.log("La operación se realizó con éxito.");
      }
    })
  }

}
