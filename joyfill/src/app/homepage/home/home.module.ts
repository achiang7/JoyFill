import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { D3Service, D3_DIRECTIVES } from './d3';

import { HomePage } from './home.page';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    GraphComponent,
    NotificationsComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  providers: [D3Service],
})
export class HomePageModule {}
