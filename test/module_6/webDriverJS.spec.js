const { expect } = require("chai");
const {Builder, By, until} = require("selenium-webdriver");
const driver = new Builder().forBrowser('firefox').build();

describe("Selenium-webdriverJS test", function () {
  afterEach(async () => await driver.quit());

  it("oz.by simple test: find a book, add to cart, delete from cart", async () => {
      await driver.get('https://oz.by/')
      .then(_ => driver.findElement(By.name('q')))
      .then(q => q.sendKeys('Ведьмак'))
      .then(_ => driver.findElement(By.css('.top-panel__search__btn')))
      .then(btn => btn.click())
      .then(_ => driver.wait(until.elementLocated(By.css('li.viewer-type-card__li:nth-child(1)')),10000))
      .then(btn => btn.click())
      .then(_ => driver.findElement(By.css('.addtocartform')))
      .then(btn => btn.click())
      .then(_ => driver.findElement(By.css('li.top-panel__userbar__cart')))
      .then(btn => btn.click())
      .then(_ => driver.findElements(By.css('input.i-checkbox__real')))
      .then(btn => btn[0].click())
      .then(_ => driver.findElement(By.css('button.remove')))
      .then(btn => btn.click())
      .then(_ => driver.wait(until.elementLocated(By.css('.remove-yes')), 10000))
      .then(btn => btn.click());
  });
});