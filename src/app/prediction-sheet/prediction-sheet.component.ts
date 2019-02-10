import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-prediction-sheet',
  templateUrl: './prediction-sheet.component.html',
  styleUrls: ['./prediction-sheet.component.css']
})
export class PredictionSheetComponent implements OnInit {

  constructor(private bottomSheet:MatBottomSheetRef<PredictionSheetComponent>) { }

  displayMsg:string='Fetching Prediction';
  ngOnInit() {
  }

}
