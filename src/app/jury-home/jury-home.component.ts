import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {CommunicationService} from '../../services/communication.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

declare var $;

@Component({
  selector: 'app-jury-home',
  templateUrl: './jury-home.component.html',
  styleUrls: ['./jury-home.component.css']
})
export class JuryHomeComponent implements OnInit {

  user: User;

  constructor(
    private communicationService: CommunicationService,
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {

    this.spinner();
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.user = this.communicationService.user;
    this.isLogin();
  }

  isLogin(): void {
    if (this.user === undefined) {
      this.router.navigate(['/home']);
    }
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }
}
