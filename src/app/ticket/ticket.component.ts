import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';
import { Flight } from './flight';
import { Flights } from './flights';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  private flights: Flights;
  private from: string;
  private to: string;
  private from_date: string;
  private to_date: string;
  constructor( private MyTicketService: TicketService, route: ActivatedRoute, private router: Router ) {
    this.from = route.snapshot.queryParams['from'];
    this.to = route.snapshot.queryParams['to'];
    this.from_date = route.snapshot.queryParams['fromDate'];
    this.to_date = route.snapshot.queryParams['toDate'];
    // console.log('-----', route.snapshot);
  }

  ngOnInit(): void {
    this.getListOfAllTickets().subscribe(flights => {
      console.log(flights);
      this.flights = flights;
    });
  }

  public getListOfAllTickets(): Observable<Flights> {
    return this.MyTicketService.getFlightsInformation(this.from, this.to, this.from_date, this.to_date);
  }

  showFlight(flightId: string) {
    this.router.navigate(['/tickets/' + flightId ], { replaceUrl: true  });
  }
}
