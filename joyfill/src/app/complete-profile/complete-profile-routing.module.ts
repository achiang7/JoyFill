import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteProfilePage } from './complete-profile/complete-profile.page';
import { AuthGuard } from '../homepage/homepage-services/auth-guard.service';


const routes: Routes = [
  {
    path: 'complete-profile',
    canActivate: [AuthGuard],
    component: CompleteProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteProfilePageRoutingModule {}
