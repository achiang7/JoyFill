import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteProfilePageRoutingModule } from './complete-profile-routing.module';

import { CompleteProfilePage } from './complete-profile/complete-profile.page';
import { BasicUserInfoDialogComponent } from './basic-user-info-dialog/basic-user-info-dialog.component';
import { SelectingJoysOptionsDialogComponent } from './selecting-joys-options-dialog/selecting-joys-options-dialog.component';
import { JoySearchBarComponent } from './joy-search-bar/joy-search-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompleteProfilePageRoutingModule,
  ],
  entryComponents: [
    // BasicUserInfoDialogComponent,
    // SelectingJoysOptionsDialogComponent
  ],
  declarations: [
    CompleteProfilePage,
    // BasicUserInfoDialogComponent,
    // SelectingJoysOptionsDialogComponent,
    JoySearchBarComponent
  ]
})
export class CompleteProfilePageModule {}
