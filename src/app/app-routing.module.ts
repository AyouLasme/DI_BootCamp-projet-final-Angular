import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { AccueilClientComponent } from './components/user/client/accueil-client/accueil-client.component';
import { ProfilCouturierComponent } from './components/user/profil-couturier/profil-couturier.component';
import { AccueilCouturierComponent } from './components/user/couturier/accueil-couturier/accueil-couturier.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: HomeComponent},
  { path: 'accueil', component: AccueilClientComponent },
  {path: 'accueilCouturier', component: AccueilCouturierComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
