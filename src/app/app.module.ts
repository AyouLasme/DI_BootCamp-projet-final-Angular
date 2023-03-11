import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AccueilClientComponent } from './components/user/client/accueil-client/accueil-client.component';
import { AccueilCouturierComponent } from './components/user/couturier/accueil-couturier/accueil-couturier.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicationComponent } from './components/user/client/publication/publication.component';
import { NotificationComponent } from './components/user/couturier/notification/notification.component';
import { DataTablesModule } from 'angular-datatables';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccueilClientComponent,
    AccueilCouturierComponent,
    PublicationComponent,
    NotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
