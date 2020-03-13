import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.class';

@Injectable()
export class FirestoreService {

    userDoc: AngularFirestoreDocument<User>;
    user: Observable<User>;

    constructor(
        private db: AngularFirestore, 
        private userService: UserService,
    ) { }

    setUserProfile(user){
        console.log('Firstore service activated: CurrentUser', user);
        const newUserRef = this.db.collection('users').doc(user.uid);
        newUserRef.set({
            firstName: user.firstName,
            lastName: user.lastName,
            joys: user.joys,
        }).then(() => {
            console.log('Document successfully written!');
        });
    }

    populateLocalUser(uid) {
        this.userDoc = this.db.collection('users').doc(uid);
        this.user = this.userDoc.valueChanges();

        this.user.subscribe(data => {
            const keys = Object.keys(data);
            for (const key of keys) {
                this.userService.currentUser[key] = data[key];
            }
        });
    }

    makeUserCopy(uid): User {
        const userCopy = new User();
        this.userDoc = this.db.collection('users').doc(uid);
        this.user = this.userDoc.valueChanges();

        this.user.subscribe(data => {
            const keys = Object.keys(data);
            for (const key of keys) {
                userCopy[key] = data[key];
            }
            console.log(this.userService.currentUser);
        });

        return userCopy;
    }

}