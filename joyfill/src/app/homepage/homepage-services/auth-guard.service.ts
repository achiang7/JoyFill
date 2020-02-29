import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../../landing-page/services/authentication'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    base_url: string;

    constructor(private router: Router, private authService: AuthenticationService) {}

    canActivate() {
        // Check to see if a user has a valid token
        if (this.authService.isAuthenticated()) {
            // If they do, return true and allow the user to load app
            return true;
        }

        // If not, they redirect them to the login page
        // HAVE A SEPARATE LOGIN PAGE FOR JOYFILL
        console.log('Please log in');
        this.router.navigate(['/overview']);
        return false;
    }


}