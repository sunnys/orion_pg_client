import { Component, OnInit, Input, Output } from '@angular/core';
import { TicketService } from './../ticket.service';
import { Flight } from './../flight';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.scss']
})
export class ShowTicketComponent implements OnInit {
  @Input() flightId: number;
  private flight: Flight;
  constructor(private myTicketService: TicketService, route: ActivatedRoute, private router: Router) {
    this.flightId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchFlight(this.flightId.toString()).subscribe(flight => {
      this.flight = flight;
    });
  }

  public fetchFlight(flightId: string): Observable<Flight> {
    return this.myTicketService.showFlightInformation(flightId);
  }

  selectFlight(flightId: string) {
    console.log('--------------------------------------');
    this.myTicketService.selectFlight(flightId).subscribe(transact => {
      console.log('Transaction : ', transact);
      this.router.navigate(['/transactions/' + transact.transact_id ], { replaceUrl: true  });
    },
    err => {
      console.log('err : ', err);
    });
  }

}
