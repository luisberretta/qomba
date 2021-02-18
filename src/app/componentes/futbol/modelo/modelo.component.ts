import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal,NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {camisetaModelos} from "../../../clases/CamisetaModelo";

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss'],
})
export class ModeloComponent implements OnInit, OnChanges {

  formPasoModelo: FormGroup = new FormGroup({
    agregarShort: new FormControl(null, ),
    agregarMedias: new FormControl(null),
    modelo: new FormControl(null,[Validators.required])
  });
  submit: boolean = false;
  @Input() pasoNumero: number;
  @Output() proximoPaso = new EventEmitter<string>();
  @Input() partes;
  @Output() colorPartes = new EventEmitter();
  @Input() formModelo;
  @Output() imagenEscudo = new EventEmitter();
  @Output() posicionEscudo = new EventEmitter();
  @Output() modeloSeleccionado = new EventEmitter();
  camisetaModelos: any = camisetaModelos;
  seleccionoModelo: boolean = false;
  camiseta: any;
  generoModelo: string = 'hombre';
  modalRef: NgbModalRef;
  modalText: string;
  @ViewChild('template', { static: true }) modalTemplate;
  seleccionada: boolean = false;
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "arrows": false,
    "rows": 1,
    "dots": true,
    "autoplay": false,
    "adaptiveHeight": true,
    "responsive": [
      {
        "breakpoint": 768,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2,
          "rows": 2,
        }
      },
    ]
  };

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.initCamisetas();
    this.formPasoModelo.get('modelo').valueChanges.subscribe(() => {
      this.modeloSeleccionado.emit(this.formPasoModelo.get('modelo').value.urlSvg);
    });
  }

  initCamisetas() {
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionado = false;
    }
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formModelo && changeRecord.formModelo.currentValue) {
      this.generarFormulario(changeRecord.formModelo.currentValue);
    }
  }

  generarFormulario(formModelo) {
    this.formPasoModelo.get('agregarShort').setValue(formModelo.agregarShort);
    this.formPasoModelo.get('agregarMedias').setValue(formModelo.agregarMedias);
    this.formPasoModelo.get('modelo').setValue(formModelo.modelo);
    this.modeloElegido(this.formPasoModelo.get('modelo').value.id);
  }

  abrirModal() {
    this.modalRef = this.modalService.open(this.modalTemplate, { centered: true });
  }

  modeloElegido(id) {
    this.seleccionoModelo = true;
    for (let i = 0; i < this.camisetaModelos.length; i++) {
      this.camisetaModelos[i].seleccionada = false;
      if (id == this.camisetaModelos[i].id) {
        this.camisetaModelos[i].seleccionada = true;
        this.formPasoModelo.get('modelo').setValue(this.camisetaModelos[i]);
      }
    }
  }

  siguiente() {
    this.submit = true;
    if (this.formPasoModelo.valid) {
      this.proximoPaso.emit(this.formPasoModelo.value);
    }
  }

  modelosHombre() {
    this.generoModelo = 'hombre';
    //Renderizar modelos hombre
  }

  modelosMujer() {
    this.generoModelo = 'mujer';
    //Renderizar modelos mujer
  }

  aumentarZoom(camiseta) {
    this.abrirModal();
    this.modalText = camiseta.url;
  }
}
