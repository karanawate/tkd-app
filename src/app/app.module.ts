import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoachComponent } from './coach/coach.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule  } from '@angular/router';

const appRoutes: Routes = [
   { path:'', component:HomeComponent},
  { path:'coach', component:CoachComponent},
  { path:'student', component:StudentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
