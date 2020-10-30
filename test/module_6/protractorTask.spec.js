const { browser, element, $ } = require("protractor");

describe("Protractor Demo App", () => {
    const firstNumber = element(by.model("first"));
    const secondNumber = element(by.model("second"));
    const goButton = element(by.id("gobutton"));
    const operator = element(by.model("operator"));
    const history = element.all(by.css("tr.ng-scope"));

    browser.get("http://juliemr.github.io/protractor-demo/");

    it("Check title of the page", () => {
        expect(browser.getTitle()).toEqual("Super Calculator");
    });

    it("should add 3 and 3", () => {
        firstNumber.sendKeys(3);
        secondNumber.sendKeys(3);
        operator.sendKeys("+");
        goButton.click();

        expect(element(by.binding("latest")).getText()).toEqual("6");
    });

    it("should multiply 3 and 7", () => {
        firstNumber.sendKeys(3);
        secondNumber.sendKeys(7);
        operator.sendKeys("*");
        goButton.click();

        expect(element(by.binding("latest")).getText()).toEqual("21");
    });

    it("should div 3 and 0", () => {
        firstNumber.sendKeys(3);
        secondNumber.sendKeys(0);
        operator.sendKeys("*");
        goButton.click();

        expect(element(by.binding("latest")).getText()).toEqual("0");
    });

    it("should 10 % 2", () => {
        firstNumber.sendKeys(10);
        secondNumber.sendKeys(2);
        operator.sendKeys("%");
        goButton.click();

        expect(element(by.binding("latest")).getText()).toEqual("0");
    });

    it("check history in memory", () => {
        expect(history.count()).toEqual(4);
    });
});