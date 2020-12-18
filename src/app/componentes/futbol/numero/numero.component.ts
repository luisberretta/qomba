import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "events";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss']
})
export class NumeroComponent implements OnInit {

  seleccionCamiseta: string[] = ["No agregar", "Agregar Número", "Agregar Nombre", "Agregar Número y nombre"];
  seleccionShort: string[] = ["No agregar", "Agregar Número"];
  posicionesNumeroCamiseta: string[] = ["Derecha", "Centro", "Izquierda"];
  posicionesNumeroShort: string[] = ["Derecha", "Izquierda"];
  esNumeroCamiseta: Boolean = false;
  esNumeroShort: Boolean = false;
  @Output() confirmarNumero = new EventEmitter();

  constructor(public fb: FormBuilder) {
  }
  formNumero = this.fb.group({
    camisetaValor :['No agregar',[Validators.required]],
    shortValor :['No agregar',[Validators.required]],
    posicionNumeroSort :['',[Validators.required]],
    posicionCamisetaSort :['',[Validators.required]]
  });

  ngOnInit(): void {
  }

  checkCamiseta(seleccion) {
    this.formNumero.value['camisetaValor'] = seleccion;
    this.esNumeroCamiseta = seleccion === "Agregar Número" || seleccion === "Agregar Número y nombre";
  }
  checkShort(seleccion) {
    this.formNumero.value['shortValor'] = seleccion;
    this.esNumeroShort = seleccion === "Agregar Número" || seleccion === "Agregar Número y nombre";
  }

  onSubmit() {
    this.confirmarNumero.emit(this.formNumero);
  }

}
