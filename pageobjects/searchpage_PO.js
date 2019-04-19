

var searchpage_objects = function(){


var searchfield = element.all(by.css("input[placeholder='Search Projects']")).get(1);
var presentationtypedrpdwn = element(by.css("span[class='dropdown-items-label']"));
var selectpresenationtype = element.all(by.css(".dropdown-menu  li"));
//var option= element(by.cssContainingText("ul[class*='dropdown-menu'] li","/Template*/"));
var presentationTitle= element.all(by.className("presentation-title-container"));
var templatetitle = element(by.className("title"));
var parentflagAll =element(by.css("preview-container"));
var flagAll = element(by.className("btn-select-all"));
//var flagAll= element(by.cssContainingText("span[class='btn-select-all']","Flag all"));
var CloneToNew = element(by.className("btn-clone")); 
var SlideContainer1 = element(by.className("clone-slides-container__bd"));
var projectname = element(by.name('name'));
//var projectname = element(by.xpath("//input[@name='name']"));
var datefield = element.all(by.css("button[class='btn btn-sm btn-default']"));
var calendar=element(by.className("icon-calendar-icon"));
var savebtn =element(by.className("btn-save"));

this.searchresultheader = element(by.cssContainingText("div[class='search-results__header'] span"," Documents Found"));
this.selectedpresentationtype = element(by.css("div[class='selected-dropdown-item'] span"));
this.SlideContainer = element(by.className("clone-slides-container__bd"));
this.modaltitle=element(by.css("div[class='clone-slides-container__bd'] h1"));

//--------------------1.Search for template---------------
this.entersearchstring= async function(searchname){
    console.log("In search string");
   await searchfield.sendKeys(searchname);
   browser.actions().sendKeys(protractor.Key.ENTER).perform();
};

//--------------------2.filter templates from Viewall>>presentation type>>select 'Template'---------
this.filterbypresentationtype = async function(presenttype){
    var regex = RegExp(presenttype,'i');
    await presentationtypedrpdwn.click();
    browser.sleep(2000);
    /*await selecttypetemplate.getText().then(function(menus){
        expect(menus.length).toBe(2);
        console.log(menus);
       // option.click();
       
         });*/
    // var result = regex[Symbol.match](menus);
    //  result.click();
    //await selecttypetemplate.get(1).click();
        await selectpresenationtype.filter(function(elem){
            return elem.getText().then(function(text){
                console.log(text);
                var result = regex[Symbol.match](text);
                console.log(result);
                return result;
            });
        }).click();
    console.log("Selected presentation type");
    browser.sleep(8000);   
};

//-----------------------------3.Click on first template from results---------------

this.selectPPT = async function(searchname){
    var regex = RegExp(searchname,'i');
    await presentationTitle.filter(function(elem){
    return  elem.element(templatetitle.locator()).getText().then(function(text){
        console.log(text);
        //console.log("searched template" +searchtemplate);
        //console.log(regex.test(text));
        //console.log(text.length);
        var result = regex[Symbol.match](text);
        console.log(result);
        return result;
    }); 
   }).first().click();
   browser.sleep(5000);
};

this.selectslides =  async function(name){
    //browser.waitForAngularEnabled(false);
    await flagAll.click();
    //await parentflagAll.element(by.cssContainingText("span[class='btn-select-all']","Flag all")).click();
    browser.sleep(5000);
    await CloneToNew.click().then(function(){
        browser.sleep(5000);
        projectname.sendKeys(name);
    });
    browser.sleep(20000);
}

this.selectslides1 =  async function(){
    //browser.waitForAngularEnabled(false);
    await flagAll.click();
    //await parentflagAll.element(by.cssContainingText("span[class='btn-select-all']","Flag all")).click();
    browser.sleep(3000);
    await CloneToNew.click();
    browser.sleep(50000);
}

this.setduedate = async function(){
    await SlideContainer1.element(calendar.locator()).click().then(function(){
        datefield.get(0).click().then(function(){
            browser.sleep(5000);
        })   
    });
}

this.clickonsave=async function(){
    await savebtn.click();
    browser.sleep(5000);
};



};
module.exports=new searchpage_objects();