import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Joys } from '../mock/joys';
import { Joy } from '../model/joy';

@Component({
  selector: 'app-joy-search-bar',
  templateUrl: './joy-search-bar.component.html',
  styleUrls: ['./joy-search-bar.component.scss'],
})
export class JoySearchBarComponent implements OnInit {


  currentJoys: any = [];

  constructor(public navCtrl: NavController, public joys: Joys) { }

  ngOnInit() {}

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentJoys = [];
      return;
    }
    this.currentJoys = this.joys.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openJoy(joy: Joy) {
    console.log('heh', joy);
    // this.navCtrl.push('ItemDetailPage', {
    //   item: joy
    // });
  }


}
