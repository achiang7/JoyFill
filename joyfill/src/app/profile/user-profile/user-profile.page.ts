import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { FirestoreService } from 'src/app/firebase-services/firestore.service';
import { User } from 'src/app/shared/user.class';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  ownsProfile: boolean;
  userProfile: User;

  constructor(
    private userService: UserService,
    private firestoreService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.ownsProfile = params.get('uid') === null;
        if (this.ownsProfile) {
          this.userProfile = this.userService.currentUser;
          console.log(this.userProfile);
        } else {
          this.userProfile = this.firestoreService.makeUserCopy(params.get('uid'));
        }
      }
    );
  }

}
