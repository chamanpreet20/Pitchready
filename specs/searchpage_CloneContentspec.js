/*
1. Navigation to a pitch flow instance
2. Entering the username/ password and click on Sign in
3. Enter the Content name in the search project page
4. Filter presentation type as Presentation
5. Select the slides and clone to new project
6. Verify the project get created
*/

var login_page = require('..\\pageobjects\\loginOut_PO');
var t_data = require('..\\test_data\\testdata.json');
var mysearchpageobj = require('..\\pageobjects\\searchpage_PO');
var mycreateprojobj = require('..\\pageobjects\\createproject_PO');
var myactivetabobj = require('..\\pageobjects\\activetab_PO');

describe('Verify Clonning Content from search',function(){
    beforeAll(async function(){
        await login_page.get(t_data.loginurl);
        browser.sleep(4000);

    })

    //---------------------------3. Enter the Content name in the search project page
   it('search for content',async function(){
    await mysearchpageobj.entersearchstring(t_data.searchcontent);
    browser.sleep(2000);
    expect(mysearchpageobj.searchresultheader.isDisplayed()).toBeTruthy();

   });

  //-----------------------4. Filter presentation type as Presentation 
   it('Filter presentation type as Presentation',async function(){
    
    await mysearchpageobj.filterbypresentationtype("Presentation");
    browser.sleep(2000);
    await mysearchpageobj.selectPPT(t_data.searchcontent);
    browser.sleep(2000);
    expect(mysearchpageobj.selectedpresentationtype.getText()).toContain("Presentation"); 
   });

//-----------------5. Select the slides and clone to new project

   it('Clonning to new project',async function(){

    browser.sleep(5000);
    var EC = protractor.ExpectedConditions;
    await mysearchpageobj.selectslides1().then(function(){
    browser.sleep(5000);
     mycreateprojobj.setprojectname(t_data.newproject_content);
   // mycreateprojobj.setclientname(t_data.clientname);
    //mycreateprojobj.selectsector();
    //mycreateprojobj.selectdeal();
    //mycreateprojobj.selectprojtype();
    //mycreateprojobj.setmdname(t_data.MDname);
    mysearchpageobj.setduedate();
    //mycreateprojobj.selectsecurity();
     mysearchpageobj.clickonsave();

     });
     browser.sleep(10000);   
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
        return title == t_data.newproject_content;
    });
});
expect(result.count()).toEqual(1);
});

})