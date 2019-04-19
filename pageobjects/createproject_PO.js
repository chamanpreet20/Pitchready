var createproj_objects=function(){
    var linkText1=element(by.linkText('New Project'));
	var projectname = element(by.name('name'));
	var clientMDname = element.all(by.css("input[class*=form-control]"));
    var optionsector = element(by.cssContainingText("Select[class*='form-control'] option","Healthcare"));
    var optiondealtype = element(by.cssContainingText("Select[class*='form-control'] option","Pitch"));
    var optionprojecttype = element(by.cssContainingText("Select[class*='form-control'] option","Powerpoint"));
    var optionsecurity = element(by.cssContainingText("Select[class*='form-control'] option","Public"));
    var date = element(by.className('dateText'));
	var datefield = element.all(by.css("button[class='btn btn-sm btn-default']"));
	var buildproject1 = element(by.css("button[class='btn btn-success buildProject']"));
	var dialogbox = element.all(by.css("div[class='row']")).get(6);
	var OKbuttontest =element(by.buttonText('OK'));
	var projecttitle=element(by.css("div[class*='title-inside']"));
    var logout=element(by.css("img[class*='exit-icon']"));
    
    var SlideContainer = element(by.className("clone-slides-container__bd"));
    //element(by.css("button[class='btn-save']"))
    
    
    this.clickonnewproject= async function(){
        await linkText1.click();
     };

    this.setprojectname= async function(name){
     await projectname.sendKeys(name); 
     };

    this.setclientname= async function(name){
     await clientMDname.get(1).sendKeys(name);
    };
   
    this.setmdname= async function(name){
        await clientMDname.get(2).sendKeys(name);
       };
    
    this.selectsector=async function(){
        await optionsector.click();
      
    };
    this.selectdeal=async function(){
        await optiondealtype.click();
    };

    this.selectprojtype=async function(){
        await optionprojecttype.click();
    };
       
    this.setduedate=async function(){
        await date.click();
        await datefield.get(0).click();
       
    };

    this.selectsecurity=async function(){
        await optionsecurity.click();
    };

    
 
   

    }
module.exports= new createproj_objects();