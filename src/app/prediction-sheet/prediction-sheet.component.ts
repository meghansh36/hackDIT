import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { database } from 'firebase';

@Component({
  selector: 'app-prediction-sheet',
  templateUrl: './prediction-sheet.component.html',
  styleUrls: ['./prediction-sheet.component.css']
})
export class PredictionSheetComponent implements OnInit {

  constructor(private dialog: MatDialogRef<PredictionSheetComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) { }

  displayMsg = this.data.displayMsg;
  showAnim = this.data.showAnim;
  ngOnInit() {
  }

}
