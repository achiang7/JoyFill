import { Component, OnInit } from '@angular/core';
import { Node, Link } from './d3';
import * as firebase from 'firebase/app';
import data from '../../../assets/json/data.json';
import notification from '../../../assets/json/notification.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nodes: Node[] = [];
  links: Link[] = [];
  
  constructor() {
    var networkNodes = data.nodes;
    //var networkLinks = data.links;
    
    /** constructing the nodes array */
    for (let i = 0; i <= networkNodes.length - 1; i++) {
      this.nodes.push(new Node(networkNodes[i]));
    }

    /** constructing the links array */
    this.links.push(new Link(this.nodes[0], this.nodes[1]));
    this.links.push(new Link(this.nodes[0], this.nodes[2]));
    this.links.push(new Link(this.nodes[0], this.nodes[3]));
    this.links.push(new Link(this.nodes[0], this.nodes[4]));
    this.links.push(new Link(this.nodes[0], this.nodes[5]));
    this.links.push(new Link(this.nodes[0], this.nodes[6]));
    this.links.push(new Link(this.nodes[6], this.nodes[7]));
    this.links.push(new Link(this.nodes[6], this.nodes[8]));
    this.links.push(new Link(this.nodes[6], this.nodes[9]));
  }

  ngOnInit() {
    console.log('Home module initialized');

    // const user = firebase.auth().currentUser;
    // console.log(user);
  }
}