/*Navigation to a pitchflow instance
Entering the username/ password and click on Sign in
Click on already created project
Double click on a slide
User clicks on Download Slide icon
*/
var t_data = require('..\\test_data\\testdata.json');
var login_page = require('..\\pageobjects\\loginOut_PO');
var myactivetabobject = require('..\\pageobjects\\activetab_PO');
var myprojectdetailobject = require('..\\pageobjects\\projectdetail_PO')

describe('Verify downloading slide',function(){
    beforeAll(async function(){
        await login_page.get(t_data.loginurl);
        browser.sleep(4000);

    })

    //-------------------------Click on already created project
    it('Viewing the project',async function(){
      myactivetabobject.projtitleall.filter(function(project){
          return project.element(myactivetabobject.projectnm.locator()).getText().then(function(title){
              //console.log(title);
            return title == t_data.name;
          });
        }).first().click();
        browser.sleep(10000);
        expect(myprojectdetailobject.projectTitle.getText()).toBe(t_data.name);
    });
    
     it('Download presentation',async function(){
     myprojectdetailobject.downloadppt.click(); 
     browser.sleep(5000);
     expect(myprojectdetailobject.exportmodaldialoge.isDisplayed()).toBeTruthy();
      } );

    //-------------------Download slide from section
    xit('Downloading slide from section',async function(){
    var EC = protractor.ExpectedConditions;
    //expand section
    await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
    browser.sleep(8000);
    //move mouse to slide and click download
    browser.actions().mouseMove(await myprojectdetailobject.Slide).perform();
    browser.wait(EC.elementToBeClickable(await myprojectdetailobject.downloadiconchild),5000);
    browser.actions().mouseMove(await myprojectdetailobject.downloadiconchild).click().perform();
    browser.sleep(8000);    
    })

    //--------------------Double click on a slide and click on download icon
    xit('Opening slide to download',async function(){
        //expand section
        //await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
        //browser.sleep(8000);
        //open slide
        browser.actions().doubleClick(await myprojectdetailobject.Slide).perform();
        await myprojectdetailobject.downloadiconchild.click();

        browser.sleep(8000);
    })

    

})