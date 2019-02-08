import { Subject, BehaviorSubject } from 'rxjs';
import { BotModelService } from './../../services/bot-model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-view',
  templateUrl: './msg-view.component.html',
  styleUrls: ['./msg-view.component.css']
})
export class MsgViewComponent implements OnInit {

  private messageSubject: BehaviorSubject<string[]>
  private messages: string[];
  constructor(private botService: BotModelService) {
    this.messageSubject = botService.getSubject();
  }

  ngOnInit() {
    this.messageSubject.subscribe(data => {
      console.log(data);
      console.log(this.messages);
      this.messages = data;
    })
  }

}
