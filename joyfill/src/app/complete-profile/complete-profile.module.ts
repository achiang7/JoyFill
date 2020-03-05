import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteProfilePageRoutingModule } from './complete-profile-routing.module';

import { CompleteProfilePage } from './complete-profile/complete-profile.page';
import { BasicUserInfoDialogComponent } from './basic-user-info-dialog/basic-user-info-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompleteProfilePageRoutingModule
  ],
  entryComponents: [
    BasicUserInfoDialogComponent
  ],
  declarations: [
    CompleteProfilePage,
    BasicUserInfoDialogComponent
  ]
})
export class CompleteProfilePageModule {}
