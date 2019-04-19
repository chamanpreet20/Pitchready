/*
1.Search for template
2.filter templates from Viewall>>presentation type>>select 'Template'
3.Click on first template from results
4.Click on Refine search >>scroll till bottom (Optional)
5.'Flag all' >>Click on 'Clone to new'
6.Enter details click on save
7.Move to Active projects
Expected :Should display created project
*/
var login_page = require('..\\pageobjects\\loginOut_PO');
var t_data = require('..\\test_data\\testdata.json');
var mysearchpageobj = require('..\\pageobjects\\searchpage_PO');
var mycreateprojobj = require('..\\pageobjects\\createproject_PO');
var myactivetabobj = require('..\\pageobjects\\activetab_PO');

describe('verify Clonning template as project from search',function(){
  
beforeAll(async function(){
    await login_page.get(t_data.loginurl);
    browser.sleep(4000);
    /*  
    console.log("Logging to application");
    browser.waitForAngularEnabled(false);
    await login_page.enterUname(t_data.username);
    await login_page.enterPassword(t_data.password);
    await login_page.clickSignIn();
    browser.sleep(2000);
    expect(login_page.getloggedinuser()).toEqual('Pitchflow User');
    //expect(login_page.getloggedinuser()).toEqual('Mala Gupta');*/
})

//---------------------1.Search for template---------------------------

it('Search for template',async function(){
   // browser.waitForAngularEnabled(false);
    await mysearchpageobj.entersearchstring(t_data.searchname);
    browser.sleep(2000);
    expect(mysearchpageobj.searchresultheader.isDisplayed()).toBeTruthy();
});

//------------------2.filter templates from Viewall>>presentation type>>select 'Template'
//------------------3.Click on first template from results
it('Filter presentation type as template',async function(){
    //browser.waitForAngularEnabled(false);
   // await mysearchpageobj.entersearchstring(t_data.searchname);
    await mysearchpageobj.filterbypresentationtype("Template");
    browser.sleep(2000);
    await mysearchpageobj.selectPPT(t_data.searchname);
    browser.sleep(2000);
    expect(mysearchpageobj.selectedpresentationtype.getText()).toContain("Template");
});

it('Clonning to new project',async function(){
    //browser.waitForAngularEnabled(false);
  browser.sleep(5000);
  await mysearchpageobj.selectslides1().then(function(){
      browser.sleep(5000);
       //mysearchpageobj.enterprojectname(t_data.newproject);
    mycreateprojobj.setprojectname(t_data.newproject_template);
    mycreateprojobj.setclientname(t_data.clientname);
    mycreateprojobj.selectsector();
    mycreateprojobj.selectdeal();
    mycreateprojobj.selectprojtype();
    mycreateprojobj.setmdname(t_data.MDname);
    //mycreateprojobj.setduedate();
    mysearchpageobj.setduedate();
    mycreateprojobj.selectsecurity();
    mysearchpageobj.clickonsave();
       });
      browser.sleep(18000);
      browser.wait(EC.not(EC.visibilityOf(mysearchpageobj.SlideContainer)));
       expect(mysearchpageobj.SlideContainer.isDisplayed()).toBeFalsy();
   
});

 //----------verify project created successfully


it('verify created project',async function(){
    await login_page.clickonlogo();
    browser.sleep(8000);
    var result = myactivetabobj.projtitleall.filter(function(project){
      
    return project.element(myactivetabobj.projectnm.locator()).getText().then(function(title){
        //console.log(title);
        return title == t_data.newproject_template;
    });
});
expect(result.count()).toEqual(1);
});

/*
afterAll(async function () { 
    console.log("in logout");                         
    browser.waitForAngularEnabled(false);
    await login_page.clicklogout();
    //browser.sleep(40000);
});
*/
});