    var login_page = require('..\\pageobjects\\loginOut_PO');
    var t_data = require('..\\test_data\\testdata.json');
    
describe('home page',function(){
    it('login to application',  async function()  {
       console.log("Logging-in to Pitchflow");
       browser.waitForAngularEnabled(false);
       /*await browser.get('https://pitchflow.evalueserve.com/cs');
       await login_page.enterUname('cs_user@mypresentation.space');
       await login_page.enterPassword('!evalu3');*/
       
       //await browser.get(t_data.loginurl);
       await login_page.get(t_data.loginurl);
      // browser.sleep(40000);
       await login_page.enterUname(t_data.username);
       await login_page.enterPassword(t_data.password);
       //browser.sleep(60000);
       await login_page.clickSignIn();  
       browser.sleep(8000);
       expect(login_page.getloggedinuser()).toEqual('Pitchflow User');
    });
    
    /*
    afterAll(async function () { 
        console.log("in logout");                         
        browser.waitForAngularEnabled(false);
        await login_page.clicklogout();
        browser.sleep(40000);
    });
    */
});