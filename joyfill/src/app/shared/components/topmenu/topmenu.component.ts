import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/landing-page/services/authentication';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToFriends() {

  }

  logout() {
    this.authenticationService.doLogout();
    this.router.navigate(['/overview']);
  }

}
