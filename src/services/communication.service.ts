import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Subject} from 'rxjs';
import {Project} from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  user: User;
  project: Project;
  private sendUserSubject = new Subject<User>();
  sendUserObservable = this.sendUserSubject.asObservable();

  private sendProjectSubject = new Subject<Project>();
  sendProjectObservable = this.sendProjectSubject.asObservable();

  // tslint:disable-next-line:typedef
  sendUser(user: User){
    this.user = user;
    this.sendUserSubject.next(user);
  }

  // tslint:disable-next-line:typedef
  sendProject(project: Project){
    this.project = project;
    this.sendProjectSubject.next(project);
  }
}
