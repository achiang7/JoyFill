import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../landing-page/services/authentication';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
})
export class CompletePage implements OnInit {

  userInfoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.userInfoForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }

  onNext(value) {
    // update firbase Auth user properties
    this.authService.updateUserProfile({
      displayName: value.firstName + ' ' + value.lastName
    });

    // update currentUser property
    this.userService.currentUser.firstName = value.firstName;
    this.userService.currentUser.lastName = value.lastName;
    this.userService.currentUser.uid = this.authService.getUid();
    localStorage.setItem('uid', this.userService.currentUser.uid);
    this.navCtrl.navigateForward('/select');
  }

}
