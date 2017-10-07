import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../core/authentication/authentication.service';

@Injectable()
export class TransactionService {
  url = 'transacts/get_employee_transact';
  company_url = 'transacts/get_company_transact';
  show_url = '';
  constructor(private http: Http, private authtokenService: AuthenticationService) { }

  getAllOfMyTransaction(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load flight :-('));
  }

  getAllCompanyTransaction(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.company_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load flight :-('));
  }

  showTransaction(tId: string): Observable<any> {
    this.show_url = '/transacts/' + tId;
    console.log("URL : ", this.show_url);
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.show_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load transaction :-('));
  }

}
