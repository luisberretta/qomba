import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {coloresParte} from "../../../clases/ColorParte";

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss']
})
export class CamisetaComponent implements OnInit, OnChanges {

  @ViewChild('archivoEscudo') fileInput: ElementRef;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  @Output() archivoEscudo = new EventEmitter();
  @Output() colorSeleccionado = new EventEmitter();
  @Output() visualizarEstampado = new EventEmitter();
  @Input() formCamiseta: any;


  posicionesEscudoEstatico: string[] = ["Derecha", "Izquierda", "Centro"];
  posicionesNumeroDelanteroEstatico: string[] = ["Derecha", "Izquierda", "Centro"];
  posicionesEscudo: string[] = ["Derecha", "Izquierda", "Centro"];
  posicionesNumeroDelantero: string[] = ["Derecha", "Izquierda", "Centro"];
  NUMERO_DELANTERO = "Número_delantero";
  NUMERO_ESPALDA = "Número_espalda";
  NOMBRE_ESPALDA = "Nombre";
  ESCUDO_DELANTERO = "Remera_escudo";
  coloresNumeroDelantero;
  coloresNombre;
  coloresNumeroEspalda;

  formPasoCamiseta: FormGroup = new FormGroup({
    llevaEscudoDelantero: new FormControl(null),
    escudoDelantero: new FormControl(null),
    posicionEscudoDelantero: new FormControl(null),
    llevaNumeroDelantero: new FormControl(null),
    posicionNumeroDelantero: new FormControl(null),
    colorNumeroDelantero: new FormControl(null),
    llevaNombreEspalda: new FormControl(null),
    colorNombreEspalda: new FormControl(null),
    llevaNumeroEspalda: new FormControl(null),
    colorNumeroEspalda: new FormControl(null),
  });
  visualizar = {
    valor: null,
    parte: null,
    posicionOcupada: null,
    posicion: null
  }
  submit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.formPasoCamiseta.get('llevaEscudoDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.ESCUDO_DELANTERO;
      if (this.visualizar.valor) {
        if (!this.posicionNumeroDelantero) {
          this.visualizar.posicion = "Centro"
          this.formPasoCamiseta.get('posicionEscudoDelantero').setValue("Centro");
        } else {
          this.generarPosicion(this.posicionNumeroDelantero);
          if (!this.posicionEscudoDelantero) {
            this.formPasoCamiseta.get('posicionEscudoDelantero').setValue(this.visualizar.posicion);
          }
        }
      } else {
        this.formPasoCamiseta.get('posicionEscudoDelantero').setValue(null);
      }
      this.configurarValidadores(true);
      this.visualizarEstampado.emit(this.visualizar);
    });
    this.formPasoCamiseta.get('llevaNumeroDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.NUMERO_DELANTERO;
      if (this.visualizar.valor) {
        if (!this.posicionEscudoDelantero) {
          this.visualizar.posicion = "Centro"
          this.formPasoCamiseta.get('posicionNumeroDelantero').setValue("Centro");
        } else {
          this.generarPosicion(this.posicionEscudoDelantero);
          if (!this.posicionNumeroDelantero) {
            this.formPasoCamiseta.get('posicionNumeroDelantero').setValue(this.visualizar.posicion);
          }
        }
      } else {
        this.formPasoCamiseta.get('posicionNumeroDelantero').setValue(null);
      }
      this.configurarValidadores(false);
      this.visualizarEstampado.emit(this.visualizar);
    });
    this.formPasoCamiseta.get('llevaNombreEspalda').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.NOMBRE_ESPALDA;
      if (this.visualizar.valor) {
        this.formPasoCamiseta.controls['colorNombreEspalda'].setValidators([Validators.required]);
      } else {
        this.formPasoCamiseta.controls['colorNombreEspalda'].setValidators(null);
      }
      this.formPasoCamiseta.controls['colorNombreEspalda'].updateValueAndValidity();
      this.visualizarEstampado.emit(this.visualizar);
    });
    this.formPasoCamiseta.get('llevaNumeroEspalda').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      if (this.visualizar.valor) {
        this.formPasoCamiseta.controls['colorNumeroEspalda'].setValidators([Validators.required]);
      } else {
        this.formPasoCamiseta.controls['colorNumeroEspalda'].setValidators(null);
      }
      this.formPasoCamiseta.controls['colorNumeroEspalda'].updateValueAndValidity();
      this.visualizar.parte = this.NUMERO_ESPALDA;
      this.visualizarEstampado.emit(this.visualizar);
    });

    this.formPasoCamiseta.get('posicionEscudoDelantero').valueChanges.subscribe((valor) => {
      this.posicionesNumeroDelantero = this.posicionesNumeroDelanteroEstatico;
      if (valor) {
        this.visualizar.valor = true;
        this.visualizar.posicion = valor;
        this.visualizar.parte = this.ESCUDO_DELANTERO;
        this.posicionesNumeroDelantero = this.posicionesNumeroDelantero.filter(x => x != this.visualizar.posicion);
        this.visualizarEstampado.emit(this.visualizar);
      }
    });

    this.formPasoCamiseta.get('posicionNumeroDelantero').valueChanges.subscribe((valor) => {
      this.posicionesEscudo = this.posicionesEscudoEstatico;
      if (valor) {
        this.visualizar.valor = true;
        this.visualizar.posicion = valor;
        this.visualizar.parte = this.NUMERO_DELANTERO;
        this.posicionesEscudo = this.posicionesEscudo.filter(x => x != this.visualizar.posicion);
        this.visualizarEstampado.emit(this.visualizar);
      }
    });
  }

  modeloElegido(modelo){
    this.coloresNumeroDelantero = coloresParte.find(x=>x.idModelo == modelo.id).partes.find(x => x.idParte == this.NUMERO_DELANTERO);
    this.coloresNombre = coloresParte.find(x => x.idModelo == modelo.id).partes.find(x => x.idParte == this.NOMBRE_ESPALDA).colores;
    this.coloresNumeroEspalda = coloresParte.find(x=>x.idModelo == modelo.id).partes.find(x => x.idParte == this.NUMERO_ESPALDA).colores;
  }


  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formCamiseta && changeRecord.formCamiseta.currentValue) {
      this.generarFormulario(changeRecord.formCamiseta.currentValue);
    }
  }

  generarFormulario(formCamiseta) {
    this.formPasoCamiseta.get('llevaEscudoDelantero').setValue(formCamiseta.llevaEscudoDelantero ?? null);
    this.formPasoCamiseta.get('escudoDelantero').setValue(formCamiseta.escudoDelantero ?? null);
    this.formPasoCamiseta.get('posicionEscudoDelantero').setValue(formCamiseta.posicionEscudoDelantero ?? null);
    this.formPasoCamiseta.get('llevaNumeroDelantero').setValue(formCamiseta.llevaNumeroDelantero ?? null);
    this.formPasoCamiseta.get('posicionNumeroDelantero').setValue(formCamiseta.posicionNumeroDelantero ?? null);
    this.formPasoCamiseta.get('colorNumeroDelantero').setValue(formCamiseta.colorNumeroDelantero ?? null);
    this.formPasoCamiseta.get('llevaNombreEspalda').setValue(formCamiseta.llevaNombreEspalda ?? null);
    this.formPasoCamiseta.get('colorNombreEspalda').setValue(formCamiseta.colorNombreEspalda ?? null);
    this.formPasoCamiseta.get('llevaNumeroEspalda').setValue(formCamiseta.llevaNumeroEspalda ?? null);
    this.formPasoCamiseta.get('colorNumeroEspalda').setValue(formCamiseta.colorNumeroEspalda ?? null);
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
  }

  cambiarColor(parte, color) {
    let cambio = {
      color: color,
      parte: parte,
      esEstampa: true,
    }
    this.colorSeleccionado.emit(cambio);
  }

  get llevaEscudoDelantero() {
    return this.formPasoCamiseta.controls['llevaEscudoDelantero'].value;
  }

  get llevaNumeroDelantero() {
    return this.formPasoCamiseta.controls['llevaNumeroDelantero'].value;
  }

  get posicionNumeroDelantero() {
    return this.formPasoCamiseta.get('posicionNumeroDelantero').value;
  }

  get posicionEscudoDelantero() {
    return this.formPasoCamiseta.get('posicionEscudoDelantero').value;
  }

  generarPosicion(posicionOcupada) {
    switch (posicionOcupada) {
      case 'Centro':
        this.visualizar.posicion = "Derecha";
        break;
      case 'Derecha':
        this.visualizar.posicion = "Izquierda";
        break;
      case 'Izquierda':
        this.visualizar.posicion = "Centro";
        break;
    }

  }

  configurarValidadores(esEscudoDelantero) {
    if (esEscudoDelantero) {
      if (this.llevaEscudoDelantero) {
        this.formPasoCamiseta.controls['posicionEscudoDelantero'].setValidators([Validators.required]);
        this.formPasoCamiseta.controls['escudoDelantero'].setValidators([Validators.required]);
      } else {
        this.formPasoCamiseta.controls['posicionEscudoDelantero'].setValidators(null);
        this.formPasoCamiseta.controls['escudoDelantero'].setValidators(null);
      }
      this.formPasoCamiseta.controls['posicionEscudoDelantero'].updateValueAndValidity();
      this.formPasoCamiseta.controls['escudoDelantero'].updateValueAndValidity();
    } else {
      if (this.llevaNumeroDelantero) {
        this.formPasoCamiseta.controls['posicionNumeroDelantero'].setValidators([Validators.required]);
        this.formPasoCamiseta.controls['colorNumeroDelantero'].setValidators([Validators.required]);
      } else {
        this.formPasoCamiseta.controls['posicionNumeroDelantero'].setValidators(null);
        this.formPasoCamiseta.controls['colorNumeroDelantero'].setValidators(null);
      }
      this.formPasoCamiseta.controls['posicionNumeroDelantero'].updateValueAndValidity();
      this.formPasoCamiseta.controls['colorNumeroDelantero'].updateValueAndValidity();
    }
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

}
