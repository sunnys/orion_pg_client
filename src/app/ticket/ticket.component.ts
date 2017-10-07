import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';
import { Flight } from './flight';
import { Flights } from './flights';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  private flights: Flights;
  constructor( private MyTicketService: TicketService ) { }

  ngOnInit(): void {
    this.getListOfAllTickets().subscribe(flights => {
      console.log(flights);
      this.flights = flights;
    });
  }

  public getListOfAllTickets(): Observable<Flights> {
    return this.MyTicketService.getFlightsInformation();
  }

}
