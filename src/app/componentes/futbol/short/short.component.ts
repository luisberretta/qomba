import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges} from '@angular/core';
import {} from "events";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
  formPasoShort: FormGroup = new FormGroup({
    llevaShort: new FormControl(''),
    color: new FormControl(''),
    llevaEscudoShort: new FormControl(''),
  });
  submit: boolean = false;
  activo: boolean = false;
  @Input() formShort;
  @Output() llevaShort = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  get pasoCamisetaForm() {
    return this.formPasoShort.controls;
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if(changeRecord.formShort && changeRecord.formShort.currentValue) {
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

  activarCampos() {
    this.activo = !this.activo;
    this.llevaShort.emit(this.formPasoShort.controls['llevaShort'].value);
  }

  generarFormulario(formShort) {
    this.activo = formShort.llevaShort;
    this.formPasoShort.get('llevaShort').setValue(formShort.llevaShort ?? null);
    this.formPasoShort.get('llevaEscudoShort').setValue(formShort.llevaEscudoShort ?? null);
  }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

}
