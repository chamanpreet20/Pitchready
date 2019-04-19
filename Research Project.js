describe('to test the Pitchflow', function () {
    var obj = require("./project.constant.js");
    var d = require("./project.data.js");
    //require("C:/Users/Admin/source/repos/Pitchflow-Dev2/Evalueserve.Pitchflow.Frontend/pitchflow/e2e/search project.js");

   /* beforeAll(function () {                          //The beforeAll function is called only once before all the specs in describe are run
        browser.waitForAngularEnabled(false);
        obj.getURL();
        obj.username.sendKeys(d.datadrive.username);
        obj.password.sendKeys(d.datadrive.password);
        obj.submitButton.click();
    });*/

    it('search for the archived project', function test() {      //This is copied from search project.js.Here we are entering searchname(from project.data) and trying to search for archived project
        browser.waitForAngularEnabled(false);
        var EC61 = protractor.ExpectedConditions;
        var buttonClickable61 = EC61.elementToBeClickable(obj.searchfield);
        browser.wait(buttonClickable61, 8000).then(function () {
            expect(browser.getCurrentUrl()).toContain(d.datadrive.Urllink2);
            obj.searchfield.sendKeys(d.datadrive.searchname);
            browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                var EC62 = protractor.ExpectedConditions;
                var buttonClickable62 = EC62.presenceOf(obj.presentationTitle);
                browser.wait(buttonClickable62, 8000).then(function () {
                    obj.presentationTitle.filter(function (item2) {
                        return item2.element(by.className("title")).getText().then(function (text) {
                            console.log(text);
                            return text == d.datadrive.searchname;
                        });
                    }).first().click();
                });
            });
        });
    }, 6000000);


    it('Adding to Research', function test() {                   //project which we have searched in above test case, is added to research
        browser.waitForAngularEnabled(false);
        obj.flagAll.click().then(function () {
            var EC73 = protractor.ExpectedConditions;
            browser.wait(EC73.elementToBeClickable(obj.AddTo), 5000).then(function () {
                obj.AddTo.click().then(function () {
                    browser.sleep(5000).then(function () {
                        obj.flaggedSlides.element(by.css("span[class='dropdown-item']")).click().then(function () {
                            browser.sleep(5000);
                            obj.DropdownItem3.click().then(function () {
                                browser.sleep(5000);
                                obj.checkboxes.filter(function (dropdown) {
                                    return dropdown.getText().then(function (dropdown1) {
                                        //console.log(dropdown1)
                                        return dropdown1 == d.datadrive.newname
                                    })
                                }).first().click();
                                browser.sleep(5000);
                                element(by.css("input[placeholder='Research file name']")).sendKeys(d.datadrive.ResearchName).then(function () {
                                    element(by.className("btn btn-primary btn-add-to")).click().then(function () {
                                        browser.sleep(5000);
                                        obj.flaggedSlides.element(by.css("div[class='transfer-summary']")).getText().then(function (summary) {
                                            console.log(summary)
                                            expect(summary).toBe("Added to" + "\n" + d.datadrive.ResearchName + "\n" + "as Research in project");
                                        });
                                    });
                                });
                                obj.flaggedSlides.element(by.className("close-menu")).click();
                            });
                        });
                    });
                });
            });
        });
    }, 600000);


    it('search for research', function test() {
        browser.waitForAngularEnabled(false);
        obj.evalueservelogo1.click();
       // obj.evalueservelogo1.click().then(function () {
        browser.sleep(5000).then(function () {
            obj.projectDetails.filter(function (item2) {              //searching for a project which are having a slides in research
                return item2.element(by.css("h3[class*='projectName']")).getText().then(function (text123) {
                    //console.log(text123);
                    return text123 == d.datadrive.newname;
                });
            }).first().click();
            var EC2 = protractor.ExpectedConditions;
            browser.wait(EC2.elementToBeClickable(obj.ResearchButton), 15000).then(function () {
                obj.ResearchButton.click().then(function () {         //clicking on research folder
                    var EC73 = protractor.ExpectedConditions;
                    browser.wait(EC73.presenceOf(obj.researchtitle), 15000).then(function () {
                        obj.researchtitle.count().then(function (count1) {
                            console.log(count1);                      //finding out number of slides in research folder
                        });
                        obj.researchtitle.filter(function (title) {
                            return title.getText().then(function (title1) {
                                console.log(title1);                  //clicking on research title
                                return title1 == d.datadrive.ResearchName;
                            });
                        }).first().click().then(function () {
                            obj.activetab.element(by.className("btn-download")).click().then(function () {  //clicking on download button
                                var EC = protractor.ExpectedConditions;
                                browser.wait(EC.visibilityOf(obj.activetab.element(by.className("btn-remove"))), 8000).then(function () {
                                    obj.activetab.element(by.className("btn-remove")).click().then(function () {  //removing the slide from research folder
                                        // var EC74 = protractor.ExpectedConditions;
                                        // browser.wait(EC74.visibilityOf(obj.researchtitle), 15000);
                                        browser.sleep(8000).then(function () {                                 
                                            var count3 = obj.count1 - 1;                                           //finding the count after removing 1 slide
                                            obj.researchtitle.count().then(function (count2) {
                                                console.log(count2);                                              
                                                expect(count2).toBeTruthy(count3);
                                            });
                                        });
                                    })
                                });
                            });

                        });
                    });
                });
            });
        });
    }, 600000);



    /*afterAll(function () {                            //After all will called after when all the specs in decribe get run
        browser.waitForAngularEnabled(false);       
        obj.logout.click();
        
        // .then(function(){
        //     browser.sleep(5000);
        // })
    });*/

});