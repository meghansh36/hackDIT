import { Message } from './../chat-function/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotModelService {

  private botSubject:BehaviorSubject<Message[]>;
  constructor(private httpClient:HttpClient) {
    this.botSubject=new BehaviorSubject<Message[]>([]);
  }
  public getSubject():BehaviorSubject<Message[]>{
    return this.botSubject;
  }
  public fetchBotResponse(query:string){
    
  }
}
