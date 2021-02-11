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
import {NgbModal,NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {camisetaModelos} from "../../../clases/CamisetaModelo";

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss'],
})
export class ModeloComponent implements OnInit, OnChanges {


  formPasoModelo: FormGroup = new FormGroup({
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
  @Input() formModelo;
  escudo: any;
  @Output() imagenEscudo = new EventEmitter();
  @Output() posicionEscudo = new EventEmitter();
  @Output() modeloSeleccionado = new EventEmitter();
  camisetaModelos: any = camisetaModelos;
  seleccionoModelo: boolean = false;
  modelosSVG: any;
  camiseta: any;
  generoModelo: string = 'hombre';
  modalRef: NgbModalRef;
  modalHeader: string;
  modalText: string;
  modalLink: string;
  @ViewChild('template', { static: true }) modalTemplate;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.initCamisetas();
    this.formPasoModelo.get('camiseta').valueChanges.subscribe(() => {
      this.modeloSeleccionado.emit(this.formPasoModelo.get('camiseta').value.urlsSvg);
    });
  }

  get pasoCamisetaForm() {
    return this.formPasoModelo.controls;
  }

  initCamisetas() {
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionado = false;
    }
  }

  // Método para capturar el evento del click en el botón y disparar para que deje subir archivo


  // Método que captura el evento de subida de archivo.
  subirArchivo(event) {
    if (event.target.files.length > 0) {
      const archivo = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = (_event)=>{
        this.formPasoModelo.controls['escudo'].setValue(reader.result);
      }
    }
    this.imagenEscudo.emit(event.target.files[0]);
    this.formPasoModelo.controls['posicionEscudo'].setValidators([Validators.required]);
    this.formPasoModelo.controls['posicionEscudo'].updateValueAndValidity();
    this.deshabilitado = false;
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formCamiseta && changeRecord.formCamiseta.currentValue) {
      this.generarFormulario(changeRecord.formCamiseta.currentValue);
    }
  }

  generarFormulario(formCamiseta) {
    this.formPasoModelo.get('escudo').setValue(formCamiseta.escudo ?? null);
    this.formPasoModelo.get('posicionEscudo').setValue(formCamiseta.posicionEscudo ?? null);
    if (this.formPasoModelo.get('escudo').value) {
      this.deshabilitado = false;
    }
  }

  abrirModal() {
    this.modalRef = this.modalService.open(this.modalTemplate, { centered: true });
  }

  cambiarPosicionEscudo() {
    this.posicionEscudo.emit(this.formPasoModelo.get('posicionEscudo').value);
  }

  modeloElegido(id) {
    this.seleccionoModelo = true;
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionado = false;
      if (id == this.camisetaModelos[i].id) {
        this.camisetaModelos[i].seleccionado = true;
        this.formPasoModelo.get('camiseta').setValue(this.camisetaModelos[i]);
      }
    }
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoModelo.valid) {
      this.proximoPaso.emit(this.formPasoModelo.value);
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

  aumentarZoom(camiseta) {
    this.abrirModal();
    this.modalText = camiseta.url;
  }
}
