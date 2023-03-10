import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfilClientComponent } from './components/user/profil-client/profil-client.component';
import { ProfilCouturierComponent } from './components/user/profil-couturier/profil-couturier.component';
import { AccueilClientComponent } from './components/user/client/accueil-client/accueil-client.component';
import { AccueilCouturierComponent } from './components/user/couturier/accueil-couturier/accueil-couturier.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicationComponent } from './components/user/client/publication/publication.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfilClientComponent,
    ProfilCouturierComponent,
    AccueilClientComponent,
    AccueilCouturierComponent,
    PublicationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
