import { Component, Inject,  OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-overview-landing-page',
  templateUrl: './overview-landing-page.component.html',
  styleUrls: ['./overview-landing-page.component.scss'],
})
export class OverviewLandingPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    // if user is logged in they shouldn't be able to access the landing page (?)
    // if (this.userLoggedIn) {
    //   this.router.navigate(['/home']);
    // }
  }

  async userLoggedIn(){
    return await this.authService.isAuthenticated();
  }

  openLogin(): void {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.closeOnNavigation = true; THIS DIDNT WORK FOR SOME REASON
    dialogConfig.height = '90%';
    dialogConfig.width = '40%';

    const loginRef = this.dialog.open(LoginDialogComponent, dialogConfig);
  }

  openSignUp() {
    const signUpRef = this.dialog.open(SignUpDialogComponent, {
      width: '40%',
      height: '90%',
    });
  }

}
