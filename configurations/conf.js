const yargs = require("yargs")(process.argv.slice(2))
  .option("browser", {
    alias: "b",
    default: "firefox",
    describe: "choose a browser",
    choices: ["firefox", "chrome"],
    type: "string"
  })
  .option("parallel", {
      alias: "p",
      default: false,
      describe: "Do tests run parallel (Default: false)?",
      type: "boolean"
  })
  .help()
  .argv;

exports.config = {
    framework: "jasmine",
    specs: ["../test/module_6/protractorTask.spec.js","../test/module_6/parallel.spec.js"],
    capabilities: {
        browserName: yargs.browser,
        shardTestFiles: yargs.parallel,
        maxInstances: 2
    },
    onPrepare: () => {
        browser.manage().window().setSize(800, 600);
        }
}