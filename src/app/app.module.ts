import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { LottieAnimationViewModule } from 'ng-lottie';
import { NavComponent } from './nav/nav.component';
import { AnimViewComponent } from './anim-view/anim-view.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { LoginViewComponent } from './auth-view/login-view/login-view.component';
import { RegisterViewComponent } from './auth-view/register-view/register-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnimViewComponent,
    AuthViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    LottieAnimationViewModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
