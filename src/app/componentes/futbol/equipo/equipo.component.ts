import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit, OnChanges {

  @Input() formEquipo: any;
  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  talles: string[] = ['XS', "S", "M", "L", "XL", "XXL"];
  submit: boolean = false;
  formPasoEquipo: FormGroup = new FormGroup({
    nombreEquipo: new FormControl(null, [Validators.required]),
    nombreContacto: new FormControl(null, [Validators.required]),
    telefonoContacto: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
    emailContacto: new FormControl(null, [Validators.required, Validators.email]),
    cantidadEquipo: new FormControl(1, [Validators.min(1), Validators.required]),
    equipo: new FormArray([])
  });

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.formPasoEquipo.get('cantidadEquipo').valueChanges.subscribe((valor) => {
      if (valor < 1) {
        this.formEquipoControl.controls.length = 1;
      } else if(valor < this.formEquipoControl.controls.length) {
        this.formEquipoControl.controls.length = valor;
      } else {
        let desde = 0;
        if (this.formEquipoControl.controls.length) {
          desde = this.formEquipoControl.controls.length;
        }
        for (let i = desde; i < valor; i++) {
          let jugador = new FormGroup({
            nombreCamiseta: new FormControl(null),
            numero: new FormControl(null, [Validators.min(0), Validators.max(99)]),
            talleCamiseta: new FormControl(null, [Validators.required]),
            talleShort: new FormControl(null),
          });
          jugador = this.agregarValidadores(jugador);
          this.formEquipoControl.push(jugador);
        }
      }
    });
    this.formPasoEquipo.get('telefonoContacto').valueChanges.subscribe((valor) => {
      if(isNaN(Number(valor))) {
        this.formPasoEquipo.get('telefonoContacto').setValue("", { emitEvent: false });
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
    this.formPasoEquipo.controls['nombreEquipo'].setValue(formEquipo.nombreEquipo);
    this.formPasoEquipo.controls['cantidadEquipo'].setValue(formEquipo.cantidadEquipo);
    this.formPasoEquipo.controls['nombreContacto'].setValue(formEquipo.nombreContacto);
    this.formPasoEquipo.controls['telefonoContacto'].setValue(formEquipo.telefonoContacto);
    this.formPasoEquipo.controls['emailContacto'].setValue(formEquipo.emailContacto);
    for (let i = 0; i < formEquipo.cantidadEquipo; i++) {
      if (this.formEquipoControl.value.length < formEquipo.detalleEquipo.length) {
        let jugador = new FormGroup({
          nombreCamiseta: new FormControl(formEquipo.detalleEquipo[i].nombreCamiseta),
          numero: new FormControl(formEquipo.detalleEquipo[i].numero, [Validators.min(0), Validators.max(99)]),
          talleCamiseta: new FormControl(formEquipo.detalleEquipo[i].talleCamiseta, [Validators.required]),
          talleShort: new FormControl(formEquipo.detalleEquipo[i].talleShort)
        });
        jugador = this.agregarValidadores(jugador);
        this.formEquipoControl.push(jugador);
      }
    }
  }

  get formEquipoControl() {
    return this.formPasoEquipo.get('equipo') as FormArray;
  }

  crearArrayFormEquipo() {
    for (let i = 0; i < this.formPasoEquipo.controls.cantidadEquipo.value; i++) {
      let jugador = new FormGroup({
        nombreCamiseta: new FormControl(null),
        numero: new FormControl(null, [Validators.min(0), Validators.max(99)]),
        talleCamiseta: new FormControl(null, [Validators.required]),
        talleShort: new FormControl(null)
      });
      jugador = this.agregarValidadores(jugador);
      this.formEquipoControl.push(jugador);
    }
  }

  agregarValidadores(jugador) {
    if (this.formEquipo.llevaNombreCamiseta) {
      jugador.controls.nombreCamiseta.setValidators([Validators.required]);
    }
    if (this.formEquipo.llevaNumeroCamiseta) {
      jugador.controls.numero.setValidators([Validators.required]);
    }
    if (this.formEquipo.llevaShort) {
      jugador.controls.talleShort.setValidators([Validators.required]);

    }
    jugador.controls['nombreCamiseta'].updateValueAndValidity();
    jugador.controls['numero'].updateValueAndValidity();
    jugador.controls['talleShort'].updateValueAndValidity();
    return jugador;
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

  open(content) {
    this.modalService.open(content, {centered: true});
  }

  aumentarJugador() {
    let valor = this.formPasoEquipo.get('cantidadEquipo').value;
    valor++;
    this.formPasoEquipo.get('cantidadEquipo').setValue(valor);
  }

  restarJugador() {
    let valor = this.formPasoEquipo.get('cantidadEquipo').value;
    if(valor == 1) {
      this.formPasoEquipo.get('cantidadEquipo').setValue(1);
    } else {
      this.formPasoEquipo.get('cantidadEquipo').setValue(--valor);
    }
  }
}
