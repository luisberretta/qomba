import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss'],
})
export class CamisetaComponent implements OnInit, OnChanges {

  @ViewChild('archivoEscudo') fileInput: ElementRef;
  formPasoCamiseta: FormGroup = new FormGroup({
    cuello: new FormControl('', [Validators.required]),
    escudo: new FormControl(''),
    posicionEscudo: new FormControl(''),
    calidadEscudo: new FormControl(''),
  });
  submit: boolean = false;
  @Input() pasoNumero: number;
  @Output() proximoPaso = new EventEmitter<string>();
  @Input() partes;
  nombreArchivo: string;
  deshabilitado: boolean = true;
  indiceActual: number = 1;
  @Output() colorPartes = new EventEmitter();
  idModelo: number;
  @Input() formCamiseta;

  cambioCarousel(index, esPrevio) {
    if(esPrevio) {
      if(index == 0) {
        this.indiceActual = this.partes.partes.length;
      } else {
        this.indiceActual = index;
      }
    } else {
      if(index == this.partes.partes.length + 1) {
        this.indiceActual = 1;
      } else {
        this.indiceActual = index;
      }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  get pasoCamisetaForm() {
    return this.formPasoCamiseta.controls;
  }

  // Método para capturar el evento del click en el botón y disparar para que deje subir archivo
  archivo() {
    this.fileInput.nativeElement.click();
  }

  // Método que captura el evento de subida de archivo.
  subirArchivo(event) {
    let base64 = event[0].base64.replace('data:image/jpeg;base64,','');
    this.formPasoCamiseta.controls['escudo'].setValue(base64);
    this.deshabilitado = false;
  }

  siguiente() {
    this.submit = true;
    if(this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    this.indiceActual = 1;
    this.idModelo = changeRecord.partes.currentValue.id;
    if(changeRecord.formCamiseta && changeRecord.formCamiseta.currentValue) {
      this.generarFormulario(changeRecord.formCamiseta.currentValue);
    }
  }

  cambioColor(event, idParte) {
    this.colorPartes.emit({
      'idParte': idParte, 'color': event.color.hex
    });
  }

  generarFormulario(formCamiseta) {
    this.formPasoCamiseta.get('cuello').setValue(formCamiseta.cuelloCamiseta);
    this.formPasoCamiseta.get('escudo').setValue(formCamiseta.escudo);
    this.formPasoCamiseta.get('posicionEscudo').setValue(formCamiseta.posicionEscudo);
    this.formPasoCamiseta.get('calidadEscudo').setValue(formCamiseta.calidadEscudo);
    if(this.formPasoCamiseta.get('escudo').value) {
      this.deshabilitado = false;
    }
  }

}
