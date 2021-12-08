import { Injectable } from '@angular/core';
import { IUser } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Ritesh',
      lastName: 'Sharma'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateUserProfile(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
