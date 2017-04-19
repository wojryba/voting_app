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
  optionss: any = this.data.storage.options;
  title: string = this.data.storage.title;
  id: string = this.data.storage['_id'];
  votes: any = [];
  titles: any = [];
  public showAdd = false;
  public showRemove = false;
  public form: FormGroup;
  chart: any;
  options: Object;

  public BU: string = 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fdamp-coast-64326.herokuapp.com%2Fr%2F' + this.id;




  constructor(private data: StoreDataService,
              private dataService: FetchDataService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private auth: AuthService) {
                this.options = {
                  chart: {
                      plotBackgroundColor: null,
                      plotBorderWidth: null,
                      plotShadow: false,
                      type: 'pie'
                  },
                  title: {
                      text: this.title
                  },
                  tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b>'
                  },
                  plotOptions: {
                      pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          dataLabels: {
                              enabled: true,
                              format: '<b>{point.name}</b>: {point.votes}'
                          }
                      }
                  },
                  series: []
                };
  }

  ngOnInit() {
    this.removeOption();

    this.form = this.fb.group({
      option: ['', Validators.required]
    });
  }

  saveInstance(chartInstance) {
        this.chart = chartInstance;
        this.setOptions();
    }

  setOptions() {
    const options = this.poll.options;
    const series = {
        name: 'Votes',
        colorByPoint: true,
        data: []
        };
        options.map(val => {
          const d = {
            name: val.option,
            y: val.votes
          }
          series.data.push(d);
        });
    this.chart.addSeries(series);
  }

  onClick(i) {
    this.poll.options[i].votes = this.poll.options[i].votes + 1;
    const po = this.poll;
    this.dataService.postVotes(po).subscribe(
            response => {
              this.chart.series[0].remove(true);
              this.setOptions();
            },
            error => console.log(error),
            () => console.log('completed')
          );
  //this.router.navigate(['r', this.id]);
  }


  // function on remobe button, deletes poll form database
  removePoll() {
    this.dataService.remove(this.poll).subscribe(
            response => {
              this.router.navigate(['myPolls']);
            }, // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
          );
  }

  // check if current user is the one that created option
  // if it is display remove button
  removeOption() {
    const po = this.poll;
    this.dataService.removeOption(po).subscribe(
            response => {
              if (response['_body'] === 'show') { this.showRemove = true; }
              console.log('dasds');
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
    this.dataService.postVotes(this.poll).subscribe(
            response => {
              this.chart.series[0].remove(true);
              this.setOptions();
            },
            error => console.log(error),
            () => console.log('completed')
          );
  }

  // redirect to tweet website
  tweet() {
    window.location.href = this.BU;
  }

}
