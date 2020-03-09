import { Injectable } from '@angular/core';
import { User } from '../shared/user.class';

@Injectable()
export class UserService {

    public currentUser: User = new User();

    constructor() { }
}