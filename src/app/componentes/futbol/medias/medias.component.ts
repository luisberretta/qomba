import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {svgAsPngUri} from 'save-svg-as-png';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit,OnChanges {

  @Input() formMedias: any;
  @Output() anteriorPaso = new EventEmitter();
  @Output() proximoPaso = new EventEmitter();
  @Output() colorSeleccionado = new EventEmitter();
  @ViewChild('archivoEscudo') fileInput: ElementRef;
  @Output() archivoEscudo = new EventEmitter();

  posicionesSponsorManga = ['Derecha', 'Centro', 'Izquierda'];
  posicioneSponsorTrasero = ['Derecha', 'Centro', 'Izquierda'];
  posicioneSponsorDelantero = ['Derecha', 'Centro', 'Izquierda'];
  submit = false;
  selectedColor = 'black';

  constructor() {
  }

  formPasoMedias: FormGroup = new FormGroup({
    agregarMedias: new FormControl(null),
    imagen: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    observaciones: new FormControl(''),
    agregarSponsorDelantero: new FormControl(''),
    posicionSponsorDelantero: new FormControl(''),
    sponsorDelantero: new FormControl(''),
    agregarSponsorTrasero: new FormControl(''),
    posicionSponsorTrasero: new FormControl(''),
    sponsorTrasero: new FormControl(''),
    agregarSponsorManga: new FormControl(''),
    posicionSponsorManga: new FormControl(''),
    sponsorManga: new FormControl(''),
    partesMediasSVG: new FormArray([]),
  });


  get formPartesArrayControl() {
    return this.formPasoMedias.get('partesMediasSVG') as FormArray;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formMedias && changeRecord.formMedias.currentValue) {
      this.generarFormularioMedias(changeRecord.formMedias.currentValue);
    }
  }

  generarFormularioMedias(formMedias){
    this.formPasoMedias.get('sponsorDelantero').setValue(formMedias.sponsorDelantero ?? null);
    this.formPasoMedias.get('posicionSponsorDelantero').setValue(formMedias.posicionSponsorDelantero ?? null);
    this.formPasoMedias.get('posicionSponsorTrasero').setValue(formMedias.posicionSponsorTrasero ?? null);
    this.formPasoMedias.get('posicionSponsorManga').setValue(formMedias.posicionSponsorManga ?? null);
    this.crearFormPartesArray(formMedias.partesShortSVG);
  }

  crearFormPartesArray(formColor) {
    if (formColor) {
      for (let i = 0; i < formColor.length; i++) {
        let color = new FormGroup({
          idParte: new FormControl(formColor[i].idParte),
          nombreMostrar: new FormControl(formColor[i].nombreMostrar),
          colores: new FormControl(formColor[i].colores),
          color: new FormControl(formColor[i].color ? formColor[i].color : null)
        });
        this.formPartesArrayControl.push(color);
      }
    }
  }

  get agregarMedias(){
    return this.formPasoMedias.get('agregarMedias').value;
  }


  cambiarColor(color, parte) {
    this.selectedColor = color;
    let cambio = {
      color: color,
      parte: parte,
    }
    if (color && parte) {
      this.colorSeleccionado.emit(cambio);
    }
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
        this.formPasoMedias.controls['escudoShort'].setValue(reader.result);
      }
      this.archivoEscudo.emit(event.target.files[0]);
    }
    // this.formPasoCamiseta.controls['posicionEscudo'].setValidators([Validators.required]);
    // this.formPasoCamiseta.controls['posicionEscudo'].updateValueAndValidity();
  }

  siguiente() {
    this.submit = true;
    this.proximoPaso.emit(this.formPasoMedias.value);
  }

  anterior() {
    this.anteriorPaso.emit(this.formPasoMedias.value);
  }

}
