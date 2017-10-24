var page = require('./base_page');
var selector = require('../utils/selectors');
var emailInput = selector.emailInput;
var requestInviteBtn = selector.requestInviteBtn;
var alertSuccess = selector.alertSuccess;


page.prototype.requestBtn = function(){
  this.write(emailInput, this.fake().email);
  return{
    opacity: this.find(requestInviteBtn).getCssValue('opacity'),
    state: this.find(requestInviteBtn).isEnabled()
  };
};

page.prototype.clickSubmit = function() {
  return this.find(requestInviteBtn).click();
};

page.prototype.alertSuccess = function() {
  this.requestBtn();
  this.clickSubmit();
  return this.find(alertSuccess).getText();
};

module.exports = page;