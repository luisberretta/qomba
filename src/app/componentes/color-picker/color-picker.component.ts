import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

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
export class ColorPickerComponent implements OnInit, ControlValueAccessor {
  colors = ["#7489ff", "#43d65d", "#d65943", "#d643a7"];
  selectedColor = "";

  private _onChange: any;
  private _onTouch: any;
  private _isDisabled: boolean;

  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  constructor() {}

  ngOnInit() {}

  colorClicked(color: string) {
    this.selectedColor = color;
    this._onChange(this.selectedColor);
    this._onTouch(true);
  }

  writeValue(obj: any): void {
    this.selectedColor = obj;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
