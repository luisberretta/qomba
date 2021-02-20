import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {FormControl, FormGroup,} from "@angular/forms";

@Component({
  selector: 'app-resumen-precio',
  templateUrl: './resumen-precio.component.html',
  styleUrls: ['./resumen-precio.component.scss']
})
export class ResumenPrecioComponent implements OnInit, OnChanges {

  formPasoCheckOut: FormGroup = new FormGroup({
    precioCamiseta: new FormControl(null),
    precioShort: new FormControl(null),
    precioMedias: new FormControl(null),
    precioConjunto: new FormControl(null),
    precioTotal: new FormControl(null)
  });
  @Input() formResumenPrecio: any;
  @Input() formCheckOut: any;

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
    this.formPasoCheckOut.get('precioTotal').setValue(formNumero.precioTotal);
  }

}
