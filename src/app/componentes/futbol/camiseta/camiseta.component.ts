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

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {camisetaModelos} from "../../../clases/CamisetaModelo";

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss'],
})
export class CamisetaComponent implements OnInit, OnChanges {

  @ViewChild('archivoEscudo') fileInput: ElementRef;
  formPasoCamiseta: FormGroup = new FormGroup({
    agregarShort: new FormControl(null),
    agregarMedias: new FormControl(null),
    camiseta: new FormControl(null)
  });
  submit: boolean = false;
  @Input() pasoNumero: number;
  @Output() proximoPaso = new EventEmitter<string>();
  @Input() partes;
  nombreArchivo: string;
  deshabilitado: boolean = true;
  @Output() colorPartes = new EventEmitter();
  @Input() formCamiseta;
  posicionesEscudo: string[] = ["Derecha", "Izquierda", "Centro"];
  escudo: any;
  @Output() imagenEscudo = new EventEmitter();
  @Output() posicionEscudo = new EventEmitter();
  camisetaModelos: any = camisetaModelos;
  seleccionoModelo: boolean = false;
  modelosSVG: any;
  camiseta: any;
  generoModelo: string = 'hombre';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.initCamisetas();
  }

  get pasoCamisetaForm() {
    return this.formPasoCamiseta.controls;
  }

  initCamisetas() {
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionado = false;
    }
  }

  // Método para capturar el evento del click en el botón y disparar para que deje subir archivo
  archivo() {
    this.fileInput.nativeElement.click();
  }

  // Método que captura el evento de subida de archivo.
  subirArchivo(event) {
    if (event.target.files.length > 0) {
      const archivo = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = (_event)=>{
        this.formPasoCamiseta.controls['escudo'].setValue(reader.result);
      }
    }
    this.imagenEscudo.emit(event.target.files[0]);
    this.formPasoCamiseta.controls['posicionEscudo'].setValidators([Validators.required]);
    this.formPasoCamiseta.controls['posicionEscudo'].updateValueAndValidity();
    this.deshabilitado = false;
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formCamiseta && changeRecord.formCamiseta.currentValue) {
      this.generarFormulario(changeRecord.formCamiseta.currentValue);
    }
  }

  generarFormulario(formCamiseta) {
    this.formPasoCamiseta.get('escudo').setValue(formCamiseta.escudo ?? null);
    this.formPasoCamiseta.get('posicionEscudo').setValue(formCamiseta.posicionEscudo ?? null);
    if (this.formPasoCamiseta.get('escudo').value) {
      this.deshabilitado = false;
    }
  }

  open(content) {
    this.modalService.open(content, {centered: true});
  }

  cambiarPosicionEscudo() {
    this.posicionEscudo.emit(this.formPasoCamiseta.get('posicionEscudo').value);
  }

  modeloElegido(id) {
    this.seleccionoModelo = true;
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionado = false;
      if (id == this.camisetaModelos[i].id) {
        this.camisetaModelos[i].seleccionado = true;
        this.formPasoCamiseta.get('camiseta').setValue(this.camisetaModelos[i]);
      }
    }
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

  modelosHombre() {
    this.generoModelo = 'hombre';
    //Renderizar modelos hombre
  }

  modelosMujer() {
    this.generoModelo = 'mujer';
    //Renderizar modelos mujer
  }

}
