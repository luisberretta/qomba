import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges, AfterViewInit, HostListener
} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal,NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {camisetaModelos} from "../../../clases/CamisetaModelo";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {NgxUiLoaderService} from "ngx-ui-loader";

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
  mobile: boolean = false;
  modalRef: NgbModalRef;
  imgZoom: string;
  imgZoomAlt: string;
  @ViewChild('template', { static: true }) modalTemplate;
  @ViewChild('slickModal') slick: SlickCarouselComponent;
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

  constructor(private modalService: NgbModal, private ngxLoader: NgxUiLoaderService ) {
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
    setTimeout(() => {
      this.slick.slickGoTo(formModelo.modelo.id - 1);
    }, 100);

    this.formPasoModelo.get('modelo').setValue(formModelo.modelo);
    this.generoModelo = formModelo.modelo.tipo;
    this.generoModelo == 'hombre'? this.modelosHombre() :this.modelosMujer();
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
      this.ngxLoader.start();
      setTimeout(() => {
        this.ngxLoader.stop();
        this.proximoPaso.emit(this.formPasoModelo.value);
      },1500)
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
    this.imgZoom = camiseta.urlZoom;
    this.imgZoomAlt = camiseta.urlZoomAlt;
  }

  detalle(modeloId) {
    if(window.innerWidth <= 768) {
      this.detallePrecioId = modeloId;
    } else {
      this.detallePrecioId = null;
    }
  }

  obtenerPrecioFormateado(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
