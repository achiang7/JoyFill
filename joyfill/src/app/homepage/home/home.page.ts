import { Component, OnInit } from '@angular/core';
import { Node, Link } from './d3';
import * as firebase from 'firebase/app';
import data from '../../../assets/json/data.json';
import { UserService } from 'src/app/services/user.service';
import { FirestoreService } from 'src/app/firebase-services/firestore.service';
import { AuthenticationService } from 'src/app/landing-page/services/authentication';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor(
    public userService: UserService,
    private firestoreService: FirestoreService,
    private authService: AuthenticationService,
  ) {
    let networkNodes = data.nodes;

    /** constructing the nodes array */
    for (let i = 0; i <= networkNodes.length - 1; i++) {
      this.nodes.push(new Node(networkNodes[i]));
    }

    /** constructing the links array */
    this.links.push(new Link(this.nodes[0], this.nodes[1]));
    this.links.push(new Link(this.nodes[0], this.nodes[2]));
    this.links.push(new Link(this.nodes[0], this.nodes[3]));
    this.links.push(new Link(this.nodes[0], this.nodes[4]));
    this.links.push(new Link(this.nodes[4], this.nodes[5]));
    this.links.push(new Link(this.nodes[4], this.nodes[6]));
    this.links.push(new Link(this.nodes[4], this.nodes[7]));
  }

  ngOnInit() {
    if (this.userService.currentUser.firstName === undefined) {
      console.log('consoling from home', this.userService.currentUser);
      let uid = localStorage.getItem('uid');
      if (uid === null){
        console.log('UID is not stored in localstorage -- this should not be happening');
        uid = this.authService.getUid();
        localStorage.setItem('uid', uid);
      }
      // this.firestoreService.populateLocalUser(uid);
    }

    // const user = firebase.auth().currentUser;
    // console.log(user);
  }
}