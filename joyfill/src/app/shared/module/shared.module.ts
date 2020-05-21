import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TopmenuComponent } from '../components/topmenu/topmenu.component';

@NgModule({
 imports:      [ CommonModule, IonicModule ],
 declarations: [ TopmenuComponent ],
 exports:      [ TopmenuComponent, CommonModule, FormsModule ]
})
export class SharedModule { }