import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  @Input() pedido: any;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  talles: string[] = ["XS", "S", "M", "L", "XL", "XXL"];
  mostrarTabla: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  formEquipo = this.fb.group({
    cantidadEquipo: [0, Validators.required],
    equipo: this.fb.array([]),
  });

  ngOnInit(): void {
    this.onValueChanges();
  }

  get equipo() {
    return this.formEquipo.controls.equipo as FormArray;
  }

  onValueChanges(): void {
    let equipo = this.formEquipo.controls.equipo as FormArray;
    this.formEquipo.get('cantidadEquipo').valueChanges.subscribe(val => {
      if (val <= 0) {
        equipo.controls.length = val;
        this.mostrarTabla = false;
        return;
      }
      this.mostrarTabla = true;
      if (val < equipo.length) {
        equipo.controls.length = val;
      } else {
        for (let i = equipo.controls.length; i < val; i++) {
          equipo.push(this.fb.group({
            nombre: ['', Validators.required],
            numero: ['', [Validators.min(0), Validators.max(99)]],
            talleCamiseta: ['', Validators.required],
            talleShort: ['', Validators.required]
          }));
        }
      }
    });
  }

  correspondeNumero(){
    return (this.pedido.tieneNroCamiseta || this.pedido.tieneNroShort);
  }

  siguiente() {
    this.proximoPaso.emit(this.formEquipo.value);
  }

  anterior() {
    this.anteriorPaso.emit(this.formEquipo.value);
  }
}
