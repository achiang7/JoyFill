import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfilePage } from './user-profile/user-profile.page';
import { UserJoymapPage } from './user-joymap/user-joymap.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        children: [
          { path: 'joymap', component: UserJoymapPage },
          { path: '', component: UserProfilePage }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfilePageRoutingModule {}
