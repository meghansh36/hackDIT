import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule,MatFormFieldModule,
  MatInputModule,MatRadioModule,MatStepperModule,MatChipsModule,MatProgressSpinnerModule,MatCardModule, MatProgressBarModule } from '@angular/material';
import { LottieAnimationViewModule } from 'ng-lottie';
import { NavComponent } from './nav/nav.component';
import { AnimViewComponent } from './anim-view/anim-view.component';
import { LoginViewComponent } from './auth-view/login-view/login-view.component';
import { RegisterViewComponent } from './auth-view/register-view/register-view.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChipInputComponent } from './chip-input/chip-input.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MsgViewComponent } from './chat-function/msg-view/msg-view.component';
import {HttpClientModule} from '@angular/common/http';
import { MapViewComponent } from './map-view/map-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnimViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    ChipInputComponent,
    MsgViewComponent,
    routingComponents,
    MapViewComponent
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
    MatRadioModule,
    MatStepperModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    LottieAnimationViewModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
