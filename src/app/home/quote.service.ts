import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthenticationService } from './../core/authentication/authentication.service';
import { Observable } from 'rxjs/Observable';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
};

export interface RandomQuoteContext {
  // The quote's category: 'nerdy', 'explicit'...
  category: string;
}

@Injectable()
export class QuoteService {
  url = '/transacts/get_employee_transact';
  constructor(private http: Http, private authtokenService: AuthenticationService) { }

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.http.get(routes.quote(context), { cache: true })
      .map((res: Response) => res.json())
      .map(body => body.value)
      .catch(() => Observable.of('Error, could not load joke :-('));
  }

  getAllOfMyTransaction(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authtokenService.credentials.token });
    const options = new RequestOptions({ headers: headers });
    console.log(this.url);
    return this.http.get(this.url, options)
    .map((res: Response) => res.json())
    .catch((err: any) => Observable.of(err));
  }
}
