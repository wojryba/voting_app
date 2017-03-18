import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MypollsComponent } from './components/mypolls/mypolls.component';
import { NewpollComponent } from './components/newpoll/newpoll.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'newPoll', component: NewpollComponent},
  {path:'myPolls', component: MypollsComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MypollsComponent,
    NewpollComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
