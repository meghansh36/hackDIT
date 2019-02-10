import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-prediction-sheet',
  templateUrl: './prediction-sheet.component.html',
  styleUrls: ['./prediction-sheet.component.css']
})
export class PredictionSheetComponent implements OnInit {

  constructor(private dialog: MatDialogRef<PredictionSheetComponent>) { }

  displayMsg = 'Fetching Prediction';
  ngOnInit() {
  }

}
