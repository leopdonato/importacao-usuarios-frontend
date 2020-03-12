import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', children: [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomePageComponent},
    {path: 'feedback', component: FeedbackComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
