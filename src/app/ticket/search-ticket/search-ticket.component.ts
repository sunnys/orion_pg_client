import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.searchTicketForm = this.fb.group({
      fromCity: '',
      toCity: '',
      fromDate: '',
      toDate: ''
    });
  }

  searchTicket() {
    console.log(this.searchTicketForm.value);
  }
}
