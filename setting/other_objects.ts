import { element, $, $$, browser, ExpectedConditions,By } from 'protractor';
import { async } from 'q';
const EC = ExpectedConditions;



export class ProjectObjects {

    
    public navigateToPage() {
        return browser.get("https://fs-pitchflow.evalueserve.com/adfs/ls/idpinitiatedsignon.aspx?loginToRp=https://pitchflow.evalueserve.com/cs/api").then(() => {
            browser.wait(EC.visibilityOf($('#userNameInput')), 5000, 'Page is not displayed');
        })
    }


//Settings

public pichflowUser(){
    return  element(By.xpath('//label[@class="username"]'));
}

public async clickOnPichflowUser() {
    return browser.wait(EC.visibilityOf(this.pichflowUser()),3000).then (async() => {
        await this.pichflowUser().click().then(async() =>{
            await browser.wait(EC.visibilityOf(this.settings()), 500, 'No "settings" element');
        })
         
    })
}

public settings(){
    return  element(By.xpath('//a[@class="settings"]'));
}

public clickOnSettings() {
    return this.settings().click()
}


}