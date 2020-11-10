/* eslint-disable no-undef */
const app = require("./page/app");

// eslint-disable-next-line no-undef
describe("Protractor Demo App", () => {
    it("Check title of the page", () => {
        app.get();
        expect(app.getTitle()).toEqual("Super Calculator");
    });

    it("should add 3 and 3", () => {
        app.perform(3, 3, "+");
        expect(app.getResult()).toEqual("6");
    });

    it("should multiply 10 and 10", () => {
        app.perform(10, 10, "*");
        expect(app.getResult()).toEqual("100");
    });

    it("should div 36 and 6", () => {
        app.perform(36, 6, "/");
        expect(app.getResult()).toEqual("6");
    });

    it("should 100 % 2", () => {
        app.perform(100, 2, "%");
        expect(app.getResult()).toEqual("0");
    });

    it("check history in memory", () => {
        expect(app.getHistory()).toEqual(4);
    });
});
