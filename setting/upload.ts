import { element, $, $$, browser, ExpectedConditions, By } from 'protractor';
const EC = ExpectedConditions;

export class UploadObjects {

    public uploadTab(){
        return  element(By.xpath('//div[contains(@class, "content item")]'));
    }

    public clickOnUploadTab() {
        return this.uploadTab().click()
    }

    

    
}