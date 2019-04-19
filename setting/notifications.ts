import { element, $, $$, browser, ExpectedConditions, By } from 'protractor';
const EC = ExpectedConditions;


export class NotyficationsObjects {

    public notifications(){
        return  element(By.xpath('//div[contains(@class, "Notifications item")]'));
    }

    public clickOnNotificationsTab() {
        return this.notifications().click()
    }

    public async getTextValueFromHeaderOfNotificationsSettings(){
        return await element(By.xpath('//h1[@class="notification-hd__title"]')).getText().then(await function(mytext){
            return mytext;
        })
    }

    public getAllElementsFromNoificationTable(){ 
        return  element.all(By.xpath (' //div[contains(@class, "configList")]//*/span[contains(@class, "notification-name")]'));
    }

    public async logToConsoleElementsFromNoificationTable(){
        await this.getAllElementsFromNoificationTable().each(async function (element, index){
             await element.getText().then(function(text){
               return console.log(index,text);
           });
       });

    }

    public veryfiNumberOfElementsInNotificationsTable(){
        let numberOfPositions: number; 
        this.getAllElementsFromNoificationTable().count().then(function(numberOfElements) {
            numberOfPositions = numberOfElements;
        }).then(() => {
            expect(numberOfPositions).toEqual(50);
        })
    }

    public async getInAppTextValueFromHeaderOfNotificationsSettings(){
        return await element(By.xpath('//span[contains(text(),"In-App")]')).getText().then(await function(mytext){
            return mytext;
        })
    }

    public async getEmailTextValueFromHeaderOfNotificationsSettings(){
        return await element(By.xpath('//div[@class="notification-type-hd__title"]//span[contains(text(),"Email")]')).getText().then(await function(mytext){
            return mytext;
        })
    }

    public inAppToggle(){
        return  element(By.xpath('//div[2]/div[1]/div[1]/div[1]/ps-toggle[1]/div/div'));
    }

    public emailToggle(){
        return  element(By.xpath('//div[2]/div[2]/div[1]/div[1]/ps-toggle[1]'));
    }


    public isTogglesOn(){
        let toggle = this.inAppToggle();
        expect<any>(toggle.getText()).toEqual('ON');
        toggle = this.emailToggle();
        expect<any>(toggle.getText()).toBe('ON');
        
    }


    public cancelButton(){
        return  element(By.xpath('//button[@class= "btn-cancel"]'));
    }
    public saveButton(){
        return  element(By.xpath('//button[@class= "btn-save"]'));
    }

    public async getEmailAdressTextValue(){
        return await element(By.xpath('//div[@class="value"]')).getText().then(await function(mytext){
            return mytext;
        })
    }

    public yesOption () {
        return  element.all(By.xpath (' //ps-bool-radio[1]//div[1]//div[1]//div[2]'));
    }

    public async checkYesTextIsPresent (){
       let list = this.yesOption();

        await list.each( async function(element) {
         await (element.getText()).then( async function (text) {
          await expect (text).toEqual('Yes')     
          //console.log(text);
        })   
      });        
    }

    public async isYesOptionOn   (){
        let list = element.all(By.xpath ('//ps-bool-radio[1]//div[1]//div[1]//div[2]/div'));
         await list.each(async function (element){
             await element.getAttribute('class').then( async function (atr){
                //console.log(atr);
                await expect (atr.toString()).toEqual('circle full')
            })
        })

    }


    public setOptionToNo(){
        return  element(By.xpath('//div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/ps-bool-radio[1]/div[1]/div[1]/div[1]')).click();
    }

    
    public isNoOptionOn (){
        expect <any> (element(By.xpath('//div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/ps-bool-radio[1]/div[1]/div[1]/div[1]')).getText()).toBe('No')&&
        expect  (element(By.xpath('//div[contains(@class, "option-container")][1]/div[contains(@class, "circle full")]')).getAttribute('class')).toMatch('circle full');
      
    }


    public  verifyNotificationTab(){
              
        expect<any>(  this.getTextValueFromHeaderOfNotificationsSettings()).toEqual('Notifications')&&
        expect<any>(  this.getInAppTextValueFromHeaderOfNotificationsSettings()).toEqual('In-App')&&
        expect<any>(  this.getEmailTextValueFromHeaderOfNotificationsSettings()).toEqual('Email')&&
        expect<any>(  this.inAppToggle().isDisplayed()).toBe(true) &&
        expect<any>(  this.emailToggle().isDisplayed()).toBe(true) &&
        expect<any>(  this.saveButton().isDisplayed()).toBe(true) &&
        expect<any>(  this.cancelButton().isDisplayed()).toBe(true) &&
        expect<any>(  this.getEmailAdressTextValue()).toEqual('cs_user@mypresentation.space')
        
}




}



