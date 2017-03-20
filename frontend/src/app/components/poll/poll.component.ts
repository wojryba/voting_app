import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../../services/store-data.service';
import { DropdownModule } from "ngx-dropdown";
import { FetchDataService } from '../../services/fetch-data.service';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll: any = this.data.storage;
  options: any = this.data.storage.options;



  constructor(private data: StoreDataService, private dataService: FetchDataService) {

 }

  ngOnInit() {

  }

  onClick(i){
    console.log(i)
    this.poll.options[i].votes = this.poll.options[i].votes + 1
    let po = this.poll
    console.log(po)
    this.dataService.postVotes(po).subscribe(
            response => console.log(response), // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
          )
  }


}
