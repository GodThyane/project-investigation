import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Subject} from 'rxjs';
import {Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  user: User;
  item: Item;
  private sendUserSubject = new Subject<User>();
  sendUserObservable = this.sendUserSubject.asObservable();

  private sendItemSubject = new Subject<Item>();
  sendItemObservable = this.sendItemSubject.asObservable();

  // tslint:disable-next-line:typedef
  sendUser(user: User){
    this.user = user;
    this.sendUserSubject.next(user);
  }

  // tslint:disable-next-line:typedef
  sendProject(item: Item){
    this.item = item;
    this.sendItemSubject.next(item);
  }
}
