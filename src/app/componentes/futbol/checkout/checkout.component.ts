import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WizardService} from "../../../servicios/wizard.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  mostrar: boolean = false;

  constructor(private wisardService: WizardService,
              private fb: FormBuilder) {
  }

  formPasoCheckOut: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required])
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

  mostrarDetalle() {
    this.mostrar = !this.mostrar;
  }
}
