import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {svgAsPngUri} from 'save-svg-as-png';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit,OnChanges {

  @Input() formCheckOut: any;
  @Output() finalizarPasos = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  submit = false;


  constructor() {
  }

  formPasoCheckOut: FormGroup = new FormGroup({
    imagen: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    observaciones: new FormControl('')
  });

  ngOnInit(): void {

  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formCheckOut && changeRecord.formCheckOut.currentValue) {
    }
  }

  confirmar() {
    this.submit = true;
    if (this.formPasoCheckOut.valid) {
      this.finalizarPasos.emit(this.formPasoCheckOut.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit();
  }
}
