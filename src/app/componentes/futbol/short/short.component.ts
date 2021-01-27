import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges} from '@angular/core';
import {} from "events";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit, OnChanges {

  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  @Output() colorShort = new EventEmitter();
  formPasoShort: FormGroup = new FormGroup({
    llevaShort: new FormControl(''),
    color: new FormControl(''),
    llevaEscudo: new FormControl(''),
    llevaNumero: new FormControl(''),
  });
  submit: boolean = false;
  activo: boolean = false;
  @Input() formShort;

  constructor() { }

  ngOnInit(): void {
  }

  get pasoCamisetaForm() {
    return this.formPasoShort.controls;
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    // console.log(changeRecord);
    if(changeRecord.formShort && changeRecord.formShort.currentValue) {
      // // console.log(changeRecord.formShort.currentValue);
      // return;
      this.generarFormulario(changeRecord.formShort.currentValue);
    }
  }

  siguiente() {
    this.submit = true;
    console.log(this.formPasoShort);
    this.proximoPaso.emit(this.formPasoShort.value);
    // if(this.formPasoShort.valid) {
      this.proximoPaso.emit(this.formPasoShort.value);
    // }
  }

  anterior() {
    this.anteriorPaso.emit();
  }

  activarCampos() {
    this.activo = !this.activo;
  }

  generarFormulario(formShort) {

    this.formPasoShort.get('llevaShort').setValue(formShort.cuelloCamiseta ?? null);
    this.formPasoShort.get('color').setValue(formShort.escudo ?? null);
    this.formPasoShort.get('llevaEscudo').setValue(formShort.posicionEscudo ?? null);
    this.formPasoShort.get('llevaNumero').setValue(formShort.calidadEscudo ?? null);
  }

}
