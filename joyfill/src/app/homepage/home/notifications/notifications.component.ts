import { Component, OnInit } from '@angular/core';
/*import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';*/
import notification from '../../../../assets/json/notification.json';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  public items: any;
  constructor() {
    this.items = notification;
  }

  ngOnInit() {}

  /*public items: any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.getData();
  }

  ngOnInit() {}

  getData() {
    let url = '';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items= result;
    })
  }*/

}
