import { TornadoFrontendPage } from './app.po';

describe('tornado-frontend App', () => {
  let page: TornadoFrontendPage;

  beforeEach(() => {
    page = new TornadoFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
