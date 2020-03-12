import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, 
  NbCardModule, NbInputModule, NbAlertModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbSpinnerModule,
    NbIconModule,
    NbEvaIconsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
