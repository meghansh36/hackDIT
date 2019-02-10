import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  disease: any;
  constructor(private http: HttpClient) { }

  getDiseasePrediction(symptoms) {
   return this.http.post('http://localhost:8080/prediction', symptoms);
  }
}
