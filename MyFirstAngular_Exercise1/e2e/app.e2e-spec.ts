import { MyFirstAngularPage } from './app.po';

describe('my-first-angular App', () => {
  let page: MyFirstAngularPage;

  beforeEach(() => {
    page = new MyFirstAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
