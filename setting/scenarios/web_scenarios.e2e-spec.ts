import { browser, element, by, protractor, $, By } from 'protractor';
import { ProjectObjects } from '../other_objects';
import { StaffObjects} from '../staff';
import { LoginObjects} from '../login';
import { ProjectSettingsObjects} from '../projectSettings';
import { NotyficationsObjects} from '../notifications';
import { UploadObjects} from '../upload';
import {Parameters} from '../parameters';


describe('Pitchflow Settings', () => {
    //var obj = require("./projectobjects.js");
    let myProjectObjects: ProjectObjects; 
    let obj: StaffObjects;
    browser.waitForAngularEnabled(false);
    const EC = protractor.ExpectedConditions;
    let myStaffObjects = new StaffObjects ();
    let myLoginObjects = new LoginObjects ();
    let myProjectSettingsObjects = new ProjectSettingsObjects();
    let myNotificationsObjects = new NotyficationsObjects();
    let myUploadObjects = new UploadObjects();
    let myParameters = new Parameters();

    beforeEach(() => {
       // browser.driver.manage().window().setSize(1366, 768);
        myProjectObjects = new ProjectObjects();
        obj = new StaffObjects();

    });

    xit('Navigate the page', async () => {
        await myProjectObjects.navigateToPage();  
    })


    xit ('Login to application',async function()
    {

        //browser.waitForAngularEnabled(false);
       await myLoginObjects.typeTextIntoLoginUsername(myParameters.username);
       await myLoginObjects.typeTextIntoLoginPassword(myParameters.password);
       myLoginObjects.clickOnLoginSubmitButton();
       expect(browser.getTitle()).toContain('Evalueserve Pitchflow')

    })

    it ('Navigate to settings',async () =>{

        //await browser.driver.sleep(1000);
       // await browser.waitForAngularEnabled(true);
        await myProjectObjects.clickOnPichflowUser();
        await myProjectObjects.clickOnSettings();
        
    })

    xit ('Staff Tab',async () =>{
       
       // await browser.driver.sleep(1000);
        await myStaffObjects.verifyStaffTab();
       
        await myStaffObjects.clickOnFindStaff().then(async () => {
            await myStaffObjects.typeTextIntoFindStaff(myParameters.textFromFindStaff);  //Admin
        })
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.driver.sleep(1000);
        
        expect(await myStaffObjects.getAttributePlaceholderFromFindStaff()).toEqual('Find Staff');
        expect(await myStaffObjects.getAttributeValueFromFindStaff()).toEqual(myParameters.textFromFindStaff);     //Admin 
        expect (await myStaffObjects.getNuberOfRowFromTableStaff()).toEqual(myParameters.nuberOfRowFromTableStaff); //for Admin = 1

        await myStaffObjects.clickOnActionButton();
        await myStaffObjects.verifyAccessPrivileges();
        await myStaffObjects.clickOnButtonCancelfromAction();
      
    })


    it ('Project Tab',async () =>{

        await myProjectSettingsObjects.clickOnProjectTab();
        await myProjectSettingsObjects.verifyProjectTab();
        //await browser.driver.sleep(1000);
        expect(await myProjectSettingsObjects.getAttributePlaceholderFromFindProject()).toEqual('Find Projects');
        await myProjectSettingsObjects.clickOnArchivedNavItem();
        await myProjectSettingsObjects.clickOnNext();
        await myProjectSettingsObjects.clickOnActiveNavItem();
        await myProjectSettingsObjects.clickOnFindProject().then(async () => {
            await myProjectSettingsObjects.typeTextIntoFindProject(myParameters.textFromFindProjects);  //Automation
        })
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  
        await browser.driver.sleep(2000);
        expect (await myProjectSettingsObjects.getNuberOfRowFromTableProject()).toEqual(myParameters.numberOfRowFromTableProject); // for Automation = 1

        await myProjectSettingsObjects.clickOnActionViewProject();
        await browser.driver.sleep(1000);
        expect(await myProjectSettingsObjects.getTextFromProjectTitle()).toEqual(myParameters.textFromFindProjects);  //Automation
        await myProjectSettingsObjects.clickOnProjectBackButton();

    })
  
    xit ('Notifications Tab',async () =>{

        await myNotificationsObjects.clickOnNotificationsTab();
        await browser.driver.sleep(1000);
        await myNotificationsObjects.verifyNotificationTab();
        await myNotificationsObjects.isTogglesOn();

        await myNotificationsObjects.veryfiNumberOfElementsInNotificationsTable();

        await myNotificationsObjects.checkYesTextIsPresent();
       //await myNotificationsObjects.setOptionToNo();
        await browser.driver.sleep(1000);
        await myNotificationsObjects.isYesOptionOn();
        
        await browser.driver.sleep(2000);
        await myNotificationsObjects.setOptionToNo().then(async () => {
            await myNotificationsObjects.isNoOptionOn();
        })             
        //Logs elements from the table.
        //await myNotificationsObjects.logToConsoleElementsFromNoificationTable();       
    })     

    it ('Upload Tab',async () =>{

        await browser.driver.sleep(1000);

        await myUploadObjects.clickOnUploadTab();
        await browser.driver.sleep(1000);


    })

    // afterAll(async function () { 
    //     console.log("in logout");                         
    //     browser.waitForAngularEnabled(false);
    //     await myLoginObjects.clickOnLogOutButton();
    //     console.log("Exiting Browser");
    //     //browser.close();
    //    // browser.driver.close();
    //    // browser.quit();
    //     //browser.sleep(40000);
    //     browser.executeScript('window.sessionStorage.clear();'); //clear session
    //     browser.executeScript('window.localStorage.clear();'); 
    // });

})