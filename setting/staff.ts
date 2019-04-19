import { element, $, $$, browser, ExpectedConditions, By } from 'protractor';
const EC = ExpectedConditions;


export class StaffObjects {

  
	public linkText1=element(By.linkText('New Project'));
	public name = element(By.name('name'));
	public formpage = element.all(By.css("input[class*=form-control]"));
    public optionsector = element(By.cssContainingText("Select[class*='form-control'] option","Healthcare"));
    public optiondealtype = element(By.cssContainingText("Select[class*='form-control'] option","Pitch"));
    public optionprojecttype = element(By.cssContainingText("Select[class*='form-control'] option","Presentation"));
    public optionsecurity = element(By.cssContainingText("Select[class*='form-control'] option","Public"));
    public date = element(By.className('dateText'));
    public datefield = element.all(By.css("button[class='btn btn-sm btn-default']"));

  

    //Staff
    
    public findStaff(){
        return  element(By.xpath('//input[@placeholder="Find Staff"]'));
    }

    public clickOnFindStaff() {
        return this.findStaff().click()
    }

    public typeTextIntoFindStaff(text: string) {
        return this.findStaff().sendKeys(text);
    }

    public getAttributePlaceholderFromFindStaff() {
        return this.findStaff().getAttribute('placeholder');
    }
    public getAttributeValueFromFindStaff(){
        return this.findStaff().getAttribute('value');
    }

    public async getNuberOfRowFromTableStaff(){
        let row = element.all(By.xpath('//div/table/tbody'));
        let value = await row.all(By.tagName("tr")).count();
        console.log("Count of row:"+ value); 
        return value;         
    }

    public staffPanelHeader(){
        return  element(By.xpath('//div[@class="grid"]//table//thead//tr'));
    }
    
    public accessNavItem(){
        return  element(By.partialLinkText('Access'));
    }
       
    public comapanyDirectoryNavItem(){
        return  element(By.partialLinkText('Company directory'));
    }
    
    public async getTextValueFromHeaderOfStaff(){
        return await element(By.xpath('//h3[@class="staffHeading"]')).getText().then(await function(mytext){
            return mytext;
        })
    }

    public previous(){
        return  element(By.xpath('//a[contains(text(),"Previous")]'));
    }

    public next(){
        return  element(By.xpath('//a[contains(text(),"Next")]'));
    }
    
    
    public async verifyStaffTab() {
              
            expect( await this.staffPanelHeader().isDisplayed()).toBe(true) &&
            expect( await this.accessNavItem().isDisplayed()).toBe(true) &&
            expect( await this.comapanyDirectoryNavItem().isDisplayed()).toBe(true) &&
            expect( await this.previous().isDisplayed()).toBe(true) &&
            expect( await this.next().isDisplayed()).toBe(true) &&
            expect( await this.getTextValueFromHeaderOfStaff()).toEqual('Staff') 
    }

// Action Button / Access Privilages

    public actionButton(){
        return  element(By.xpath('//button[contains(@class, "btn btn-success actionButton")]'));
    }

    public clickOnActionButton() {
        return this.actionButton().click()
    }

    public async getTextAccessPrivileges(){
        return await element(By.xpath('//h3[@class="accessHeading"]')).getText().then(await function(mytext){
            return mytext;
        })
    }

    public radioButtonAdministrator(){
        return  element(By.xpath('//input[@id="Admin"]'));
    }
    public radioButtonActive(){
        return  element(By.xpath('//input[@id="active"]'));
    }

    public buttonCancelfromAction(){
        return  element(By.xpath('//button[@class="cancel"]'));
    }

    public buttonApplyfromAction(){
         return  element(By.xpath('//button[contains(text(),"Apply")]'));
    }

    public clickOnButtonCancelfromAction() {
        return this.buttonCancelfromAction().click()
    }
    
    public async verifyAccessPrivileges() {
        expect( await this.getTextAccessPrivileges()).toEqual('Access Privileges:')&&
        expect (await this.radioButtonAdministrator().getAttribute('value')).toEqual('enabled')&&
        expect (await this.radioButtonActive().getAttribute('value')).toEqual('enabled')&&
        expect( await this.buttonCancelfromAction().isDisplayed()).toBe(true)&&
        expect( await this.buttonApplyfromAction().isDisplayed()).toBe(true)
    }
    


    


}
