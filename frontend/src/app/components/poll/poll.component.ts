import { Component, OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { StoreDataService } from '../../services/store-data.service';
import { DropdownModule } from 'ngx-dropdown';
import { FetchDataService } from '../../services/fetch-data.service';
import { ChartsModule, BaseChartDirective, } from 'ng2-charts';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  // routes

  po: any;
  // poll storage and options
  poll: any = this.data.storage;
  options: any = this.data.storage.options;
  title: string = this.data.storage.title;
  id: string = this.data.storage['_id'];
  votes: any = [];
  titles: any = [];
  public showAdd = false;
  public showRemove = false;
  public form: FormGroup;


  public BU: string = 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fdamp-coast-64326.herokuapp.com%2Fr%2F' + this.id;
  // Doughnut chart
  public doughnutChartLabels: string[] = this.titles;
  public doughnutChartData: number[] = this.votes;
  public doughnutChartType = 'doughnut';



  constructor(private data: StoreDataService,
              private dataService: FetchDataService,
              private cdRef: ChangeDetectorRef,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private auth: AuthService) {

 }

  ngOnInit() {
    this.getVotes();
    this.getTitles();
    this.removeOption();

    this.form = this.fb.group({
      option: ['', Validators.required]
    });
  }


  getVotes() {
    for (const option of this.options){
      const v = option.votes;
      this.votes.push(v);
    };


  };

  getTitles() {
    for (const option of this.options){
      const o = option.option;
      this.titles.push(o);
    }
  }

  updateVotes() {
    this.votes = [];
    this.getVotes();
  }

  onClick(i) {
    this.poll.options[i].votes = this.poll.options[i].votes + 1;
    const po = this.poll;
    this.dataService.postVotes(po).subscribe(
            response => console.log(response), // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
          );
    this.router.navigate(['r', this.id]);
  }


  // function on remobe button, deletes poll form database
  removePoll() {
    const po = this.poll;
    this.dataService.remove(po).subscribe(
            response => console.log(response), // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
          );
    this.router.navigate(['myPolls']);
  }

  // check if current user is the one that created option
  // if it is display remove button
  removeOption() {
    const po = this.poll;
    this.dataService.removeOption(po).subscribe(
            response => {
              if (response['_body'] === 'show') { this.showRemove = true; }
            }, // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
          );
  }


  // add another option to the poll
  onSubmit() {
    const o = this.form.value;
    o.votes = 1;
    this.poll.options.push(o);
    const po = this.poll;
    this.dataService.postVotes(po).subscribe(
            response => console.log(response), // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
          );
    this.router.navigate(['r', this.id]);
  }

  // redirect to tweet website
  tweet() {
    window.location.href = this.BU;
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
