// 1. Click on LogOut icon

var mylogoutobj = require('..\\pageobjects\\loginOut_PO');
var t_data = require('..\\test_data\\testdata.json');


describe('Verify Logout from portal',function(){
  beforeAll(async function(){
    await mylogoutobj.get(t_data.loginurl);
    browser.sleep(4000);
  
  })
    it('click on Logout',async function(){
      console.log("Logging out from application")
      browser.waitForAngularEnabled(false);
      await mylogoutobj.clicklogout();
    });


})