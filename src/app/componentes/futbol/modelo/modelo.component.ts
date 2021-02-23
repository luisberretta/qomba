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
    modelo: new FormControl(null,[Validators.required])
  });
  submit: boolean = false;
  @Output() proximoPaso = new EventEmitter<string>();
  @Output() colorPartes = new EventEmitter();
  @Input() formModelo;
  @Output() modeloSeleccionado = new EventEmitter();
  camisetaModelos: any = camisetaModelos.filter(x => x.tipo == 'hombre');
  seleccionoModelo: boolean = false;
  generoModelo: string = 'hombre';
  detallePrecioId: number;
  modalRef: NgbModalRef;
  modalText: string;
  @ViewChild('template', { static: true }) modalTemplate;
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
      this.modeloSeleccionado.emit(this.formPasoModelo.get('modelo').value);
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
    this.formPasoModelo.get('modelo').setValue(formModelo.modelo);
    this.modeloElegido(this.formPasoModelo.get('modelo').value.id);
  }

  abrirModal() {
    this.modalRef = this.modalService.open(this.modalTemplate, { centered: true });
  }

  cerrar() {
    this.modalService.dismissAll();
  }

  modeloElegido(id) {
    this.detallePrecioId = null;
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
    this.camisetaModelos = camisetaModelos.filter(x => x.tipo == 'hombre');
  }

  modelosMujer() {
    this.generoModelo = 'mujer';
    this.camisetaModelos = camisetaModelos.filter(x => x.tipo == 'mujer');
  }

  aumentarZoom(camiseta) {
    this.abrirModal();
    this.modalText = camiseta.urlZoom;
  }

  abrirDetalle(idCamiseta) {
    this.detallePrecioId = idCamiseta;
  }
}
