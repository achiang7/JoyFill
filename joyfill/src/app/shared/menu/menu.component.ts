import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/home',
      image: '../../../assets/icon/home.png'
    },
    {
      title: 'Profile',
      url: '/profile',
      image: '../../../assets/icon/user.png'
    },
    {
      title: 'Settings',
      url: '/settings',
      image: '../../../assets/icon/settings.png'
    },
    {
      title: 'Log Out',
      url: '/overview',
      image: '../../../assets/icon/logout.png'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {}
}