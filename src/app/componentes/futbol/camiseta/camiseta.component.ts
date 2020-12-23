import {Component, ElementRef, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbCarousel, NgbSlideEvent} from "@ng-bootstrap/ng-bootstrap";

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
  @Input() partesCamiseta: any;
  nombreArchivo: string;
  deshabilitado: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildPasoCamisetaForm();
  }

  get pasoCamisetaForm() {
    return this.formPasoCamiseta.controls;
  }

  // Método para capturar el evento del click en el botón y disparar para que deje subir archivo
  archivo() {
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

  // Método que captura el evento de subida de archivo.
  subirArchivo(event) {
    if (event.target.files.length > 0) {
      const archivo = event.target.files[0];
      this.formPasoCamiseta.patchValue({
        image: archivo
      });
      this.deshabilitado = false;
      this.nombreArchivo = event.target.files[0].name;
    }
  }

  siguiente() {
    this.submit = true;
    if(this.formPasoCamiseta.valid) {
      this.proximoPaso.emit(this.formPasoCamiseta.value);
    }
  }

  onSlide(event) {
    // console.log(this.carousel.activeId);
  }

}
