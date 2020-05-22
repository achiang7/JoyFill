import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile/user-profile.page';
import { UserJoymapPage } from './user-joymap/user-joymap.page';
import { JoycardComponent } from './joycard/joycard.component';
import { PlannerComponent } from './planner/planner.component';
import { SharedModule } from '../shared/module/shared.module';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,

    SharedModule,
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
