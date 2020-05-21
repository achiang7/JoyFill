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
import { TopmenuComponent } from 'src/app/shared/components/topmenu/topmenu.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
//import { SharedModule } from '../../shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    GraphComponent,
    //TopmenuComponent,
    NotificationsComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  providers: [D3Service],
})
export class HomePageModule {}
