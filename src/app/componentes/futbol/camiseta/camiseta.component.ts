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

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss'],
})
export class CamisetaComponent implements OnInit, OnChanges {

  @ViewChild('archivoEscudo') fileInput: ElementRef;
  formPasoCamiseta: FormGroup = new FormGroup({
    cuello: new FormControl(null, [Validators.required]),
    escudo: new FormControl(null),
    posicionEscudo: new FormControl(null),
    calidadEscudo: new FormControl(null),
  });
  submit: boolean = false;
  @Input() pasoNumero: number;
  @Output() proximoPaso = new EventEmitter<string>();
  @Input() partes;
  nombreArchivo: string;
  deshabilitado: boolean = true;
  @Output() colorPartes = new EventEmitter();
  @Input() formCamiseta;
  cuellos: string[] = ["Chomba", "Escote en V", "Escote redondo"];
  posicionesEscudo: string[] = ["Derecha", "Izquierda", "Centro"];
  calidadesEscudo: string[] = ["Bordado", "Estampado"];
  escudo: any;
  @Output() imagenEscudo = new EventEmitter();
  @Output() posicionEscudo = new EventEmitter();

  constructor(private modalService: NgbModal) {
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
    if (event.target.files.length > 0) {
      const archivo = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = (_event)=>{
        this.formPasoCamiseta.controls['escudo'].setValue(reader.result);
      }
    }
    this.imagenEscudo.emit(event.target.files[0]);
    this.formPasoCamiseta.get('posicionEscudo').setValue('Centro');
    this.posicionEscudo.emit(this.formPasoCamiseta.get('posicionEscudo').value);
    this.deshabilitado = false;
  }



  siguiente() {
    this.submit = true;
    if (this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formCamiseta && changeRecord.formCamiseta.currentValue) {
      this.generarFormulario(changeRecord.formCamiseta.currentValue);
    }
  }

  generarFormulario(formCamiseta) {

    this.formPasoCamiseta.get('cuello').setValue(formCamiseta.cuelloCamiseta ?? null);
    this.formPasoCamiseta.get('escudo').setValue(formCamiseta.escudo ?? null);
    this.formPasoCamiseta.get('posicionEscudo').setValue(formCamiseta.posicionEscudo ?? null);
    this.formPasoCamiseta.get('calidadEscudo').setValue(formCamiseta.calidadEscudo ?? null);
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

}
