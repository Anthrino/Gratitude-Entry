import { GratitudeEntryPage } from './app.po';

describe('gratitude-entry App', () => {
  let page: GratitudeEntryPage;

  beforeEach(() => {
    page = new GratitudeEntryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
