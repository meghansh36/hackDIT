import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material';
import { COMMA } from '@angular/cdk/keycodes';
import { FormControl, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.css']
})
export class ChipInputComponent implements OnInit {

  @ViewChild('chipInput', { read: MatAutocompleteTrigger })
  private autoCompleteTrigger: MatAutocompleteTrigger;

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
  myControl: FormControl;
  filteredOptions: Array<any>;

  remove(listItem: any): void {
    const index = this.list.indexOf(listItem);

    if (index >= 0) {
      this.list.splice(index, 1);
      this.options.push(listItem);
      this.options.sort();
    }
  }

  inputFocus() {
    setTimeout(() => {
      if (!this.autoCompleteTrigger.panelOpen) {
        this.autoCompleteTrigger.openPanel();
      }
    }, 5);
  }

  addSelect(event: MatAutocompleteSelectedEvent, input: any) {
    const selection = event.option.value;
    this.list.push(selection);
    this.options = this.options.filter(obj => obj !== selection);
    this.filteredOptions = this.options;
    // Reset the autocomplete input text value
    if (input) {
      input.value = '';
    }
  }


  constructor() {
    // tslint:disable-next-line:max-line-length
    this.options = ['Abdominal Pain', 'Acidity', 'Anxiety', 'Back Pain', 'Belly Pain', 'Blackheads', 'Blisters', 'Blood in Sputum', 'Blurred Vision', 'Breathlessness', 'Brittle Nails', 'Bruising', 'Chest Pain', 'Chills', 'Cold Hand And Feet', 'Congestion', 'Constipation', 'Continuous Feel of Urine', 'Cough', 'Cramps', 'Dark Urine', 'Dehydration', 'Depression', 'Diarrhoea', 'Dizziness', 'Dried Lips', 'Excessive Hunger', 'Fast Heart Rate', 'Fatigue', 'Fever', 'Foul Smell of Urine', 'Headache', 'Hip Joint Pain', 'Increased Appetite', 'Indigestion', 'Internal Itching', 'Irregular Sugar Level', 'Irritability', 'Itching', 'Joint Pain', 'Knee Pain', 'Lack of Concentration', 'Lethargy', 'Loss of Appetite', 'Loss of Balance', 'Loss of Smell', 'Mood Swings', 'Movement Stiffness', 'Muscle Pain', 'Muscle Weakness', 'Nausea', 'Neck Pain', 'Obesity', 'Pain During Bowel Movements', 'Pain behind the eyes', 'Painful Walking', 'Phlegm', 'Pimples', 'Puffy Face and Eyes', 'Rashes', 'Red Sores Around Nose', 'Red Spots Over Body', 'Redness of Eyes', 'Restlessness', 'Runny Nose', 'Shivering', 'Skin Eruptions', 'Skin peeling', 'Slurred Speech', 'Small Dents in Nails', 'Sneezing', 'Stiff Neck', 'Stomach Pain', 'Sunken Eyes', 'Sweating', 'Swelling Joints', 'Swelling of Stomach', 'Swollen Blood Vessels', 'Swollen Legs', 'Throat Irritation', 'Unsteadiness', 'Vomiting', 'Watering From Eyes', 'Weakness in Limbs', 'Weight Gain', 'Weight Loss', 'Yellowing of Eyes', 'Yellowish Skin'];
    this.myControl = new FormControl();
  }

  ngOnInit() {
    this.filteredOptions = this.options;
    this.myControl.valueChanges.subscribe(val => {
      this._filter(val);
    });
  }

  private _filter(value: string) {
    console.log(value);
    this.filteredOptions = this.options
      .filter(obj => obj.toLowerCase().indexOf(value.toString().toLowerCase()) === 0);
  }

}
