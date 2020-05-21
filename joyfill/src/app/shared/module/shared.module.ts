import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from '../topmenu/topmenu.component';

import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [
        TopmenuComponent, 
        IonicModule
    ],
    imports: [
        CommonModule,
    ],
    exports: [],
    providers: [],
})
export class SharedModule { }