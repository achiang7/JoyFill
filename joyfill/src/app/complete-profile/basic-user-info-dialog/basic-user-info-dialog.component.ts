import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/landing-page/services/authentication';
import { SelectingJoysOptionsDialogComponent } from '../selecting-joys-options-dialog/selecting-joys-options-dialog.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-basic-user-info-dialog',
  templateUrl: './basic-user-info-dialog.component.html',
  styleUrls: ['./basic-user-info-dialog.component.scss'],
})
export class BasicUserInfoDialogComponent implements OnInit {

  userInfoForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<BasicUserInfoDialogComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
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

    // open new dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '80%';
    dialogConfig.width = '35%';
    dialogConfig.disableClose = true;
    this.dialog.open(SelectingJoysOptionsDialogComponent, dialogConfig);

    // close current dialog
    this.closeDialog();
    console.log('Navigating from basic user info dialog to the next dialog.');
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
