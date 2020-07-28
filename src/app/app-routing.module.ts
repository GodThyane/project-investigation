import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InitialComponent} from './initial/initial.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {JuryHomeComponent} from './jury-home/jury-home.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';

const routes: Routes = [
  {path: 'home', component: InitialComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'admin-home', component: AdminHomeComponent},
  {
    path: 'jury-home', component: JuryHomeComponent, children: [
      {path: 'projects/:id', component: ProjectDetailComponent}
    ]
  },
  {path: 'student-home', component: StudentHomeComponent},
  {path: '**', component: InitialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
