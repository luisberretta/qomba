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
export class CamisetaComponent implements OnInit,OnChanges {

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
  ESCUDO_DELANTERO = "Escudo_remera";
  ESCUDO_SHORT = "Escudo_short"
  listadoColores = [
    'red', 'yellow', 'green', 'blue', 'black'
  ]
  coloresNumeroDelantero = coloresParte.find(x=> x.idParte == this.NUMERO_DELANTERO).colores;
  coloresNombre = coloresParte.find(x=> x.idParte == this.NOMBRE_ESPALDA).colores;
  coloresNumeroEspalda = coloresParte.find(x=> x.idParte == this.NUMERO_ESPALDA).colores;

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
  llevaEscudoDelantero: boolean;
  submit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.formPasoCamiseta.get('llevaEscudoDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.ESCUDO_DELANTERO;
      this.visualizar.posicionOcupada = this.formPasoCamiseta.get('posicionNumeroDelantero').value;
      if (!this.visualizar.posicionOcupada) {
        this.visualizar.posicion = "Centro"
        this.formPasoCamiseta.get('posicionEscudoDelantero').setValue("Centro");
      }
      this.llevaEscudoDelantero = valor;
      this.visualizarEstampado.emit(this.visualizar);
    });
    this.formPasoCamiseta.get('llevaNumeroDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = valor;
      this.visualizar.parte = this.NUMERO_DELANTERO;
      this.visualizar.posicionOcupada = this.formPasoCamiseta.get('posicionEscudoDelantero').value;
      if (!this.visualizar.posicionOcupada){
        this.visualizar.posicion = "Centro";
        this.formPasoCamiseta.get('posicionNumeroDelantero').setValue("Centro");
      }
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

    this.formPasoCamiseta.get('posicionEscudoDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = true;
      this.visualizar.posicion = valor;
      this.visualizar.parte = this.ESCUDO_DELANTERO;
      this.visualizar.posicionOcupada = this.formPasoCamiseta.get('posicionNumeroDelantero').value;
      this.posicionesNumeroDelantero=this.posicionesNumeroDelanteroEstatico;
      this.posicionesNumeroDelantero = this.posicionesNumeroDelantero.filter(x => x != this.visualizar.posicion);
      this.visualizarEstampado.emit(this.visualizar);
    });

    this.formPasoCamiseta.get('posicionNumeroDelantero').valueChanges.subscribe((valor) => {
      this.visualizar.valor = true;
      this.visualizar.posicion = valor;
      this.visualizar.parte = this.NUMERO_DELANTERO;
      this.visualizar.posicionOcupada = this.formPasoCamiseta.get('posicionEscudoDelantero').value;
      this.posicionesEscudo= this.posicionesEscudoEstatico;
      this.posicionesEscudo = this.posicionesEscudo.filter(x => x != this.visualizar.posicion);
      this.visualizarEstampado.emit(this.visualizar);
    });
  }


  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formCamiseta && changeRecord.formCamiseta.currentValue) {
      this.generarFormulario(changeRecord.formCamiseta.currentValue);
    }
  }

  generarFormulario(formCamiseta) {
    this.formPasoCamiseta.get('llevaEscudoDelantero').setValue(formCamiseta.llevaEscudoDelantero ?? null);
    this.formPasoCamiseta.get('escudoDelantero').setValue(formCamiseta.llevaEscudoDelantero?? null);
    this.formPasoCamiseta.get('posicionEscudoDelantero').setValue(formCamiseta.posicionEscudoDelantero ?? null);
    this.formPasoCamiseta.get('llevaNumeroDelantero').setValue(formCamiseta.llevaNumeroDelantero ?? null);
    this.formPasoCamiseta.get('posicionNumeroDelantero').setValue(formCamiseta.posicionNumeroDelantero ?? null);
    this.formPasoCamiseta.get('colorNumeroDelantero').setValue(formCamiseta.colorNumeroDelantero ?? null);
    this.formPasoCamiseta.get('llevaNombreEspalda').setValue(formCamiseta.llevaNombreEspalda ?? null);
    this.formPasoCamiseta.get('colorNombreEspalda').setValue(formCamiseta.colorNombreEspalda ?? null);
    this.formPasoCamiseta.get('llevaNumeroEspalda').setValue(formCamiseta.llevaNumeroEspalda ?? null);
    this.formPasoCamiseta.get('colorNumeroEspalda').setValue(formCamiseta.colorNumeroEspalda ?? null);
    console.log(this.formPasoCamiseta.value);
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

  siguiente() {
    this.submit = true;
    if (this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoCamiseta.value);
  }

  cambiarColor(parte,color) {
    let cambio = {
      color: color,
      parte: parte,
      esEstampa: true,
    }
    this.colorSeleccionado.emit(cambio);
    // (<HTMLElement>document.getElementById(parte).querySelector('.selector-color')).style.backgroundColor = color;
  }

}
