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
  public show = false;
  submit: boolean = false;
  partesColor: [{
    idParte: any,
    colores: []
  }];
  desplegado: boolean = false;
  selectedColor: string = 'black';

  formPasoColor: FormGroup = new FormGroup({
    partesArray: new FormArray([]),
  });

  get formPartesArrayControl() {
    return this.formPasoColor.get('partesArray') as FormArray;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formColor && changeRecord.formColor.currentValue) {
      this.partesColor = changeRecord.formColor.currentValue;
      this.crearFormPartesArray(changeRecord.formColor.currentValue);
    }
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
    // (<HTMLElement>document.getElementById(parte).querySelector('.selector-color')).style.backgroundColor = color;
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

}
