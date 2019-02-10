import { Component, OnInit} from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { PredictionSheetComponent } from '../prediction-sheet/prediction-sheet.component';


@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  symptoms:Array<any>;

  constructor(private bottomSheet:MatBottomSheet) { 
    this.symptoms=new Array();
  }

  ngOnInit() {
  }

  predictDisease(){
    this.bottomSheet.open(PredictionSheetComponent);
  }

}
