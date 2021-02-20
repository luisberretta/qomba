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

  formPasoResumenPrecio: FormGroup = new FormGroup({
    precioCamiseta: new FormControl(null),
    precioShort: new FormControl(null),
    precioMedias: new FormControl(null,),
    precioConjunto: new FormControl('', []),
  });
  @Input() formResumenPrecio: any;
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
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoResumenPrecio.value);
  }

}
