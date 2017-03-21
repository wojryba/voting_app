import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Poll } from './poll';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-newpoll',
  templateUrl: './newpoll.component.html',
  styleUrls: ['./newpoll.component.css']
})
export class NewpollComponent implements OnInit {
  public poll: FormGroup;

  constructor(private fb: FormBuilder, private dataService: FetchDataService, private router: Router) {}


  ngOnInit() {
    this.poll = this.fb.group({
      title: ['', Validators.required],
      options: this.fb.array([
        this.initOption()
    ])
    });
  }

  initOption() {
    return this.fb.group({
      option: ['', Validators.required]
    })
  }

  addOption() {
    const control = <FormArray>this.poll.controls['options'];
    control.push(this.initOption());
  }

  removeOption(i: number) {
    // remove address from the list
    const control = <FormArray>this.poll.controls['options'];
    control.removeAt(i);
}


  onSubmit() {
    let po = this.poll.value;
    this.dataService.postNewPoll(po).subscribe(
            response => console.log(response), // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
    )
    this.router.navigate(["myPolls"]);
  }



}
