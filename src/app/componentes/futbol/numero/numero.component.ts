import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Pedido} from "../../../clases/Pedido";

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss']
})
export class NumeroComponent implements OnInit, OnChanges {

  formPasoNumero: FormGroup = new FormGroup({

    llevaNombreCamiseta: new FormControl(false),
    llevaNumeroCamiseta: new FormControl(false),
    llevaNumeroFrontalCamiseta: new FormControl(false, ),
    posicionNumeroCamiseta: new FormControl('',[]),
    llevaNumeroShort: new FormControl(false),
    posicionNumeroShort: new FormControl('', []),
  });
  posicionesNumeroCamiseta: string[] = ["Derecha", "Centro", "Izquierda"];
  posicionesNumeroShort: string[] = ["Derecha", "Izquierda"];
  llevaNroFrontal: Boolean = false;
  llevaNroShort: Boolean =false;
  submit: Boolean = false;
  @Input() formNumero: Pedido;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formNumero && changeRecord.formNumero.currentValue) {
      this.generarFormulario(changeRecord.formNumero.currentValue);
    }
  }

  generarFormulario(formNumero) {
    this.formPasoNumero.get('llevaNombreCamiseta').setValue(!!formNumero.llevaNombreCamiseta);
    this.formPasoNumero.get('llevaNumeroCamiseta').setValue(!!formNumero.llevaNumeroCamiseta);
    this.llevaNroFrontal = !!formNumero.llevaNumeroFrontalCamiseta;
    this.formPasoNumero.get('llevaNumeroFrontalCamiseta').setValue(!!formNumero.llevaNumeroFrontalCamiseta);
    this.formPasoNumero.get('posicionNumeroCamiseta').setValue(formNumero.posicionNumeroCamiseta ?? null);
    if(this.llevaNroFrontal){
      this.formPasoNumero.controls.posicionNumeroCamiseta.setValidators([Validators.required]);
    }
    if (formNumero.llevaShort) {
      this.llevaNroShort = !!formNumero.llevaNumeroShort;
      this.formPasoNumero.get('llevaNumeroShort').setValue(!!formNumero.llevaNumeroShort);
      this.formPasoNumero.get('posicionNumeroShort').setValue(formNumero.posicionNumeroSort ?? null);
      if(this.llevaNroShort){
        this.formPasoNumero.controls.posicionNumeroShort.setValidators([Validators.required]);
      }
    }
    this.formPasoNumero.controls.posicionNumeroCamiseta.updateValueAndValidity();
  }

  llevaNumeroFrontal(){
    this.formPasoNumero.controls.posicionNumeroCamiseta.clearValidators();
    this.llevaNroFrontal = !this.llevaNroFrontal;
    if (this.llevaNroFrontal){
      this.formPasoNumero.controls.posicionNumeroCamiseta.setValidators([Validators.required]);
    }
    else {
      this.formPasoNumero.controls.posicionNumeroCamiseta.clearValidators();

    }
    this.formPasoNumero.controls.posicionNumeroCamiseta.updateValueAndValidity();
  }

  llevaNumeroShort() {
    this.llevaNroShort = !this.llevaNroShort;
    if (this.llevaNroShort){
      this.formPasoNumero.controls.posicionNumeroShort.setValidators([Validators.required]);
    }
    else {
      this.formPasoNumero.controls.posicionNumeroShort.clearValidators();
    }
    this.formPasoNumero.controls.posicionNumeroShort.updateValueAndValidity();
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoNumero.valid) {
      this.proximoPaso.emit(this.formPasoNumero.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit();
  }

}
