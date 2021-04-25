import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import {} from "events";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit, OnChanges {

  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  @ViewChild('archivoEscudo') fileInput: ElementRef;
  @Output() archivoEscudo = new EventEmitter();
  @Output() visualizarEstampado = new EventEmitter();
  @Output() colorSeleccionado = new EventEmitter();
  @Output() cambiarColorNumeroShort = new EventEmitter();


  ESCUDO_SHORT = "Short_escudo";
  NUMERO_SHORT = "Short_número";
  selectedColor: string = 'black';
  formatoEscudoInvalido: boolean = false;

  coloresShort = ["#FFFF00", "#00FF0F", "#050fdf",
    "#db0606", "#FF8000", "#F300FF",
    "#8A571B", "#E303CC", "#9203E3",
    "#67636A", "#000000", "#FFFFFF"];

  formPasoShort: FormGroup = new FormGroup({
    agregarShort: new FormControl(null,),
    agregarEscudoDelantero: new FormControl(''),
    agregarEscudoShort: new FormControl(''),
    escudoShort: new FormControl(''),
    agregarNumeroShort: new FormControl(''),
    partesShortSVG: new FormArray([]),
    colorNumeroShort: new FormControl(null)
  });


  get formPartesArrayControl() {
    return this.formPasoShort.get('partesShortSVG') as FormArray;
  }

  submit: boolean = false;
  @Input() formShort;
  @Output() llevaShort = new EventEmitter();

  visualizar = {
    valor: null,
    parte: null,
    posicionOcupada: null,
    posicion: null
  }

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.formPasoShort.get('agregarShort').valueChanges.subscribe(() => {
      this.formPasoShort.get('agregarNumeroShort').setValue(null);
      this.formPasoShort.get('agregarEscudoShort').setValue(null);
      this.configurarValidadores();
    });
    this.formPasoShort.get('agregarNumeroShort').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.NUMERO_SHORT;
      this.visualizarEstampado.emit(this.visualizar);
      this.configurarValidadores();
    });
    this.formPasoShort.get('agregarEscudoShort').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.ESCUDO_SHORT;
      this.visualizarEstampado.emit(this.visualizar);
      this.configurarValidadores();
    });
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formShort && changeRecord.formShort.currentValue) {
      this.generarFormulario(changeRecord.formShort.currentValue);
    }
  }

  generarFormulario(formShort) {
    this.formPasoShort.get('agregarShort').setValue(formShort.agregarShort ?? null);
    this.formPasoShort.get('agregarEscudoDelantero').setValue(formShort.llevaEscudoDelantero ?? null);
    this.formPasoShort.get('agregarEscudoShort').setValue(formShort.agregarEscudoShort ?? null);
    this.formPasoShort.get('agregarNumeroShort').setValue(formShort.agregarNumeroShort ?? null);
    this.formPasoShort.get('colorNumeroShort').setValue(formShort.colorNumeroShort ?? null);
    this.crearFormPartesArray(formShort.partesShortSVG);
  }

  crearFormPartesArray(formColor) {
    if (formColor) {
      for (let i = 0; i < formColor.length; i++) {
        let color = new FormGroup({
          idParte: new FormControl(formColor[i].idParte),
          nombreMostrar: new FormControl(formColor[i].nombreMostrar),
          colores: new FormControl(formColor[i].colores),
          color: new FormControl(formColor[i].color ? formColor[i].color : null)
        });
        if (this.agregarShort) {
          color.controls['color'].setValidators([Validators.required]);
        }
        color.controls['color'].updateValueAndValidity();
        this.formPartesArrayControl.push(color);
      }
    }
  }

  cambiarColor(color, parte) {
    this.selectedColor = color;
    let cambio = {
      color: color,
      parte: parte,
    }
    if (color && parte) {
      this.colorSeleccionado.emit(cambio);
    }
  }

  cambiarColorShort(color) {
    if (color) {
      this.cambiarColorNumeroShort.emit(color);
    }
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoShort.valid) {
      this.proximoPaso.emit(this.formPasoShort.value);
    }
  }



  anterior() {
    this.anteriorPaso.emit(this.formPasoShort.value);
  }

  get agregarShort() {
    return this.formPasoShort.get('agregarShort').value;
  }

  get agregarNumeroShort() {
    return this.formPasoShort.get('agregarShort').value;
  }

  get agregarEscudoShort() {
    return this.formPasoShort.get('agregarEscudoShort').value;
  }

  get agregarEscudoDelantero() {
    return this.formPasoShort.get('agregarEscudoDelantero').value;
  }

  get colorNumeroShort() {
    return this.formPasoShort.get('colorNumeroShort').value;
  }

  open(content) {
    this.modalService.open(content, {centered: true});
  }

  archivo() {
    this.fileInput.nativeElement.click();
  }

  subirArchivo(event) {
    if (event.target.files.length > 0) {
      const archivo = event.target.files[0];
      if (archivo.type !== 'image/jpeg' && archivo.type !== 'image/png') {
        this.formatoEscudoInvalido = true;
        return false;
      }

      this.formatoEscudoInvalido = false;
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = (_event) => {
        this.formPasoShort.controls['escudoShort'].setValue(reader.result);
      }
      this.archivoEscudo.emit(event.target.files[0]);
    }
  }

  configurarValidadores() {
    if (this.agregarEscudoShort && !this.agregarEscudoDelantero) {
      this.formPasoShort.controls['escudoShort'].setValidators([Validators.required]);
    } else {
      this.formPasoShort.controls['escudoShort'].setValidators(null);
    }
    for (let i = 0; i < this.formPartesArrayControl.controls.length; i++) {
      if (this.agregarShort) {
        this.formPartesArrayControl.controls[i]["controls"]['color'].setValidators([Validators.required]);
      } else {
        this.formPartesArrayControl.controls[i]["controls"]['color'].setValidators(null);
      }
      this.formPartesArrayControl.controls[i]["controls"]['color'].updateValueAndValidity();
    }
    this.formPasoShort.controls['escudoShort'].updateValueAndValidity();
  }

  abrirSelector(picker) {
    let selector: HTMLElement = document.getElementById(picker) as HTMLElement;
    selector.click();
  }
}
