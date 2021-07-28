import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {CommunicationService} from '../../services/communication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    private communicationService: CommunicationService, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.communicationService.sendUserObservable.subscribe(user => {
      this.user = user;
    });
  }

  isLogin(): boolean{
    return this.user !== undefined;
  }

  exitUser(): void{
    this.communicationService.sendUser(undefined);
    this.router.navigate(['/home']);
  }

}
