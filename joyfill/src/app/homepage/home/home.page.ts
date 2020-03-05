import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Home module initialized');

    let user = firebase.auth().currentUser;
    console.log(user);
  }

}
