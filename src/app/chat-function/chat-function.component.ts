import {BehaviorSubject } from 'rxjs';
import { BotModelService } from './../services/bot-model.service';
import { Component, OnInit } from '@angular/core';
import {Message} from './message'

@Component({
  selector: 'app-chat-function',
  templateUrl: './chat-function.component.html',
  styleUrls: ['./chat-function.component.css']
})
export class ChatFunctionComponent implements OnInit {

  private messageSubject: BehaviorSubject<Message[]>;
  showLoading: boolean = false;
  constructor(private botService: BotModelService) { }

  ngOnInit() {
    this.messageSubject = this.botService.getSubject();
  }

  sendQuery(query: string) {
    this.showLoading=true;
    const previousMessages = this.messageSubject.getValue();
    const newMessages = [...previousMessages, ...[new Message(query,Message.SENDER_TYPE_USER)]];
    this.messageSubject.next(newMessages);
  }


}
