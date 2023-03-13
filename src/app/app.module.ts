import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaylorHomeComponent } from './components/taylor/taylor-home/taylor-home.component';
import { TaylorDemandComponent } from './components/taylor/taylor-demand/taylor-demand.component';
import { TaylorSpaceComponent } from './components/taylor/taylor-space/taylor-space.component';
import { TaylorMessageComponent } from './components/taylor/taylor-message/taylor-message.component';
import { TaylorEditProfileComponent } from './components/taylor/taylor-edit-profile/taylor-edit-profile.component';
import { TaylorProfileComponent } from './components/taylor/taylor-profile/taylor-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TaylorAssistanceComponent } from './components/taylor/taylor-assistance/taylor-assistance.component';
import { CustomerAssistanceComponent } from './components/customer/customer-assistance/customer-assistance.component';
import { CustomerDemandComponent } from './components/customer/customer-demand/customer-demand.component';
import { CustomerEditProfileComponent } from './components/customer/customer-edit-profile/customer-edit-profile.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { CustomerMessageComponent } from './components/customer/customer-message/customer-message.component';
import { CustomerProfileComponent } from './components/customer/customer-profile/customer-profile.component';
import { CustomerSpaceComponent } from './components/customer/customer-space/customer-space.component';
import { CustomerFollowComponent } from './components/customer/customer-follow/customer-follow.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    TaylorHomeComponent,
    TaylorDemandComponent,
    TaylorSpaceComponent,
    TaylorMessageComponent,
    TaylorEditProfileComponent,
    TaylorProfileComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TaylorAssistanceComponent,
    CustomerAssistanceComponent,
    CustomerDemandComponent,
    CustomerEditProfileComponent,
    CustomerHomeComponent,
    CustomerMessageComponent,
    CustomerProfileComponent,
    CustomerSpaceComponent,
    CustomerFollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MultiSelectModule,
    ButtonModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
