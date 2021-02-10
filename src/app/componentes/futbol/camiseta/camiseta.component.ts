import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss']
})
export class CamisetaComponent implements OnInit {

  @ViewChild('archivoEscudo') fileInput: ElementRef;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  @Output() archivoEscudo = new EventEmitter();
  @Output() colorSeleccionado = new EventEmitter();
  @Output() visualizarEstampado = new EventEmitter();
  @Input() formCamiseta: any;

  posicionesEscudo: string[] = ["Derecha", "Izquierda", "Centro"];
  posicionesNumeroDelantero: string[] = ["Derecha", "Izquierda", "Centro"];
  NUMERO_DELANTERO = "NUMERO_DELANTERO";
  NUMERO_ESPALDA = "NUMERO_ESPALDA";
  NOMBRE_ESPALDA = "NOMBRE_ESPALDA";
  ESCUDO_DELANTERO = "ESCUDO_DELANTERO";


  formPasoCamiseta: FormGroup = new FormGroup({
    llevaEscudoDelantero: new FormControl(null),
    escudoDelantero: new FormControl(null),
    posicionEscudoDelantero: new FormControl(null),
    llevaNumeroDelantero: new FormControl(null),
    posicionNumeroDelantero: new FormControl(null),
    llevaNombreEspalda: new FormControl(null),
    llevaNumeroEspalda: new FormControl(null)
  });
  visualizar = {
    valor : undefined,
    parte : undefined,
    posicionOcupada: undefined
  }
  submit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.formPasoCamiseta.get('llevaEscudoDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.ESCUDO_DELANTERO;
      this.visualizar.posicionOcupada = this.formPasoCamiseta.get('posicionNumeroDelantero').value;
      if(!this.visualizar.posicionOcupada)
        this.visualizar.posicionOcupada = "Centro";
      this.visualizarEstampado.emit(this.visualizar);
    });
    this.formPasoCamiseta.get('llevaNumeroDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.NUMERO_DELANTERO;
      this.visualizar.posicionOcupada = this.formPasoCamiseta.get('posicionEscudoDelantero').value;
      if(!this.visualizar.posicionOcupada)
        this.visualizar.posicionOcupada = "Derecha";
      this.visualizarEstampado.emit(this.visualizar);
    });
    this.formPasoCamiseta.get('llevaNombreEspalda').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.NOMBRE_ESPALDA;
      this.visualizarEstampado.emit(this.visualizar);
    });
    this.formPasoCamiseta.get('llevaNumeroEspalda').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.NUMERO_ESPALDA;
      this.visualizarEstampado.emit(this.visualizar);
    });
  }

  archivo() {
    this.fileInput.nativeElement.click();
  }

  subirArchivo(event) {
    if (event.target.files.length > 0) {
      const archivo = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = (_event) => {
        this.formPasoCamiseta.controls['escudoDelantero'].setValue(reader.result);
      }
      this.archivoEscudo.emit(event.target.files[0]);
    }
    // this.formPasoCamiseta.controls['posicionEscudo'].setValidators([Validators.required]);
    // this.formPasoCamiseta.controls['posicionEscudo'].updateValueAndValidity();
  }

  cambiarPosicionEscudo() {

  }

  cambiarPosicionNumeroDelantero() {

  }

  siguiente() {
    this.submit = true;
    if (this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoCamiseta.value);
  }

  cambiarColor(color, parte) {
    let cambio = {
      color: color,
      parte: parte,
      esEstampa: true,
    }
    this.colorSeleccionado.emit(cambio);
  }

}
