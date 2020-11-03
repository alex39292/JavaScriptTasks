/* eslint-disable no-undef */
const { browser, element, by, $$ } = require("protractor");

class DemoApp {
    constructor() {
        this.firstNumber = element(by.model("first"));
        this.secondNumber = element(by.model("second"));
        this.goButton = element(by.id("gobutton"));
        this.operator = element(by.model("operator"));
        this.history = $$("tr.ng-scope");
        this.text = $("div:nth-child(1) > h3:nth-child(1)");
        
    }

    get() {
        browser.get("http://juliemr.github.io/protractor-demo/");
    }

    checkTitle(title) {
        browser.executeScript("document.querySelector('body').style.background = 'grey'");
        browser.executeScript("arguments[0].style.backgroundColor = 'red'", this.text);
        expect(browser.executeScript("return document.title")).toEqual(title);
    }

    perform(num1, num2, operator) {
        browser.actions().click(this.firstNumber).perform();
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.operator.sendKeys(operator);
        browser.actions().mouseMove(this.goButton).click().perform();
    }

    checkResult(expectedResut) {
        expect(element(by.binding("latest")).getText()).toEqual(expectedResut);
    }

    checkHistory(historyResult) {
        expect(this.history.count()).toEqual(historyResult);
    }
}

module.exports = new DemoApp;