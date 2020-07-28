import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {CommunicationService} from '../../services/communication.service';
import {User} from '../../models/user';
import {Rol} from '../../models/rol';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user2: string;
  public password2: number;
  public passwordB: boolean;
  public user: User;

  constructor(
    private router: Router,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute, private _userService: UserService, private communicationService: CommunicationService
  ) {
    this.passwordB = false;
  }

  ngOnInit(): void {
    this.user = this.communicationService.user;
    this.isLogin();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this._userService.isExist(this.user2, this.password2)) {
      this._userService.getUser(this.user2, this.password2).subscribe(
        (user) => {
          this.user = user;
          this.communicationService.sendUser(user);
          this.redirect();
          this.passwordB = false;
        }
      );
    } else {
      this.passwordB = true;
    }
  }

  isLogin(): void {
    if (this.user !== undefined) {
      this.redirect();
    }
  }

  redirect(): void{
    if (this.user.rol === Rol.JURY){
      this.router.navigate(['/jury-home']);
    }
    else{
      this.router.navigate(['/student-home']);
    }
  }

}

