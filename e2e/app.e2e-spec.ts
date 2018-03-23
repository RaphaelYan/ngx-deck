import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "<Github page exemple>"', () => {
    expect(page.getTitleText()).toContain('<Github page exemple>');
  });
});
