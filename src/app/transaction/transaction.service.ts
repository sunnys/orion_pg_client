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
  request_for_approval_url = '';
  show_url = '';
  approve_url = '';
  reject_url = '';
  book_url = '';
  otp_url = '';
  submit_otp_url = '';

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
    console.log('URL : ', this.show_url);
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.show_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load transaction :-('));
  }

  requestForApprovalTransaction(tId: string): Observable<any> {
    this.request_for_approval_url = '/transacts/' + tId + '/request_for_approval';
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.request_for_approval_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load flight :-('));
  }

  bookTransaction(tId: string): Observable<any> {
    this.book_url = '/transacts/' + tId + '/book_transaction';
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.book_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load transaction :-('));
  }

  approveTransaction(tId: string): Observable<any> {
    this.approve_url = '/transacts/' + tId + '/approve_transaction';
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.approve_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load transaction :-('));
  }

  rejectTransaction(tId: string): Observable<any> {
    this.reject_url = '/transacts/' + tId + '/reject_transaction';
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.reject_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load transaction :-('));
  }

  generateOtpTransaction(tId: string): Observable<any> {
    this.book_url = '/transacts/' + tId + '/generate_otp';
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.book_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load transaction :-('));
  }

  submitOtpTransaction(tId: string, otp: string): Observable<any> {
    this.submit_otp_url = '/transacts/' + tId + '/verify_otp';
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.submit_otp_url, {otp: otp}, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load transaction :-('));
  }
}
