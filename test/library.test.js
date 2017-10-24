var { describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);

for(var i=0; i<5; i++){
describe('library app scenarios', function(){
  this.timeout(50000);
  
  beforeEach(function(){
    page = new Page();
    // page.driver.manage().window().setPosition(0, -600);
    page.visit('http://library-app.firebaseapp.com');
  });

  afterEach(function(){
    page.quit();
  });

  it('Typing valid email changes button opacity to 1', function(){
    var btn = page.requestBtn();
    btn.opacity.should.eventually.equal('1');
  });

  it('Typing a valid email enables request button', function(){
    var btn = page.requestBtn();
    btn.state.should.eventually.be.true;
  });

  it('Clicking Request invitation triggers a confrimation alert', function(){
    var alert = page.alertSuccess();
    alert.should.eventually.contain("Thank you!");
  });
});
}