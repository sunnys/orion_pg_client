import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTransactionComponent } from './book-transaction.component';

describe('BookTransactionComponent', () => {
  let component: BookTransactionComponent;
  let fixture: ComponentFixture<BookTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
