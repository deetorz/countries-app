import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent {
  @Input() selectedCountry: any;
  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();

  private _inputValue!: string;
  get inputValue() {
    return this._inputValue;
  }

  set inputValue(value: string) {
    this._inputValue = value;
    this.searchInput.emit(this._inputValue);
  }
}
