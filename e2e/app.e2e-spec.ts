import { NgsfMediumPage } from './app.po';

describe('ngsf-medium App', () => {
  let page: NgsfMediumPage;

  beforeEach(() => {
    page = new NgsfMediumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
