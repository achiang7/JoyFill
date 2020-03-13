import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Joys } from '../mock/joys';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

import { FirestoreService } from '../../firebase-services/firestore.service';

@Component({
  selector: 'app-joy-search-bar',
  templateUrl: './joy-search-bar.component.html',
  styleUrls: ['./joy-search-bar.component.scss'],
})
export class JoySearchBarComponent implements OnInit {

  currentJoys: any = [];
  selectedJoys: any = new Set();

  constructor(
    public navCtrl: NavController,
    private router: Router,
    public joys: Joys,
    private userService: UserService,
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
 
  }

  getItems(ev) {
    const val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentJoys = [];
      return;
    }
    this.currentJoys = this.joys.query({
      name: val
    });
  }

  selectJoy(joy) {
    console.log('Joy', joy);
    if (!this.selectedJoys.has(joy)) {
      this.selectedJoys.add(joy);
      // show mat snak bar

    } else {
      // show error snack bar
    }
    // this.currentJoys = [];
  }

  submitJoys() {
    this.userService.currentUser.joys = this.setToArray(this.selectedJoys);
    this.firestoreService.setUserProfile(this.userService.currentUser);
    this.router.navigate(['profile']);
  }

  setToArray(joys) {
    const joyArray: any[] = [];
    for (const joy of joys) {
      joyArray.push(joy);
    }
    return joyArray;
  }

}
