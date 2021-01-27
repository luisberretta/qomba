import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit, OnChanges {

  @Input() formEquipoPedido: any;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  talles: string[] = ["XS", "S", "M", "L", "XL", "XXL"];

  constructor() {
  }

  formEquipo: FormGroup = new FormGroup({
    cantidadEquipo: new FormControl(1, [Validators.required]),
    equipo: new FormArray([])
  });

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formEquipoPedido && changes.formEquipoPedido.currentValue) {
      if (changes.formEquipoPedido.currentValue.detalleEquipo)
        this.generarFormulario(changes.formEquipoPedido.currentValue);
      else this.crearArrayFormEquipo();
    }
  }

  generarFormulario(formEquipoPedido) {
    for (let i = 0; i < formEquipoPedido.detalleEquipo.length; i++) {
      if (this.formEquipoControl.value.length < formEquipoPedido.detalleEquipo.length) {
        this.formEquipoControl.push(
          new FormGroup({
            nombre: new FormControl(formEquipoPedido.detalleEquipo[i].nombre, [Validators.required]),
            numero: new FormControl(formEquipoPedido.detalleEquipo[i].numero, [Validators.min(0), Validators.max(99)]),
            talleCamiseta: new FormControl(formEquipoPedido.detalleEquipo[i].talleCamiseta, [Validators.required]),
            talleShort: new FormControl(formEquipoPedido.detalleEquipo[i].talleShort, [Validators.required])
          })
        );
      }
    }
  }

  get formEquipoControl() {
    return this.formEquipo.get('equipo') as FormArray;
  }

  crearArrayFormEquipo() {
    for (let i = 0; i < this.formEquipo.controls.cantidadEquipo.value; i++) {
      this.formEquipoControl.push(
        new FormGroup({
          nombre: new FormControl('', [Validators.required]),
          numero: new FormControl('', [Validators.min(0), Validators.max(99)]),
          talleCamiseta: new FormControl('', [Validators.required]),
          talleShort: new FormControl('', [Validators.required])
        })
      );
    }
  }

  onValueChanges(): void {
    this.formEquipo.get('cantidadEquipo').valueChanges.subscribe(valor => {
      this.formEquipo.get('cantidadEquipo').setValue(valor);
      if (valor < 1) {
        this.formEquipoControl.value.length = valor;
        return;
      }
      if (valor < this.formEquipoControl.value.length) {
        this.formEquipoControl.value.length = valor;
      } else {
        for (let i = this.formEquipoControl.value.length; i < valor; i++) {
          this.formEquipoControl.push(
            new FormGroup({
              nombre: new FormControl('', [Validators.required]),
              numero: new FormControl('', [Validators.min(0), Validators.max(99)]),
              talleCamiseta: new FormControl('', [Validators.required]),
              talleShort: new FormControl('', [Validators.required])
            })
          );
        }
      }
    });
  }

  siguiente() {
    this.proximoPaso.emit(this.formEquipo.value);
  }

  anterior() {
    this.anteriorPaso.emit();
  }


}
