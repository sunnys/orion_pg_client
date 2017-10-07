import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Flights } from './flights';
import { Flight } from './flight';
import { AuthenticationService } from './../core/authentication/authentication.service';

@Injectable()
export class TicketService {
  url = '/transacts/get_flight_information';
  show_url= '';
  constructor(private http: Http, private authtokenService: AuthenticationService) { }

  getFlightsInformation(): Observable<Flights> {
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, {}, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load flight :-('));
  }

  showFlightInformation(flightId: string): Observable<Flight> {
    // tslint:disable-next-line:max-line-length
    this.show_url = '/transacts/get_flight/' + flightId;
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.show_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load flight :-('));
  }

  selectFlight(flightId: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    this.show_url = '/transacts/select_flight/' + flightId;
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.show_url, options)
    .map((res: Response) => res.json())
    .catch(() => Observable.of('Error, could not load flight :-('));
  }

}
