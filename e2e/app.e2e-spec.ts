import { JasonWeberWebsitePage } from './app.po';

describe('jason-weber-website App', () => {
  let page: JasonWeberWebsitePage;

  beforeEach(() => {
    page = new JasonWeberWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
