import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../../services/store-data.service';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  // routes
  id: string;
  po: any;
  constructor(private data: StoreDataService,
    private dataService: FetchDataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getThisPoll(this.id).subscribe(
      response => { this.po = JSON.parse(response['_body']);
         this.data.storage = this.po;}, // success
      error => console.log(error),       // error
      () =>  this.router.navigate(['poll'])
    );
  }

}
