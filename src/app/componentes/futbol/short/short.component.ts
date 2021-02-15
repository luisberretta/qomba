import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import {} from "events";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent implements OnInit, OnChanges {

  @Output() proximoPaso = new EventEmitter();
  @Output() anteriorPaso = new EventEmitter();
  @Output() colorShort = new EventEmitter();
  @ViewChild('archivoEscudo') fileInput: ElementRef;

  tiposLetra = ['Mundial Sudáfrica', 'Otro Tipo', 'Otro Tipo 2'];
  posicionesSponsorManga = ['Derecha', 'Centro', 'Izquierda'];
    posicioneSponsorTrasero = ['Derecha', 'Centro', 'Izquierda'];
      posicioneSponsorDelantero = ['Derecha', 'Centro', 'Izquierda'];
  formPasoShort: FormGroup = new FormGroup({
    agregarShort: new FormControl(''),
    agregarEscudoShort: new FormControl(''),
    agregarNumeroShort: new FormControl(''),
    tipoLetra: new FormControl(''),
    agregarSponsorDelantero: new FormControl(''),
    posicionSponsorDelantero: new FormControl(''),
    sponsorDelantero: new FormControl(''),
    agregarSponsorTrasero: new FormControl(''),
    posicionSponsorTrasero: new FormControl(''),
    sponsorTrasero: new FormControl(''),
    agregarSponsorManga: new FormControl(''),
    posicionSponsorManga: new FormControl(''),
    sponsorManga: new FormControl(''),
  });
  submit: boolean = false;
  activo: boolean = false;
  @Input() formShort;
  @Output() llevaShort = new EventEmitter();

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formShort && changeRecord.formShort.currentValue) {
      this.generarFormulario(changeRecord.formShort.currentValue);
    }
  }

  siguiente() {
    this.submit = true;
    this.proximoPaso.emit(this.formPasoShort.value);
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoShort.value);
  }

  generarFormulario(formShort) {
    this.formPasoShort.get('agregarShort').setValue(formShort.agregarShort ?? null);
    this.formPasoShort.get('agregarEscudoShort').setValue(formShort.agregarEscudoShort ?? null);
    this.formPasoShort.get('agregarNumeroShort').setValue(formShort.agregarNumeroShort ?? null);
    this.formPasoShort.get('tipoLetra').setValue(formShort.tipoLetra ?? null);
    this.formPasoShort.get('sponsorDelantero').setValue(formShort.sponsorDelantero ?? null);
    this.formPasoShort.get('posicionSponsorDelantero').setValue(formShort.posicionSponsorDelantero ?? null);
    this.formPasoShort.get('posicionSponsorTrasero').setValue(formShort.posicionSponsorTrasero ?? null);
    this.formPasoShort.get('posicionSponsorManga').setValue(formShort.posicionSponsorManga ?? null);
  }

  get agregarShort() {
    return this.formPasoShort.get('agregarShort').value;
  }

  open(content) {
    this.modalService.open(content, {centered: true});
  }

  archivo() {
    this.fileInput.nativeElement.click();
  }

  subirArchivo(event) {
    if (event.target.files.length > 0) {
      const archivo = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = (_event) => {
        this.formPasoShort.controls['escudoDelantero'].setValue(reader.result);
      }
      // this.archivoEscudo.emit(event.target.files[0]);
    }
    // this.formPasoCamiseta.controls['posicionEscudo'].setValidators([Validators.required]);
    // this.formPasoCamiseta.controls['posicionEscudo'].updateValueAndValidity();
  }

}
