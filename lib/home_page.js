var page = require('./base_page');

page.prototype.requestBtn = function(){
  this.write('input', 'user@fakemail.bro');
  return{
    opacity: this.find('.btn-lg').getCssValue('opacity'),
    state: this.find('.btn-lg').isEnabled()
  };
};

page.prototype.clickSubmit = function() {
  return this.find('.btn-lg').click();
};

page.prototype.alertSuccess = function() {
  this.requestBtn();
  this.clickSubmit();
  return this.find('.alert-success').getText();
};

module.exports = page;