import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthModelService {

  user:Observable<firebase.User>;

  constructor(private firebaseAuth:AngularFireAuth) { 
    this.user=firebaseAuth.authState;
  }

  signInUser(email:string,password:string){
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(
        email,password
      );
  }

  signUpNewUser(email:string,password:string){
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(
        email,password
      );
  }
}
