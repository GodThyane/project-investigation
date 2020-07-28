import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../services/communication.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../models/user';
import {Project} from '../../models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {


  user: User;
  projectActual: Project;

  constructor(private communicationService: CommunicationService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.user = this.communicationService.user;
    this.isLogin();
    this.getProject();
  }

  isLogin(): void {
    if (this.user === undefined) {
      this.router.navigate(['/home']);
    }
  }

  // tslint:disable-next-line:typedef
  getProject() {
    this.route.params.forEach((params: Params) => {
      const id = params.id;
      this.projectActual = this.getProjectById(id);
    });
  }

  getProjectById(id: number): Project {
    for (const project of this.user.projects) {
      if (project.id == id) {
        return project;
      }
    }
  }

}
