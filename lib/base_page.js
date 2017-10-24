var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
var fake = require ('../utils/fake_data');

var page = function() {
  this.driver = new webdriver.Builder().forBrowser('phantomjs').build();
  var driver = this.driver;
  this.fake = fake;

  this.visit = function(theUrl){
    return driver.get(theUrl);
  };

  this.quit = function(theUrl){
    return driver.quit();
  };

  this.find = function(el){
    driver.wait(until.elementLocated(By.css(el)), 15000);
    return driver.findElement(By.css(el));
  };

  this.findAll = function(el){
    driver.wait(until.elementLocated(By.css(el)), 15000);
    return driver.findElements(By.css(el));
  };

  this.write = function(el, txt){
    return this.find(el).sendKeys(txt);
  };

};

module.exports = page;





