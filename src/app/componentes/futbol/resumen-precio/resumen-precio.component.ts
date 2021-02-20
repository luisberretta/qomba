import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-resumen-precio',
  templateUrl: './resumen-precio.component.html',
  styleUrls: ['./resumen-precio.component.scss']
})
export class ResumenPrecioComponent implements OnInit {
  @Input() formResumenPrecio: any;

  formPasoResumenPrecio: FormGroup = new FormGroup({
    modelo: new FormControl(null),
    precioCamiseta: new FormControl(null),
    precioShort: new FormControl(null),
    precioMedias: new FormControl(null),
    precioConjunto: new FormControl(null),
    precioTotal: new FormControl(null)
  });
  @Input() formCheckOut: any;
  @Output() anteriorPaso = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoResumenPrecio.value);
  }

}
