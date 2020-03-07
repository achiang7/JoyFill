import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/landing-page/services/authentication';
import { SelectingJoysOptionsDialogComponent } from '../selecting-joys-options-dialog/selecting-joys-options-dialog.component';

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
  ) { }

  ngOnInit() {
    this.userInfoForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });

  }

  onNext(value) {
    this.authService.updateUserProfile({
      displayName: value.firstName + ' ' + value.lastName
    });

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
