var{ describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('../lib/library_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);


for(var i=0; i <1; i++){
describe('library app scenarios', function(){
  this.timeout(50000);
  
  beforeEach(function(){
    page = new Page();
    page.visit('http://library-app.firebaseapp.com/libraries');
    page.driver.manage().window().maximize();
  });

  afterEach(function(){
    page.quit();
  });

  it('Should list libraries', function(){
    var libraries = page.listLibraries();
    libraries.should.eventually.have.length.above(50);
  });

  it('Should be able to add a new library', function(){
    var addLibrary = page.addLibrary();
    addLibrary.libraryList.should.eventually.contain(addLibrary.libraryName);
  });

  it('Clicking request invitation triggers a confirmation alert', function(){
    var libraries = page.sortLibraries();
    libraries.abcBtnList.should.eventually.equal(libraries.abcListText);
  });
});
}