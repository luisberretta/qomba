import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
})
export class ColorPickerComponent implements OnInit, OnChanges {
  @Input() formColor: FormGroup;
  @Input() index: number;
  @Input() colorSeleccionado: any;
  @Input() heading: string;
  @Input() color: string;
  @Output() cambiarColor: EventEmitter<string> = new EventEmitter<string>();
  @Input() colores: any;
  public show = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Change color from default colors
   * @param {string} color
   */
  public changeColor(color: string): void {
    this.color = color;
    this.cambiarColor.emit(this.color);
    this.show = false;
  }

  ngOnChanges(changeRecord: SimpleChanges): void {
    if (changeRecord.colorSeleccionado && changeRecord.colorSeleccionado.currentValue) {
      this.color = changeRecord.colorSeleccionado.currentValue;
    }
  }

  public toggleColors(): void {
    this.show = !this.show;
  }


}
