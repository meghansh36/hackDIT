import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotModelService {

  private botSubject:BehaviorSubject<string[]>;
  constructor(private httpClient:HttpClient) {
    this.botSubject=new BehaviorSubject<string[]>([]);
  }
  public getSubject():BehaviorSubject<string[]>{
    return this.botSubject;
  }
  public fetchBotResponse(query:string){
    
  }
}
