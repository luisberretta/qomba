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
  submit: boolean = false;
  constructor() {
  }

  formEquipo: FormGroup = new FormGroup({
    cantidadEquipo: new FormControl(1, [Validators.min(1),Validators.required]),
    equipo: new FormArray([])
  });

  ngOnInit(): void {
    this.formEquipo.get('cantidadEquipo').valueChanges.subscribe((valor) => {

      if (valor < 1 || valor < this.formEquipoControl.controls.length) {
        this.formEquipoControl.controls.length = valor;
        return;
      } else {
        for (let i = this.formEquipoControl.controls.length; i < valor; i++) {
          this.formEquipoControl.push(
            new FormGroup({
              nombre: new FormControl(null, [Validators.required]),
              numero: new FormControl(null, [Validators.min(0), Validators.max(99),Validators.required]),
              talleCamiseta: new FormControl(null, [Validators.required]),
              talleShort: new FormControl(null, [Validators.required])
            })
          );
        }
      }
      console.log("valor" + valor, "form" + this.formEquipoControl.value.length);
    });
  }

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
            numero: new FormControl(formEquipoPedido.detalleEquipo[i].numero, [Validators.min(0), Validators.max(99),Validators.required]),
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
          nombre: new FormControl(null, [Validators.required]),
          numero: new FormControl(null, [Validators.min(0), Validators.max(99),Validators.required]),
          talleCamiseta: new FormControl(null, [Validators.required]),
          talleShort: new FormControl(null, [Validators.required])
        })
      );
    }
  }

  siguiente() {
    console.log(this.formEquipo.controls.cantidadEquipo.errors)
    this.submit = true;
    if (this.formEquipo.valid) {
      this.proximoPaso.emit(this.formEquipo.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit();
  }


}
