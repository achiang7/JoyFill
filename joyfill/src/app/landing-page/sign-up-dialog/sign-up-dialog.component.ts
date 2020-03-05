import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication';
import { Router } from '@angular/router';

import { MustMatch } from './must-match.validator';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
// tslint:disable-next-line: max-line-length
import { PostSignupRedirectDialogComponent } from 'src/app/complete-profile/post-signup-redirect-dialog/post-signup-redirect-dialog.component';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss'],
})
export class SignUpDialogComponent implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ], 
   'confirmPassword': [
   ]
  };

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<SignUpDialogComponent>,
    private router: Router
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
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.validations_form.controls; }

  tryRegister(value) {
    this.authService.doRegister(value)
     .then(res => {
       console.log(res);
       this.errorMessage = '';
       this.successMessage = 'Your account has been successfully created.';
       this.authService.updateUserProfile({email: value.email});

       // user is authenticated (aka they're considered as logged in)
       // this.authService.setAuthenticated(true);

       // open popup to redirect to complete profile page
       const dialogConfig = new MatDialogConfig();
       dialogConfig.height = '90%';
       dialogConfig.width = '40%';
       const redirectRef = this.dialog.open(PostSignupRedirectDialogComponent, dialogConfig);

       // close signup dialog
       this.dialogRef.close();

     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = '';
     })
  }

  goLoginPage() {
    this.router.navigate(['/login']);
  }

}
