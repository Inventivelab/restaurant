import { browser, element, by } from 'protractor';

export class RestaurantPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('res-root h1')).getText();
  }
}
