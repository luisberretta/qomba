import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit, OnChanges {

  @Input() formEquipo: any;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  talles: string[] = ["XS", "S", "M", "L", "XL", "XXL"];
  submit: boolean = false;
  formPasoEquipo: FormGroup = new FormGroup({
    cantidadEquipo: new FormControl(1, [Validators.min(1),Validators.required]),
    equipo: new FormArray([])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formEquipo && changes.formEquipo.currentValue) {
      if (changes.formEquipo.currentValue.detalleEquipo) {
        this.generarFormulario(changes.formEquipo.currentValue);
      } else {
        this.crearArrayFormEquipo();
      }
    }
  }

  generarFormulario(formEquipo) {
    this.formPasoEquipo.controls['cantidadEquipo'].setValue(formEquipo.detalleEquipo.length);
    for (let i = 0; i < formEquipo.detalleEquipo.length; i++) {
      if (this.formEquipoControl.value.length < formEquipo.detalleEquipo.length) {
        this.formEquipoControl.push(
          new FormGroup({
            nombreCamiseta: new FormControl(formEquipo.detalleEquipo[i].nombreCamiseta,formEquipo.llevaNombreCamiseta?? [Validators.required]),
            numero: new FormControl(formEquipo.detalleEquipo[i].numero, [Validators.min(0), Validators.max(99), formEquipo.llevaNumeroCamiseta?? Validators.required]),
            talleCamiseta: new FormControl(formEquipo.detalleEquipo[i].talleCamiseta, [Validators.required]),
            talleShort: new FormControl(formEquipo.detalleEquipo[i].talleShort, formEquipo.llevaShort??[Validators.required])
          })
        );
      }
    }
  }

  get formEquipoControl() {
    return this.formPasoEquipo.get('equipo') as FormArray;
  }

  crearArrayFormEquipo() {
    for (let i = 0; i < this.formPasoEquipo.controls.cantidadEquipo.value; i++) {
      let jugador = new FormGroup({
        nombreCamiseta: new FormControl(null,  ),
        numero: new FormControl(null, [Validators.min(0), Validators.max(99)]),
        talleCamiseta: new FormControl(null, [Validators.required]),
        talleShort: new FormControl(null, )
      });
      jugador = this.agregarValidators(jugador);
      this.formEquipoControl.push(jugador);
    }
  }

  agregarValidators(jugador){
    if(this.formEquipo.llevaNombreCamiseta){
      jugador.controls.nombreCamiseta.setValidators([Validators.required]);
    }
    if(this.formEquipo.llevaNumeroCamiseta){
      jugador.controls.numero.setValidators([Validators.required]);
    }
    if(this.formEquipo.llevaShort){
      jugador.controls.talleShort.setValidators([Validators.required]);

    }
    // this.formPasoEquipo.controls.nombreCamiseta.updateValueAndValidity();
    return jugador
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoEquipo.valid) {
      this.proximoPaso.emit(this.formPasoEquipo.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoEquipo.value);
  }

  aumentarJugador() {
    let valor = this.formPasoEquipo.controls['cantidadEquipo'].value;
    valor++;
    this.formPasoEquipo.controls['cantidadEquipo'].setValue(valor);
  }

  restarJugador() {
    let valor = this.formPasoEquipo.controls['cantidadEquipo'].value;
    if(valor == 1) {
      this.formPasoEquipo.controls['cantidadEquipo'].setValue(1);
    } else {
      this.formPasoEquipo.controls['cantidadEquipo'].setValue(--valor);
    }
  }
}
