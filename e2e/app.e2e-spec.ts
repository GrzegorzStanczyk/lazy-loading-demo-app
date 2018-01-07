import { LazyLoadingPage } from './app.po';

describe('lazy-loading App', () => {
  let page: LazyLoadingPage;

  beforeEach(() => {
    page = new LazyLoadingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
