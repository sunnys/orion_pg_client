import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  private transacts: any;

  constructor(private flashMessagesService: FlashMessagesService, private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getAllOfMyTransaction()
    .finally(() => { this.isLoading = false; })
    .subscribe((transacts) => {
      this.transacts = transacts;
    });
  }

}
