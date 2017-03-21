import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class FetchDataService {

  constructor(private _http: Http, public authHttp: AuthHttp, ) { }

  //get all polls form db
  getAllPolls() {
    return this._http.get('api/allPolls')
    .map((res)=>res.json())

  }

  //get polls post by this user
  getUserPolls(){
    return this.authHttp.get('api/userPolls')
    .map((res)=>res.json())
  }

  //get poll by id, to enable entering site through id
  //and make charts working
  getThisPoll(id){
    let encoded_data = JSON.stringify({ id });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('api/thisPoll', encoded_data,  options)
  }

  //add poll to database
  postNewPoll(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('api/new', encoded_data,  options)
  }

  //update votes in db
  postVotes(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('api/vote', encoded_data,  options)
  }


  //delete poll form db
  remove(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('api/remove', encoded_data,  options)
  }


  //check if current user created the poll
  removeOption(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('api/removeOption', encoded_data,  options)
  }



}
