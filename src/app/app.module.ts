import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoachComponent } from './coach/coach.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { CoachinfoComponent } from './coachinfo/coachinfo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutingModule } from './app-routing-module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachComponent,
    StudentComponent,
    UsersComponent,
    UserComponent,
    CoachinfoComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
