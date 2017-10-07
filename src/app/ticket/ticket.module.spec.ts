import { TicketModule } from './ticket.module';

describe('TicketModule', () => {
  let ticketModule: TicketModule;

  beforeEach(() => {
    ticketModule = new TicketModule();
  });

  it('should create an instance', () => {
    expect(ticketModule).toBeTruthy();
  });
});
