import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-resumen-precio',
  templateUrl: './resumen-precio.component.html',
  styleUrls: ['./resumen-precio.component.scss']
})
export class ResumenPrecioComponent implements OnInit, OnChanges {

  formPasoResumenPrecio: FormGroup = new FormGroup({
    precioCamiseta: new FormControl(null),
    precioShort: new FormControl(null),
    precioMedias: new FormControl(null),
    precioConjunto: new FormControl(null),
    precioTotal: new FormControl(null)
  });
  @Input() formResumenPrecio: any;
  @Input() formCheckOut: any;
  @Output() anteriorPaso = new EventEmitter();

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
    this.formPasoResumenPrecio.get('precioCamiseta').setValue(formNumero.precioCamiseta);
    this.formPasoResumenPrecio.get('precioShort').setValue(formNumero.precioShort);
    this.formPasoResumenPrecio.get('precioMedias').setValue(formNumero.precioMedias);
    this.formPasoResumenPrecio.get('precioConjunto').setValue(formNumero.precioConjunto);
    this.formPasoResumenPrecio.get('precioTotal').setValue(formNumero.precioTotal);
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoResumenPrecio.value);
  }

}
