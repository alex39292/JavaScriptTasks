exports.config = {
    framework: "jasmine",
    specs: ["../test/module_6/protractorTask.spec.js","../test/module_6/parallel.spec.js"],
    capabilities: {
        browserName: "firefox",
        shardTestFiles: true,
        maxInstances: 2
    },
    onPrepare: () => {
        browser.manage().window().setSize(800, 600);
        }
}