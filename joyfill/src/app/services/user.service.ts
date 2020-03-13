import { Injectable } from '@angular/core';
import { User } from '../shared/user.class';
// import { FirestoreService } from '../firebase-services/firestore.service';
import { AuthenticationService } from '../landing-page/services/authentication';

@Injectable()
export class UserService {

    public currentUser: User = new User();

    constructor(
        // private firestoreService: FirestoreService,
        private authService: AuthenticationService

    ) { }

    getUser(uid) {
        console.log(uid);
    }

}