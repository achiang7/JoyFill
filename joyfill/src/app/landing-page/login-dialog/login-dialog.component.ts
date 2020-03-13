import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { FirestoreService } from 'src/app/firebase-services/firestore.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  validation_messages = {
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Please enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ]
 };

  constructor(
    private authService: AuthenticationService,
    private firestoreService: FirestoreService,
    private formBuilder: FormBuilder,
    private router: Router,

    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      this.closeDialog();
      localStorage.setItem('uid', this.authService.getUid());
      this.firestoreService.populateLocalUser(localStorage.getItem('uid'));
      this.router.navigate(['/profile', { uid: localStorage.getItem('uid') }]);

      // this.router.navigate(['/home']);
    }, err => {
      this.errorMessage = err.message;
      console.log(err)
    })
  }

  // create registration page
  goRegisterPage() {
    this.router.navigate(['/register']);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
