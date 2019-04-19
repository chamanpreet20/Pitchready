import { element, $, $$, browser, ExpectedConditions, By } from 'protractor';

export class LoginObjects {

    public loginUsername(){
        return  element(By.id('userNameInput'));
    }
    public typeTextIntoLoginUsername(text: string) {
        return this.loginUsername().sendKeys(text);
    }

    public loginPassword(){
        return  element(By.id('passwordInput'));
    }
    public typeTextIntoLoginPassword(text: string) {
        return this.loginPassword().sendKeys(text);
    }
    
    public loginSubmitButton(){
        return  element(By.id('submitButton'));
    }
    public clickOnLoginSubmitButton() {
        return this.loginSubmitButton().click()
    }
    
    public logoutButton(){
        return  element(By.css("img[class*='exit-icon']"));
    }
    public clickOnLogOutButton() {
        return this.logoutButton().click()
    }
}