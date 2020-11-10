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
  .argv

console.log(yargs.browser, yargs.parallel);