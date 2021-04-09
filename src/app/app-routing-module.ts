import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoachComponent } from "./coach/coach.component";
import { CoachinfoComponent } from "./coachinfo/coachinfo.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";
import { StudentComponent } from "./student/student.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path:'coach', component:CoachComponent},
  { path:'student', component:StudentComponent},

  { path:'users', component:UsersComponent, children:[
    { path:':id/:name', component:UserComponent},
  ]},

  { path:'coachinfo/:id', component:CoachinfoComponent},
  {path:'page-not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo:'page-not-found'},

];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class appRoutingModule{

}
