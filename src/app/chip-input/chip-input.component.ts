import { Component, OnInit,Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.css']
})
export class ChipInputComponent implements OnInit {

  @Input()
  list: Array<any>

  @Input()
  placeholderText:string;

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

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


  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
