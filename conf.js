exports.config = {
    framework: "jasmine",
    specs: ["test/module_6/protractorTask.spec.js"],
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities: {
        browserName: 'firefox',
    }
}