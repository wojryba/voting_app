import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StoreDataService } from '../../services/store-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  polls: "string"

  constructor(private dataService: FetchDataService, private router: RouterModule, private auth: AuthService, private router1: Router, private data: StoreDataService) { }

  ngOnInit() {
      this.getPolls();
  }

  getPolls(){
    this.dataService.getAllPolls().subscribe(polls=>this.polls = polls)
  }

  onClick(i){
    this.data.storage = this.polls[i];
    this.router1.navigate(["poll"]);
  }


}
