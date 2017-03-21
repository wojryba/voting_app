import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class FetchDataService {

  constructor(private _http: Http, public authHttp: AuthHttp, ) { }


  getAllPolls() {
    return this._http.get('http://localhost:3000/api/allPolls')
    .map((res)=>res.json())

  }

  getUserPolls(){
    return this.authHttp.get('http://localhost:3000/api/userPolls')
    .map((res)=>res.json())
  }

  getThisPoll(id){
    let encoded_data = JSON.stringify({ id });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:3000/api/thisPoll', encoded_data,  options)
  }


  postNewPoll(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:3000/api/new', encoded_data,  options)
  }

  postVotes(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:3000/api/vote', encoded_data,  options)
  }

  remove(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:3000/api/remove', encoded_data,  options)
  }

  removeOption(poll){
    let encoded_data = JSON.stringify({ poll });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:3000/api/removeOption', encoded_data,  options)
  }



}