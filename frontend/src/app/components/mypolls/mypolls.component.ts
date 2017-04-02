import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
import { StoreDataService } from '../../services/store-data.service';



@Component({
  selector: 'app-mypolls',
  templateUrl: './mypolls.component.html',
  styleUrls: ['./mypolls.component.css']
})
export class MypollsComponent implements OnInit {
  polls: any;

  constructor(private dataService: FetchDataService, private router: Router, private data: StoreDataService) { }

  ngOnInit() {
    this.getUserPolls();
  }

  getUserPolls() {
    this.dataService.getUserPolls().subscribe(polls => this.polls = polls);
  }

  onClick(i) {
    this.data.storage = this.polls[i];
    console.log(this.data.storage);
    this.router.navigate(['poll']);
  }
}
