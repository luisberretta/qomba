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
    this.formPasoEquipo.get('cantidadEquipo').valueChanges.subscribe((valor) => {
      if (valor < 1 || valor < this.formEquipoControl.controls.length) {
        this.formEquipoControl.controls.length = valor;
        return;
      } else {
        for (let i = this.formEquipoControl.controls.length; i < valor; i++) {
          this.formEquipoControl.push(
            new FormGroup({
              nombreCamiseta: new FormControl(null, [Validators.required]),
              numero: new FormControl(null, [Validators.min(0), Validators.max(99),Validators.required]),
              talleCamiseta: new FormControl(null, [Validators.required]),
              talleShort: new FormControl(null, [Validators.required])
            })
          );
        }
      }
    });
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
            nombreCamiseta: new FormControl(formEquipo.detalleEquipo[i].nombreCamiseta, [Validators.required]),
            numero: new FormControl(formEquipo.detalleEquipo[i].numero, [Validators.min(0), Validators.max(99),Validators.required]),
            talleCamiseta: new FormControl(formEquipo.detalleEquipo[i].talleCamiseta, [Validators.required]),
            talleShort: new FormControl(formEquipo.detalleEquipo[i].talleShort, [Validators.required])
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
      this.formEquipoControl.push(
        new FormGroup({
          nombreCamiseta: new FormControl(null, [Validators.required]),
          numero: new FormControl(null, [Validators.min(0), Validators.max(99),Validators.required]),
          talleCamiseta: new FormControl(null, [Validators.required]),
          talleShort: new FormControl(null, [Validators.required])
        })
      );
    }
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoEquipo.valid) {
      this.proximoPaso.emit(this.formPasoEquipo.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit();
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
