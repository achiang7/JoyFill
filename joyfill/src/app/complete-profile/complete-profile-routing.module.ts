import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteProfilePage } from './complete-profile/complete-profile.page';
import { AuthGuard } from '../homepage/homepage-services/auth-guard.service';
import { JoySearchBarComponent } from './joy-search-bar/joy-search-bar.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'joy-search-bar', component: JoySearchBarComponent },
          { path: '', component: CompleteProfilePage }
        ]
      }
    ]
  },
  // {
  //   path: 'joy-search-bar', 
  //   component: JoySearchBarComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteProfilePageRoutingModule {}
