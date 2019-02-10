import { Component, OnInit} from '@angular/core';
import {  MatDialog } from '@angular/material';
import { PredictionSheetComponent } from '../prediction-sheet/prediction-sheet.component';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  symptoms: Array<any>;

  constructor(private dialog: MatDialog, private server: ServerService) {
    this.symptoms = new Array();
  }

  ngOnInit() {
  }

  predictDisease() {

    if (this.symptoms.length === 0) {
      alert('Please enter symptoms');
    } else {
      this.dialog.open(PredictionSheetComponent, {
        height: '300px',
        width: '300px'
      });
      this.server.getDiseasePrediction(this.symptoms).subscribe((prediction) => {
        console.log(prediction);
      });
    }
  }

}
