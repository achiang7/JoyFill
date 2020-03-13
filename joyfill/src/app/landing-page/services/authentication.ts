import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) {}

  isAuthenticated() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
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

  getUid() {
    return firebase.auth().currentUser.uid;
  }

  getUser() {
    console.log(firebase.auth().currentUser);
    return firebase.auth().currentUser;
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
