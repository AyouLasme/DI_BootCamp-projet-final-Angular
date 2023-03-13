import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaylorSpaceComponent } from './components/taylor/taylor-space/taylor-space.component';
import { TaylorProfileComponent } from './components/taylor/taylor-profile/taylor-profile.component';
import { TaylorMessageComponent } from './components/taylor/taylor-message/taylor-message.component';
import { TaylorEditProfileComponent } from './components/taylor/taylor-edit-profile/taylor-edit-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaylorDemandComponent } from './components/taylor/taylor-demand/taylor-demand.component';
import { HomeComponent } from './components/home/home.component';
import { TaylorHomeComponent } from './components/taylor/taylor-home/taylor-home.component';
import { TaylorAssistanceComponent } from './components/taylor/taylor-assistance/taylor-assistance.component';
import { CustomerSpaceComponent } from './components/customer/customer-space/customer-space.component';
import { CustomerProfileComponent } from './components/customer/customer-profile/customer-profile.component';
import { CustomerMessageComponent } from './components/customer/customer-message/customer-message.component';
import { CustomerEditProfileComponent } from './components/customer/customer-edit-profile/customer-edit-profile.component';
import { CustomerAssistanceComponent } from './components/customer/customer-assistance/customer-assistance.component';
import { CustomerDemandComponent } from './components/customer/customer-demand/customer-demand.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { CustomerFollowComponent } from './components/customer/customer-follow/customer-follow.component';
import { CustomerHistoriqueDmdComponent } from './components/customer/customer-historique-dmd/customer-historique-dmd.component';

const routes: Routes = [
  {
    path: 'taylor-space/:id', component: TaylorSpaceComponent,
    children: [
      { path: 'profile', component: TaylorProfileComponent },
      { path: 'messages', component: TaylorMessageComponent },
      { path: 'edit-profile', component: TaylorEditProfileComponent },
      {path: 'assistance', component: TaylorAssistanceComponent},
      { path: 'commands', component: TaylorDemandComponent },
      { path: '', component: TaylorHomeComponent },
    ]
  },

  {
    path: 'customer-space/:id', component: CustomerSpaceComponent,
    children: [
      {path: 'profile-customer', component: CustomerProfileComponent},
      {path: 'messages-customer', component: CustomerMessageComponent},
      {path: 'edit-profile-customer', component: CustomerEditProfileComponent},
      {path: 'assistance-customer', component: CustomerAssistanceComponent},
      {path: 'demands-customer', component: CustomerDemandComponent},
      {path: 'historique-customer', component: CustomerHistoriqueDmdComponent},
      {path: 'follow-customer', component: CustomerFollowComponent},
      {path: '', component: CustomerHomeComponent}
    ]
  },

  {path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
