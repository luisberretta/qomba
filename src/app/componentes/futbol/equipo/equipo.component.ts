import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  @Output() proximoPaso = new EventEmitter();
  talles: string[] = ["XS", "S", "M", "L", "XL", "XXL"];
  mostrarTabla: boolean = false;

  constructor(private fb: FormBuilder) {
  }

  formEquipo = this.fb.group({
    cantidadEquipo: [0, Validators.required],
    equipo: new FormArray([]),
  });

  ngOnInit(): void {
    this.onValueChanges();
  }

  get form() {
    return this.formEquipo.controls;
  }

  get equipo() {
    return this.form.equipo as FormArray;
  }

  onValueChanges(): void {
    this.formEquipo.get('cantidadEquipo').valueChanges.subscribe(val => {
      if (val <= 0) {
        this.mostrarTabla = false;
        return;
      }
      this.mostrarTabla = true;
      if (val < this.equipo.length) {
        this.equipo.controls.length = val;
      } else {
        for (let i = this.equipo.controls.length; i < val; i++) {
          this.equipo.controls.push(this.fb.group({
            nombre: ['', Validators.required],
            numero: ['', [Validators.min(0), Validators.max(99)]],
            talleCamiseta: ['', Validators.required],
            talleShort: ['', Validators.required]
          }));
        }
      }
    });
  }

  siguiente() {
    this.proximoPaso.emit(this.formEquipo.value);
  }


}
