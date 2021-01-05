import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges, OnDestroy
} from '@angular/core';
import {svgAsPngUri} from 'save-svg-as-png';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss'],
})
export class CamisetaComponent implements OnInit, OnChanges {

  @ViewChild('archivoEscudo') fileInput: ElementRef;
  formPasoCamiseta: FormGroup;
  submit: boolean = false;
  @Input() pasoNumero: number;
  @Output() proximoPaso = new EventEmitter<string>();
  @Input() partes;
  nombreArchivo: string;
  deshabilitado: boolean = true;
  indiceActual: number = 1;
  @Output() colorPartes = new EventEmitter();
  idModelo: number;

  cambioCarousel(index, esPrevio) {
    if (esPrevio) {
      if (index == 0) {
        this.indiceActual = this.partes.length;
      } else {
        this.indiceActual = index;
      }
    } else {
      if (index == this.partes.length + 1) {
        this.indiceActual = 1;
      } else {
        this.indiceActual = index;
      }
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildPasoCamisetaForm();
  }

  get pasoCamisetaForm() {
    return this.formPasoCamiseta.controls;
  }

  // Método para capturar el evento del click en el botón y disparar para que deje subir archivo
  archivo() {
    this.fileInput.nativeElement.click();
  }

  buildPasoCamisetaForm() {
    this.formPasoCamiseta = this.fb.group({
      cuello: ['', Validators.required],
      escudo: [''],
      posicionEscudo: [''],
      calidadEscudo: [''],
    });
  }

  // Método que captura el evento de subida de archivo.
  subirArchivo(event) {
    let base64 = event[0].base64.replace('data:image/jpeg;base64,','');
    this.formPasoCamiseta.controls['escudo'].setValue(base64);
    this.deshabilitado = false;
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    this.indiceActual = 1;
    this.idModelo = changeRecord.partes.currentValue.id;
  }

  cambioColor(event, idParte) {
    this.colorPartes.emit({
      'idParte': idParte, 'color': event.color.hex
    });
  }

}
