import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {} from "events";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit {

  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  @Output() colorShort = new EventEmitter();
  formPasoShort: FormGroup = new FormGroup({
    llevaShort: new FormControl(''),
    color: new FormControl(''),
    llevaEscudo: new FormControl(''),
    llevaNumero: new FormControl(''),
  });
  submit: boolean = false;
  activo: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  buildFromPasoShort() {
    this.formPasoShort = this.fb.group({
      llevaShort: [''],
      color: [''],
      llevaEscudo: [''],
      llevaNumero: [''],
    })
  }

  get pasoCamisetaForm() {
    return this.formPasoShort.controls;
  }

  siguiente() {
    this.submit = true;
    console.log(this.formPasoShort);
    this.proximoPaso.emit(this.formPasoShort.value);
    // if(this.formPasoShort.valid) {
    //   this.proximoPaso.emit(this.formPasoShort.value);
    // }
  }

  anterior() {
    this.anteriorPaso.emit();
  }

  cambioColorShort(event) {
    this.colorShort.emit(event.color.hex);
  }

  activarCampos() {
    this.activo = !this.activo;
  }

}
