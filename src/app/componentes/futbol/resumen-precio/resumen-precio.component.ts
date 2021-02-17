import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Pedido} from "../../../clases/Pedido";
import {PersonaComponent} from "../persona/persona.component";
import {WizardComponent} from "../wizard.component";

@Component({
  selector: 'app-resumen-precio',
  templateUrl: './resumen-precio.component.html',
  styleUrls: ['./resumen-precio.component.scss']
})
export class ResumenPrecioComponent implements OnInit, OnChanges {

  formPasoCheckOut: FormGroup = new FormGroup({
    precioCamiseta: new FormControl(null),
    precioShort: new FormControl(null),
    precioMedias: new FormControl(null,),
    precioConjunto: new FormControl('', []),
  });
  @Input() formResumenPrecio: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formResumenPrecio && changeRecord.formResumenPrecio.currentValue) {
      this.generarFormulario(changeRecord.formResumenPrecio.currentValue);
    }
  }

  generarFormulario(formNumero) {
    this.formPasoCheckOut.get('precioCamiseta').setValue(formNumero.precioCamiseta);
    this.formPasoCheckOut.get('precioShort').setValue(formNumero.precioShort);
    this.formPasoCheckOut.get('precioMedias').setValue(formNumero.precioMedias);
    this.formPasoCheckOut.get('precioConjunto').setValue(formNumero.precioConjunto);
  }

}
