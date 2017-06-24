import { CreditFormPage } from './app.po';

describe('credit-form App', () => {
  let page: CreditFormPage;

  beforeEach(() => {
    page = new CreditFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
