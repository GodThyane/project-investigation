import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralInfoComponent } from './footer/general-info/general-info.component';
import { CopyrightInfoComponent } from './footer/copyright-info/copyright-info.component';
import { InitialComponent } from './initial/initial.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { JuryHomeComponent } from './jury-home/jury-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GeneralInfoComponent,
    CopyrightInfoComponent,
    InitialComponent,
    HeaderComponent,
    LoginComponent,
    AdminHomeComponent,
    JuryHomeComponent,
    StudentHomeComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
