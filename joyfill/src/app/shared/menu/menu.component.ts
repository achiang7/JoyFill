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
      url: './menu/first',
      image: '../../../assets/icon/home.png'
    },
    {
      title: 'Profile',
      url: '.menu/second',
      image: '../../../assets/icon/user.png'
    },
    {
      title: 'Settings',
      url: '.menu/third',
      image: '../../../assets/icon/settings.png'
    },
    {
      title: 'Search',
      url: '.menu/fourth',
      image: '../../../assets/icon/research.png'
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