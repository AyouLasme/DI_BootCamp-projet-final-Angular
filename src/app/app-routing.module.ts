import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/user/home/home.component';
import { AccueilClientComponent } from './components/user/client/accueil-client/accueil-client.component';
import { ProfilClientComponent } from './components/user/profil-client/profil-client.component';
import { ProfilCouturierComponent } from './components/user/profil-couturier/profil-couturier.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accueil', component: AccueilClientComponent },
  {path: 'profilclient', component: ProfilClientComponent },
  {path: 'profilcouturier', component: ProfilCouturierComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
