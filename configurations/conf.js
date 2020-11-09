exports.config = {
    framework: "jasmine",
    specs: ["../test/module_6/protractorTask.spec.js"],
    capabilities: {
        browserName: "firefox"
    },
    onPrepare: () => {
        browser.manage().window().setSize(800, 600);
        }
}