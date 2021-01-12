import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {} from "events";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit {

  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  formPasoShort: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildFromPasoShort();
  }

  buildFromPasoShort() {
    this.formPasoShort = this.fb.group({
      llevaShort: ['', Validators.required]
    })
  }

  get pasoCamisetaForm() {
    return this.formPasoShort.controls;
  }

  siguiente() {
    this.proximoPaso.emit(undefined);
  }

  anterior() {
    this.anteriorPaso.emit();
  }

}
