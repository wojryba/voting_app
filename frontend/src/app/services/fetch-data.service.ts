import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class FetchDataService {

  constructor(private _http: Http, public authHttp: AuthHttp, ) { }

  // get all polls form db
  getAllPolls() {
    return this._http.get('http://localhost:8080/api/allPolls')
    .map( (res) => res.json() );

  }

  // get polls post by this user
  getUserPolls() {
    return this.authHttp.get('http://localhost:8080/api/userPolls')
    .map( (res) => res.json() );
  }

  // get poll by id, to enable entering site through id
  // and make charts working
  getThisPoll(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:8080/api/thisPoll', encoded_data,  options);
  }

  // add poll to database
  postNewPoll(poll) {
    const encoded_data = JSON.stringify({ poll });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:8080/api/new', encoded_data,  options);
  }

  // update votes in db
  postVotes(poll) {
    const encoded_data = JSON.stringify({ poll });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });
    
    return this._http.post('http://localhost:8080/api/vote', encoded_data,  options);
  }


  // delete poll form db
  remove(poll) {
    const encoded_data = JSON.stringify({ poll });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:8080/api/remove', encoded_data,  options);
  }


  // check if current user created the poll
  removeOption(poll) {
    const encoded_data = JSON.stringify({ poll });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.authHttp.post('http://localhost:8080/api/removeOption', encoded_data,  options);
  }



}
