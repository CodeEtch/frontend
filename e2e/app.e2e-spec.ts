import { CodeEtchPage } from './app.po';

describe('code-etch App', function() {
  let page: CodeEtchPage;

  beforeEach(() => {
    page = new CodeEtchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
