import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // userAuthenticated = false;

  constructor(public afAuth: AngularFireAuth) {}

  // setAuthenticated(value: boolean){
  //   this.userAuthenticated = value;
  // }

  isAuthenticated() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log('User:', user);
        resolve(user);
      });
    });
  }

  updateUserProfile(value) {
    firebase.auth().currentUser.updateProfile(value).then(() => {
      console.log('User profile successfully updated');
    }).catch((error) => {
      // an error occurred
    });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            // this.userAuthenticated = true;
            resolve(res);
          },
          err => reject(err)
        );
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
}
