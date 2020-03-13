import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile/user-profile.page';
import { UserJoymapPage } from './user-joymap/user-joymap.page';
import { JoycardComponent } from './joycard/joycard.component';
import { PlannerComponent } from './planner/planner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule
  ],
  declarations: [
    UserProfilePage,
    UserJoymapPage,
    JoycardComponent,
    PlannerComponent
  ]
})
export class UserProfilePageModule {}
