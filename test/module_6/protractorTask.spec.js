/* eslint-disable no-undef */
const app = require("../module_6/page/app");

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

    it("should multiply 3 and 7", () => {
        app.perform(3, 7, "*");
        expect(app.getResult()).toEqual("21");
    });

    it("should div 3 and 0", () => {
        app.perform(3, 0, "/");
        expect(app.getResult()).toEqual("Infinity");
    });

    it("should 10 % 2", () => {
        app.perform(10, 2, "%");
        expect(app.getResult()).toEqual("0");
    });

    it("check history in memory", () => {
        expect(app.checkHistory()).toEqual(4);
    });
});