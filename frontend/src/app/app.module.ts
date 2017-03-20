import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MypollsComponent } from './components/mypolls/mypolls.component';
import { NewpollComponent } from './components/newpoll/newpoll.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PollComponent } from './components/poll/poll.component'
import {DropdownModule} from "ngx-dropdown";


import { FetchDataService } from './services/fetch-data.service'
import { AuthService } from './services/auth.service';
import { StoreDataService } from './services/store-data.service';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'newPoll', component: NewpollComponent},
  {path:'myPolls', component: MypollsComponent},
  {path:'poll', component: PollComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MypollsComponent,
    NewpollComponent,
    NavbarComponent,
    PollComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    DropdownModule
  ],
  providers: [FetchDataService, AuthService, StoreDataService, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
