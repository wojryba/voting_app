import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MypollsComponent } from './components/mypolls/mypolls.component';
import { NewpollComponent } from './components/newpoll/newpoll.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PollComponent } from './components/poll/poll.component'
import { RedirectComponent } from './components/redirect/redirect.component';

import { DropdownModule } from "ngx-dropdown";
import { ChartsModule } from 'ng2-charts';



import { FetchDataService } from './services/fetch-data.service'
import { AuthService } from './services/auth.service';
import { StoreDataService } from './services/store-data.service';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'newPoll', component: NewpollComponent},
  {path:'myPolls', component: MypollsComponent},
  {path:'poll', component: PollComponent},
  {path:'r/:id', component: RedirectComponent}
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MypollsComponent,
    NewpollComponent,
    NavbarComponent,
    PollComponent,
    RedirectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    DropdownModule,
    ChartsModule
  ],
  providers: [FetchDataService, AuthService, StoreDataService, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
