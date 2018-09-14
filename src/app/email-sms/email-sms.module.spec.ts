import { EmailSmsModule } from './email-sms.module';

describe('EmailSmsModule', () => {
  let emailSmsModule: EmailSmsModule;

  beforeEach(() => {
    emailSmsModule = new EmailSmsModule();
  });

  it('should create an instance', () => {
    expect(emailSmsModule).toBeTruthy();
  });
});
