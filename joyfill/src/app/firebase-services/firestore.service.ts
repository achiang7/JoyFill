import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirestoreService {

    constructor(
        private db: AngularFirestore
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
        })
    }

}