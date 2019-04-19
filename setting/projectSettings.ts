import { element, $, $$, browser, ExpectedConditions, By } from 'protractor';
const EC = ExpectedConditions;


export class ProjectSettingsObjects {

    public project(){
        return  element(By.xpath('//div[contains(@class, "Projects item")]'));
    }

    public clickOnProjectTab() {
        return this.project().click()
    }

    public activeNavItem(){       
        return  element(By.xpath('//app-projects-list/nav/a[1]'));       
    }

    public clickOnActiveNavItem() {
        return this.activeNavItem().click()
    }

    public archivedNavItem(){          
        return  element(By.xpath('//app-projects-list/nav/a[2]'));
               
    }

    public clickOnArchivedNavItem() {
        return this.archivedNavItem().click()
    }
  
    public findProject(){             
         return  element(By.xpath('//input[@placeholder="Find Projects"]'));
                
     }

     public getAttributePlaceholderFromFindProject() {
        return this.findProject().getAttribute('placeholder');
    }

     public clickOnFindProject() {
        return this.findProject().click()
    }

    public typeTextIntoFindProject(text: string) {
        return this.findProject().sendKeys(text);
    }


    public async getNuberOfRowFromTableProject(){
        let row = element.all(By.xpath('//div[@class="grid"]//table//tbody'));
        let value = await row.all(By.tagName("tr")).count();
        console.log("Count of row:"+ value); 
        return value;         
    }


    public projectPanelHeader(){
        return  element(By.xpath('//th[contains(@class, "header")]'));
    }

    
    public previous(){
        return  element(By.linkText('Previous'));
    }
  

    public next(){
        return  element(By.xpath('//a[contains(text(),"Next")]'));
    }

    public clickOnNext() {
        return this.next().click();
    }

    public async getTextValueFromHeaderOfProjectSettings(){
        return await element(By.xpath('//h3[@class="staffHeading"]')).getText().then(await function(mytext){
            return mytext;
        })
    }

    public clickOnActionViewProject() {
        return element(By.xpath('//button[@class="btn btn-success actionButton viewButton"]')).click()
    }

    public projectTitle(){
        return  element(By.xpath('//div[contains(@class, "title-inside")]'));
    }
    
    public async getTextFromProjectTitle(){
        return  this.projectTitle().getText().then(await function(mytext){
            return mytext;
        })
    }

    public clickOnProjectBackButton(){
        return  element(By.xpath('//button[@class="stop-presentation-btn button"]')).click();
    }


    


    public  verifyProjectTab(){
              
            expect<any>(  this.projectPanelHeader().isDisplayed()).toBe(true) &&
            expect<any>(  this.activeNavItem().isDisplayed()).toBe(true) &&
            expect<any>(  this.archivedNavItem().isDisplayed()).toBe(true) &&
            expect<any>(  this.previous().isDisplayed()).toBe(true) &&
            expect<any>(  this.next().isDisplayed()).toBe(true) &&
            expect<any>(  this.getTextValueFromHeaderOfProjectSettings()).toEqual('Projects') 
    }
    

    
}