import {Component, OnInit} from '@angular/core';

import {CommunicationService} from '../../services/communication.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  user: User;

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.user = this.communicationService.user;
    this.isLogin();
  }

  isLogin(): void {
    if (this.user === undefined) {
      this.router.navigate(['/home']);
    }
  }

}
