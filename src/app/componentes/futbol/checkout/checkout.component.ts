import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {WizardService} from "../wizard.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() checkOut: any;
  @Output() finalizarPasos = new EventEmitter();



  constructor(private wisardService: WizardService,
              private fb: FormBuilder) {
  }

  formCheckOut: FormGroup = this.fb.group({
    email:['',Validators.required]
  })

  ngOnInit(): void {
  }

  confirmar(){
    this.finalizarPasos.emit(this.formCheckOut.value);
  }

}
