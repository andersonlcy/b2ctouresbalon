import { browser, element, by } from 'protractor';

export class B2ctouresbalonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
