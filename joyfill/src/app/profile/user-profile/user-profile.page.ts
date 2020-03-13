import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FirestoreService } from 'src/app/firebase-services/firestore.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  ownsProfile: boolean;
  profileUser;

  constructor(
    private userService: UserService,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.userService.currentUser.firstName === undefined) {
      this.firestoreService.populateLocalUser(localStorage.getItem('uid'));
    }

    // if current logged in user is same as current profile use, display planner
    // else:
    // 1. display their first joy -- joycard component
    // 2. hide right panel, show panel when a category is selected
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.ownsProfile = params.get('uid') === null;
        if (this.ownsProfile){
          this.profileUser = this.userService.currentUser;
        } else {
          this.profileUser = this.firestoreService.makeUserCopy(params.get('uid'));
        }
        console.log(this.profileUser);
      }
    )
  }

}
