import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { UserService } from 'src/app/services/user.service';
import { FirestoreService } from 'src/app/firebase-services/firestore.service';
import { AuthenticationService } from 'src/app/landing-page/services/authentication';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private userService: UserService,
    private firestoreService: FirestoreService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
    if (this.userService.currentUser.firstName === undefined) {
      let uid = localStorage.getItem('uid');
      if (uid !== null){
        console.log('UID is not stored in localstorage -- this should not be happening');
        uid = this.authService.getUid();
      }
      this.firestoreService.populateLocalUser(uid);
    }

    // const user = firebase.auth().currentUser;
    // console.log(user);
  }

}
