import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  symptoms:Array<any>;

  constructor() { 
    this.symptoms=new Array();
  }

  ngOnInit() {
  }

}