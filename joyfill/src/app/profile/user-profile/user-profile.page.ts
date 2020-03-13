import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { FirestoreService } from 'src/app/firebase-services/firestore.service';
import { User } from 'src/app/shared/user.class';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  ownsProfile: boolean;
  profileUser: User;

  welcomeHeadline: string;
  introMsg: string;

  displayedJoy;

  showingJoy = false;

  constructor(
    private userService: UserService,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.ownsProfile = params.get('uid') === null;
        if (this.ownsProfile) {
          this.profileUser = this.userService.currentUser;
        } else {
          this.profileUser = this.firestoreService.makeUserCopy(params.get('uid'));
        }

        if (this.ownsProfile) {
          this.welcomeHeadline = 'Hi ' + this.profileUser.firstName;
          this.introMsg = 'Welcome back to your Joyspace!';
        } else {
          this.welcomeHeadline = 'Welcome to ' + this.profileUser.firstName + "/'s Joyspace!";
          this.introMsg = '';
        }

        this.displayedJoy = this.profileUser.joys[0];
      }
    );
  }

}
