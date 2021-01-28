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

    llevaNombreCamiseta: new FormControl(),
    llevaNumeroCamiseta: new FormControl(),
    llevaNumeroFrontalCamiseta: new FormControl(),
    posicionNumeroCamiseta: new FormControl(''),
    llevaNumeroShort: new FormControl(),
    posicionNumeroSort: new FormControl(''),
  });
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


  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formNumeroPedido && changeRecord.formNumeroPedido.currentValue) {
      this.generarFormulario(changeRecord.formNumeroPedido.currentValue);
    }
  }

  generarFormulario(formNumeroPedido) {
    this.formNumero.get('llevaNombreCamiseta').setValue(formNumeroPedido.llevaNombreCamiseta ?? null);
    this.formNumero.get('llevaNumeroCamiseta').setValue(formNumeroPedido.llevaNumeroCamiseta ?? null);
    this.formNumero.get('llevaNumeroFrontalCamiseta').setValue(formNumeroPedido.llevaNumeroFrontalCamiseta ?? null);
    this.formNumero.get('posicionNumeroCamiseta').setValue(formNumeroPedido.posicionNumeroCamiseta ?? null);
    if (this.formNumeroPedido.llevaShort) {
      this.formNumero.get('llevaNumeroShort').setValue(formNumeroPedido.llevaNumeroShort ?? null);
      this.formNumero.get('posicionNumeroSort').setValue(formNumeroPedido.posicionNumeroSort ?? null);
    }
  }

  get llevaNumeroFrontal() {
    if (!this.formNumero.get('llevaNumeroFrontalCamiseta').value)
      this.formNumero.get('posicionNumeroCamiseta').setValue(null);
    return this.formNumero.get('llevaNumeroFrontalCamiseta').value;
  }

  get llevaNumeroShort() {
    if (!this.formNumero.get('llevaNumeroShort').value)
      this.formNumero.get('posicionNumeroSort').setValue(null);
    return this.formNumero.get('llevaNumeroShort').value;
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
