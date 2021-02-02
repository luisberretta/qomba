import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WizardService} from "../../../servicios/wizard.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() formCheckOut: any;
  @Output() finalizarPasos = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  submit = false;

  constructor() {
  }

  formPasoCheckOut: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    observaciones: new FormControl('')
  });

  ngOnInit(): void {
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
