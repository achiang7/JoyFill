import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToFriends() {
    this.router.navigate(['/home']);
  }

  logout() {
    console.log('doing logout');
    this.router.navigate(['/overview']);
  }

}
