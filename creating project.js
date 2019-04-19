describe('to test the Pitchflow project', function () {
    
    var obj = require("./project.constant.js");
    var d = require("./project.data.js");


    it('login to a application', function () {   //login to a application by entering a username and password
        browser.waitForAngularEnabled(false);
        obj.getURL();   
        var EC = protractor.ExpectedConditions;
        var buttonClickable = EC.elementToBeClickable(obj.username);
        browser.wait(buttonClickable, 5000).then(function () {
            obj.username.sendKeys(d.datadrive.username);
            obj.password.sendKeys(d.datadrive.password);
            obj.submitButton.click();
        });
        expect(browser.getTitle()).toContain(d.datadrive.pagetitle);
    }, 6000000);


    it('clicking on new project button', function () {      //To click on New Project button
        browser.waitForAngularEnabled(true);
        obj.linkText1.click();
        expect(browser.getCurrentUrl()).toContain(d.datadrive.urllink);
    }, 60000);



    it('creating a new project', function () {    //creating a new project by entering an all required fields
        browser.waitForAngularEnabled(false);
        var EC1 = protractor.ExpectedConditions;
        var buttonClickable1 = EC1.elementToBeClickable(obj.name);
        browser.wait(buttonClickable1, 11000).then(function () {
            obj.name.sendKeys(d.datadrive.name);
            obj.formpage.get(1).sendKeys(d.datadrive.formpage1);
            obj.formpage.get(2).sendKeys(d.datadrive.formpage2);
            obj.optionsector.click();
            obj.optiondealtype.click();
            obj.optionprojecttype.click();
            obj.optionsecurity.click();
            obj.date.click().then(function () {
            obj.datefield.get(0).click();
            });
            var EC4 = protractor.ExpectedConditions;
            browser.wait(EC4.elementToBeClickable(obj.buildproject1), 1500).then(function () {
                obj.buildproject1.click().then(function () {
                    obj.dialogbox.element(by.buttonText('OK')).click().then(function () {
                        var EC2 = protractor.ExpectedConditions;
                        browser.wait(EC2.urlContains(d.datadrive.Urllink1), 15000).then(function () {
                            obj.evalueservelogo1.click().then(function () {
                                var EC3 = protractor.ExpectedConditions;
                                var buttonClickable2 = EC3.elementToBeClickable(obj.projectName);
                                browser.wait(buttonClickable2, 15000).then(function () {
                                    obj.projectDetails.filter(function (item2) {                //On pitchflow homepage i am searching for project which i have created and hitting on it
                                        return item2.element(by.css("h3[class*='projectName']")).getText().then(function (text123) {
                                            return text123 == d.datadrive.name
                                        });
                                    }).first().click();
                                });
                                var EC4 = protractor.ExpectedConditions;
                                var buttonClickable3 = EC4.elementToBeClickable(obj.projecttitle);
                                browser.wait(buttonClickable3, 15000).then(function () {
                                    expect(obj.projecttitle.getText()).toBe(d.datadrive.name)
                                });
                            });
                        });
                    });
                });
            });
        });
    }, 60000);

    // afterAll(function () {
    //     browser.waitForAngularEnabled(false);
    //     obj.logout.click();
    // });


});




