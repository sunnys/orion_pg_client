import { Component, OnInit } from '@angular/core';
import { TicketService } from './../ticket.service';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { City } from './city';
@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.scss']
})
export class SearchTicketComponent implements OnInit {
  selectedCity: City = new City('BOM',  'Mumbai');
  selectedToCity: City = new City('DEL',  'Delhi');
  searchTicketForm: FormGroup;
  cities = [
    new City('BOM', 'Mumbai'),
    new City('DEL', 'Delhi'),
    new City('MAD', 'Chennai'),
    new City('CAL', 'Kolkata'),
    new City('PUN', 'Pune'),
    new City('BAN', 'Bangalore'),
    new City('HYD', 'Hyderabad')
  ];
  constructor(private MyTicketService: TicketService, private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.searchTicketForm = this.fb.group({
      fromCity: '',
      toCity: '',
      fromDate: '',
      toDate: ''
    });
  }

  onChange(selectedCityValue: string) {
    console.log(selectedCityValue);
    this.searchTicketForm.controls['fromCity'].setValue(selectedCityValue);
  }

  searchTicket() {
    // console.log(this.searchTicketForm.value);
    const from = this.searchTicketForm.value.fromCity;
    const to = this.searchTicketForm.value.toCity;
    const fromDate = new Date(this.searchTicketForm.value.fromDate);
    const toDate = new Date(this.searchTicketForm.value.toDate);
    let queryString = 'from=' + from;
    queryString = queryString + '&to=' + to;
    queryString = queryString + '&fromDate=' + fromDate;
    queryString = queryString + '&toDate=' + toDate;
    console.log('Query String : ', queryString);
    this.router.navigate(['/tickets'], { queryParams:
      {from: from, to: to, fromDate: fromDate, toDate: toDate}, replaceUrl: true }
    );
  }

  // searchTicket() {
  //   console.log(this.searchTicketForm.value);
  //   // tslint:disable-next-line:max-line-length
  //   this.MyTicketService.getFlightsInformation(this.searchTicketForm.value.fromCity, this.searchTicketForm.value.toCity, this.searchTicketForm.value.fromDate, this.searchTicketForm.value.toDate)
  //   .subscribe((res) => {
  //     console.log(res);
  //   },
  //   err => {
  //     console.log(err);
  //   });
  // }
}
