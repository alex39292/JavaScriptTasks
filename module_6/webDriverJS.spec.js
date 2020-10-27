const {Builder, By, Key, until} = require("selenium-webdriver")

describe("Test", function() {

  it("", function() {
    
  })

});
(async function example() {
  let driver = await new Builder().forBrowser("firefox").build()
  try {
    await driver.get("https://oz.by/")
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
  } finally {
    await driver.quit()
  }
})()