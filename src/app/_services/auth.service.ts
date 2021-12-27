import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { IUser } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string){
    let loginInfo = {username: userName, password: password};

    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/login', loginInfo, options)
        .pipe(tap(data => {
          this.currentUser = <IUser>data['user'];
        }))
        .pipe(catchError(error => {
          return of(false);
        }));
    
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'Ritesh',
    //   lastName: 'Sharma'
    // };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateUserProfile(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
