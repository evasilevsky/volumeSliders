import { VolumeSliderPage } from './app.po';

describe('volume-slider App', () => {
  let page: VolumeSliderPage;

  beforeEach(() => {
    page = new VolumeSliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
