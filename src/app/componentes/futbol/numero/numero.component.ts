import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Pedido} from "../../../clases/Pedido";

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss']
})
export class NumeroComponent implements OnInit, OnChanges {

  formNumero: FormGroup = new FormGroup({
    agregarNumeroCamiseta: new FormControl(),
    agregarNombreCamiseta: new FormControl(),
    posicionNumeroCamiseta: new FormControl(''),
    agregarNumeroShort: new FormControl(),
    posicionNumeroSort: new FormControl(''),
  });
  seleccionCamiseta: string[] = ["Agregar Número", "Agregar Nombre"];
  seleccionShort: string[] = ["Agregar Número"];
  posicionesNumeroCamiseta: string[] = ["Derecha", "Centro", "Izquierda"];
  posicionesNumeroShort: string[] = ["Derecha", "Izquierda"];
  llevaNroFrontal: Boolean = false;
  submit: Boolean = false;
  @Input() formNumeroPedido: Pedido;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  checkCamiseta(seleccion) {
    if (seleccion == "Agregar Número")
      this.formNumero.controls.agregarNumeroCamiseta.setValue(!this.formNumero.controls.agregarNumeroCamiseta.value);
    if (seleccion == "Agregar Nombre")
      this.formNumero.controls.agregarNombreCamiseta.setValue(!this.formNumero.controls.agregarNombreCamiseta.value);
  }

  llevaNroFrontalCamiseta() {
    this.llevaNroFrontal = !this.llevaNroFrontal;
    if (this.llevaNroFrontal)
      this.formNumero.controls.posicionNumeroCamiseta.setValidators([Validators.required]);
    else this.formNumero.controls.posicionNumeroCamiseta.setValidators(null);
  }

  checkShort(seleccion) {
    if (seleccion == "Agregar Número") {
      this.formNumero.controls.agregarNumeroShort.setValue(!this.formNumero.controls.agregarNumeroShort.value);
      if (this.formNumero.controls.agregarNumeroShort.value)
        this.formNumero.controls.posicionNumeroSort.setValidators([Validators.required])
      else this.formNumero.controls.posicionNumeroSort.setValidators(null)
    }
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formNumeroPedido && changeRecord.formNumeroPedido.currentValue) {
      this.generarFormulario(changeRecord.formNumeroPedido.currentValue);
    }
  }

  generarFormulario(formNumeroPedido) {
    this.formNumero.get('agregarNumeroCamiseta').setValue(formNumeroPedido.agregarNumeroCamiseta ?? null);
    this.formNumero.get('agregarNombreCamiseta').setValue(formNumeroPedido.agregarNombreCamiseta ?? null);
    this.formNumero.get('posicionNumeroCamiseta').setValue(formNumeroPedido.posicionNumeroCamiseta ?? null);
    if (this.formNumeroPedido.llevaShort) {
      this.formNumero.get('agregarNumeroShort').setValue(formNumeroPedido.agregarNumeroShort ?? null);
      this.formNumero.get('posicionNumeroSort').setValue(formNumeroPedido.posicionNumeroSort ?? null);
    }
  }


  siguiente() {
    this.submit = true;
    if (this.formNumero.valid) {
      this.proximoPaso.emit(this.formNumero.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit();
  }

}
