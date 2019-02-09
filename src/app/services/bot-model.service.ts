import { environment } from './../../environments/environment';
import { Message } from './../chat-function/message';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotModelService {

  private botSubject:BehaviorSubject<Message[]>;
  private _headers=new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+environment.dialogflow,
  });
  constructor(private httpClient:HttpClient) {
    this.botSubject=new BehaviorSubject<Message[]>([]);
  }
  public getSubject():BehaviorSubject<Message[]>{
    return this.botSubject;
  }
  public fetchBotResponse(query:string){
    return this.httpClient.post<any>('https://api.dialogflow.com/v1/query?v=20150910',{query:query,lang:'en',sessionId:'12345'},{headers:this._headers});
  }
}
