import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit, OnChanges {


  formPasoColor: FormGroup = new FormGroup({
    partesColor: new FormArray([]),
    colores: new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.formColor && changeRecord.formColor.currentValue) {
      this.formPartesColorControl.setValue(changeRecord.formColor.currentValue.gruposColor);
      this.formColoresControl.setValue(changeRecord.formColor.currentValue.colores);
    }
  }

  get formPartesColorControl() {
    return this.formPasoColor.get('partesColor') as FormArray;
  }
  get formColoresControl() {
    return this.formPasoColor.get('colores') as FormArray;
  }


}
