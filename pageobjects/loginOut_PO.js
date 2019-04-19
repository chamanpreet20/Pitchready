var loginpage_objects=function(){
    var username=element(by.name('UserName'));
    var password=element(by.name('Password'));
    var submitbtn=element(by.id('submitButton'));
    var loggedinuser=element(by.css("label[class*='username']"));
    var logout=element(by.css("img[class*='exit-icon']"));
   // var logo=element(by.className("logo"));
    var evslogo=element(by.css("img[alt='Logo Evalueserve Pitchflow']"));
    
    this.get= async function(URL){
        await browser.get(URL);
    };
    
     this.enterUname= async function(name){
         await username.sendKeys(name);
     };
     
     this.enterPassword= async function(pwd){
        await password.sendKeys(pwd);
    };
    
    this.clickSignIn = async function(){
      await submitbtn.click();
      //.then(function(){
        //browser.sleep(60000);
      //});
    };
    
    this.getloggedinuser = function(){
        loggedinuser.getText().then(function(text){
            console.log(text);
        });
        return loggedinuser.getText();
    };

    this.clicklogout= function(){
        console.log("In logout object");
         logout.click();
         console.log("Clicked logout");
    };
    this.clickonlogo=async function(){
        await evslogo.click();
    };

};
module.exports=new loginpage_objects();