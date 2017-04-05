import { DPSG.Web.PrioritySKUPage } from './app.po';

describe('dpsg.web.priority-sku App', () => {
  let page: DPSG.Web.PrioritySKUPage;

  beforeEach(() => {
    page = new DPSG.Web.PrioritySKUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
