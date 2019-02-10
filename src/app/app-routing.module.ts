import { ChatFunctionComponent } from './chat-function/chat-function.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthViewComponent } from './auth-view/auth-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ReportViewComponent } from './report-view/report-view.component';


const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'home', component: HomeViewComponent},
  // {path: 'auth', component: AuthViewComponent},
  {path: 'report-epidemic', component: ReportViewComponent},
  {path: 'chat-function', component: ChatFunctionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeViewComponent, ReportViewComponent, ChatFunctionComponent];
