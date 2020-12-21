import {Component, ElementRef, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.scss']
})
export class CamisetaComponent implements OnInit {

  @ViewChild('archivoEscudo') fileInput: ElementRef;
  formPasoCamiseta: FormGroup;
  submit: boolean = false;
  @Input() pasoNumero: number;
  @Output() proximoPaso = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildPasoCamisetaForm();
  }

  get pasoCamisetaForm() {
    return this.formPasoCamiseta.controls;
  }

  uploadFile() {
    this.fileInput.nativeElement.click();
  }

  buildPasoCamisetaForm() {
    this.formPasoCamiseta = this.fb.group({
      modeloCamiseta: ['', Validators.required],
      color: ['', Validators.required],
      cuello: ['', Validators.required],
      escudo: [''],
      posicionEscudo: [''],
      calidadEscudo: [''],
    });
  }

  siguiente() {
    this.submit = true;
    if(this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

}
