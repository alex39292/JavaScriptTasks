/* eslint-disable no-undef */
const app = require("../module_6/page/app");

// eslint-disable-next-line no-undef
describe("Protractor Demo App", () => {
    it("Check title of the page", () => {
        app.get();
        app.checkTitle("Super Calculator");
    });

    it("should add 3 and 3", () => {
        app.perform(3, 3, "+");
        app.checkResult("6");
    });

    it("should multiply 3 and 7", () => {
        app.perform(3, 7, "*");
        app.checkResult("21");
    });

    it("should div 3 and 0", () => {
        app.perform(3, 0, "/");
        app.checkResult("Infinity");
    });

    it("should 10 % 2", () => {
        app.perform(10, 2, "%");
        app.checkResult("0");
    });

    it("check history in memory", () => {
        app.checkHistory(4);
    });
});