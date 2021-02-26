import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {indumentariaInferior} from "../../../clases/IndumentariaInferior";

@Component({
  selector: 'app-resumen-precio',
  templateUrl: './resumen-precio.component.html',
  styleUrls: ['./resumen-precio.component.scss']
})
export class ResumenPrecioComponent implements OnInit, OnChanges {
  @Input() formResumenPrecio: any;

  formPasoResumenPrecio: FormGroup = new FormGroup({
    modelo: new FormControl(null),
    cantidadJugadores: new FormControl(null),
    precioCamiseta: new FormControl(null),
    precioShort: new FormControl(null),
    precioMedias: new FormControl(null),
    precioConjunto: new FormControl(null),
    precioTotal: new FormControl(null)
  });

  vistaResumenPrecio: FormGroup = new FormGroup({
    modelo: new FormControl(null),
    cantidadJugadores: new FormControl(null),
    precioCamiseta: new FormControl(null),
    precioShort: new FormControl(null),
    precioMedias: new FormControl(null),
    precioConjunto: new FormControl(null),
    precioTotal: new FormControl(null)
  });

  @Input() formCheckOut: any;
  @Output() anteriorPaso = new EventEmitter();
  @Output() precioPedido = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formResumenPrecio && changeRecord.formResumenPrecio.currentValue) {
      this.generarFormulario(changeRecord.formResumenPrecio.currentValue);
    }
  }

  generarFormulario(formResumenPrecio) {
    this.formPasoResumenPrecio.get('modelo').setValue(formResumenPrecio.modelo);
    this.formPasoResumenPrecio.get('cantidadJugadores').setValue(formResumenPrecio.cantidadJugadores);
    this.formPasoResumenPrecio.get('precioCamiseta').setValue(formResumenPrecio.precioCamiseta);
    this.formPasoResumenPrecio.get('precioShort').setValue(formResumenPrecio.precioShort);
    this.formPasoResumenPrecio.get('precioMedias').setValue(formResumenPrecio.precioMedias);
    this.formPasoResumenPrecio.get('precioConjunto').setValue(this.calcularPrecioConjunto());
    this.formPasoResumenPrecio.get('precioTotal').setValue(this.calcularPrecioTotal());
    this.mapearFormVista();
    this.precioPedido.emit(this.precioTotal);
  }

  mapearFormVista() {
    this.vistaResumenPrecio.get('modelo').setValue(this.formPasoResumenPrecio.get('modelo').value);
    this.vistaResumenPrecio.get('cantidadJugadores').setValue(this.formPasoResumenPrecio.get('cantidadJugadores').value);
    this.vistaResumenPrecio.get('precioCamiseta').setValue(this.obtenerPrecioFormateado(this.formPasoResumenPrecio.get('precioCamiseta').value));
    this.vistaResumenPrecio.get('precioShort').setValue(this.obtenerPrecioFormateado(this.formPasoResumenPrecio.get('precioShort').value));
    this.vistaResumenPrecio.get('precioMedias').setValue(this.obtenerPrecioFormateado(this.formPasoResumenPrecio.get('precioMedias').value));
    this.vistaResumenPrecio.get('precioConjunto').setValue(this.obtenerPrecioFormateado(this.calcularPrecioConjunto()));
    this.vistaResumenPrecio.get('precioTotal').setValue(this.obtenerPrecioFormateado(this.calcularPrecioTotal()));
  }

  get cantidadJugadores(){
    return this.formPasoResumenPrecio.get('cantidadJugadores').value;
  }

  get precioShort(){
    return this.formPasoResumenPrecio.get('precioShort').value;
  }

  get precioMedias(){
    return this.formPasoResumenPrecio.get('precioMedias').value;
  }

  get precioCamiseta(){
    return this.formPasoResumenPrecio.get('precioCamiseta').value;
  }

  get precioConjunto(){
    return this.formPasoResumenPrecio.get('precioConjunto').value;
  }

  get precioTotal(){
    return this.formPasoResumenPrecio.get('precioTotal').value;
  }

  calcularPrecioConjunto(){
    if(this.precioShort != '-'){
      return this.precioCamiseta + this.precioShort;
    }
    return this.precioCamiseta;
  }

  calcularPrecioTotal(){
    return this.precioConjunto * this.cantidadJugadores;
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoResumenPrecio.value);
  }

  obtenerPrecioFormateado(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
