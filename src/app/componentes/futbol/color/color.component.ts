import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit, OnChanges {

  @Input() formColor: any;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  @Output() colorSeleccionado = new EventEmitter();
  submit: boolean = false;
  partesColor: [];
  desplegado: boolean = false;
  listadoColores = [
    'red', 'yellow', 'green', 'blue', 'black'
  ]

  formPasoColor: FormGroup = new FormGroup({
    cantidadEquipo: new FormControl(1, [Validators.min(1), Validators.required]),
    equipo: new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formColor && changeRecord.formColor.currentValue) {
      this.partesColor = changeRecord.formColor.currentValue;
    }
  }

  cambiarColor(event, parte) {
    const color = event.target.classList[0];
    let cambio = {
      color: color,
      parte: parte,
    }
    this.colorSeleccionado.emit(cambio);
    (<HTMLElement>document.getElementById(parte).querySelector('.selector-color')).style.backgroundColor = color;
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoColor.valid) {
      this.proximoPaso.emit(this.formPasoColor.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoColor.value);
  }

  desplegarColores(idParte) {
    document.getElementById(idParte).querySelector('.dropdown').classList.toggle('desplegado');
  }
}
