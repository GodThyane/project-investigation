import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {CommunicationService} from '../../services/communication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jury-home',
  templateUrl: './jury-home.component.html',
  styleUrls: ['./jury-home.component.css']
})
export class JuryHomeComponent implements OnInit {

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
