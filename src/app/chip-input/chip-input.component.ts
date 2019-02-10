import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.css']
})
export class ChipInputComponent implements OnInit {

  @Input()
  list: Array<any>;

  @Input()
  options: Array<any>;

  @Input()
  placeholderText: string;

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.list.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(listItem: any): void {
    const index = this.list.indexOf(listItem);

    if (index >= 0) {
      this.list.splice(index, 1);
    }
  }

  addSelect(event) {
    const option = event.option;
    const value = option.value;
    if ((value || '').trim()) {
      this.list.push({ name: value.trim() });
    }
    console.log(this.list);
  }


  constructor() {
    this.options = ['Fever', 'Obesity', 'Hyper Tension'];
  }

  ngOnInit() {}

}
