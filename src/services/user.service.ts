import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {USERS} from '../json/users.json';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(email: string, pass: number): Observable<User> {
    for (const user of USERS) {
      // tslint:disable-next-line:triple-equals
      if (user.email === email && user.institutionalId == pass) {
        return of(user);
      }
    }
  }

  isExist(email: string, pass: number): boolean{
    for (const user of USERS) {
      // tslint:disable-next-line:triple-equals
      if (user.email === email && user.institutionalId == pass) {
        return true;
      }
    }
    return false;
  }
}
