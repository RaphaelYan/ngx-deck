import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "Deck Stack"', () => {
    expect(page.getTitleText()).toContain('Deck Stack');
  });
});
