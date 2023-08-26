import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
  @Input() inputLabel: string = '';
  @Input() placeHolder: string = '';
  @Input() inputValues: string[] = [];
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();

  selectedValue: string = '';

  onValueSelect(value: string) {
    this.selectedValue = value;
    this.onSelect.emit(value);
  }
}