import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../services/communication.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../models/user';
import {Item} from '../../models/item';
import {Usertwo} from '../../models/usertwo';

declare var $;

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {


  user: User;
  itemActual: Item;
  isActived: boolean;

  constructor(private communicationService: CommunicationService, private router: Router, private route: ActivatedRoute) {
    this.isActived = false;
  }


  ngOnInit(): void {
    this.user = this.communicationService.user;
    this.isLogin();
    this.getItem();
  }

  isLogin(): void {
    if (this.user === undefined) {
      this.router.navigate(['/home']);
    }
  }

  // tslint:disable-next-line:typedef
  getItem() {
    this.route.params.forEach((params: Params) => {
      const id = params.id;
      this.itemActual = this.getProjectById(id);
      this.communicationService.sendProject(this.itemActual);
    });
  }

  getProjectById(id: string): Item {
    for (const item of this.user.projects) {
      if (item._id == id) {
        return item;
      }
    }
  }

  active() {
    if (!this.isActived) {
      this.isActived = true;
    }
  }

  close() {
    this.router.navigate(['/jury-home']);
  }

  getUsers(users: Usertwo[]){
    let userString = '';
    let count = 1;
    for (const userLet of users){
      if (count == users.length){
        userString += userLet.firstName + ' ' + userLet.lastName + '.';
      }
      else{
        userString += userLet.firstName + ' ' + userLet.lastName + ', ';
      }
      count++;
    }
    return userString;
  }
}
