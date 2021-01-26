import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss']
})
export class NumeroComponent implements OnInit {

  seleccionCamiseta: string[] = ["Agregar Número", "Agregar Nombre", "Agregar Número y nombre","No agregar"];
  seleccionShort: string[] = ["Agregar Número","No agregar"];
  posicionesNumeroCamiseta: string[] = ["Derecha", "Centro", "Izquierda"];
  posicionesNumeroShort: string[] = ["Derecha", "Izquierda"];
  esNumeroCamiseta: Boolean = false;
  esNumeroShort: Boolean = false;
  llevaNroFrontal: Boolean = false;
  @Input() llevaShort: Boolean;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();

  constructor(public fb: FormBuilder) {
  }
  formNumero: FormGroup = new FormGroup({
    camisetaValor: new FormControl('', [Validators.required]),
    shortValor: new FormControl(''),
    posicionNumeroSort: new FormControl(''),
    posicionNumeroCamiseta: new FormControl(''),
  });

  ngOnInit(): void {
  }

  checkCamiseta(seleccion) {
    this.esNumeroCamiseta = seleccion === "Agregar Número" || seleccion === "Agregar Número y nombre";
    this.formNumero.controls.camisetaValor.setValue(this.esNumeroCamiseta);

  }

  checkShort(seleccion) {
    this.esNumeroShort = seleccion === "Agregar Número" || seleccion === "Agregar Número y nombre";
    this.formNumero.controls.shortValor.setValue(this.esNumeroShort );
  }

  siguiente() {
    this.proximoPaso.emit(this.formNumero.value);
  }

  anterior() {
    this.anteriorPaso.emit(this.formNumero.value);
  }

}
