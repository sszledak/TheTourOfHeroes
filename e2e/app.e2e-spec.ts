import { TheTourOfHeroesPage } from './app.po';

describe('the-tour-of-heroes App', () => {
  let page: TheTourOfHeroesPage;

  beforeEach(() => {
    page = new TheTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
