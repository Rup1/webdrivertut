var{ describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);

    describe('library app scenarios', function(){
      this.timeout(50000);
      
      beforeEach(function(){
        page = new Page();
        page.visit('http://library-app.firebaseapp.com');
        page.driver.manage().window().setPosition(0, -600);
      });

      afterEach(function(){
        page.quit();
      });

      it('Typing valid email changes opacity to 1', function(){
        var btn = page.requestBtn();
        btn.opacity.should.eventually.equal('1');
      });

      it('Typing valid email enables request button', function(){
        var btn = page.requestBtn();
        btn.state.should.eventually.be.false;
      });

      it('Clicking request invitation triggers a confirmation alert', function(){
        var alert = page.alertSuccess();
        alert.should.eventually.contain("Thank you!");
      });
    });