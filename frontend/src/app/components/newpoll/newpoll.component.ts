import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Poll } from './poll';

@Component({
  selector: 'app-newpoll',
  templateUrl: './newpoll.component.html',
  styleUrls: ['./newpoll.component.css']
})
export class NewpollComponent implements OnInit {
  public poll: FormGroup;

  constructor(private fb: FormBuilder) {}


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
      option: ['']
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
    console.log(this.poll.value, this.poll.valid);
  }



}
