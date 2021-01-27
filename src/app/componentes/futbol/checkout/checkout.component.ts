import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WizardService} from "../../../servicios/wizard.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() checkOut: any;
  @Output() finalizarPasos = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  submit = false;

  constructor(private wisardService: WizardService,
              private fb: FormBuilder) {
  }

  formCheckOut: FormGroup = this.fb.group({
    email: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  confirmar() {
    this.submit = true;
    if(this.formCheckOut.valid){
      this.anteriorPaso.emit(this.formCheckOut.value);
    }
  }

  anterior() {
    this.anteriorPaso.emit();
  }
}
