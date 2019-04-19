describe('to test the Pitchflow project', function () {
    var obj = require("./project.constant.js");
    var d = require("./project.data.js");

    // beforeAll(function () {                                   //beforeAll is from jasmine framework, is used to login to a pitchflow before all specs in describe gets execute
    //     browser.waitForAngularEnabled(false);
    //     obj.getURL();
    //      obj.username.sendKeys(d.datadrive.username);
    //      obj.password.sendKeys(d.datadrive.password);
    //     obj.submitButton.click();
    // });

    it('viewing the project', function () {                    //clicking on a project, which was created in creating project.js
        browser.waitForAngularEnabled(false);
                var EC6 = protractor.ExpectedConditions;
                var buttonClickable1 = EC6.elementToBeClickable(obj.projectName);
                browser.wait(buttonClickable1, 8000).then(function () {
                    obj.projectDetails.filter(function (item) {

                        return item.element(by.css("h3[class*='projectName']")).getText().then(function (text12) {
                            return text12 == d.datadrive.name;
                        })
                    }).first().element(by.css("i[class='glyphicon edit-icon']")).click().then(function () {
                        expect(browser.getCurrentUrl()).toContain('details');
                    })
                });
          }, 600000);

    it('archiving the project', function () {                 //edit the project and then select archived from the dropdown and hit save
        browser.waitForAngularEnabled(false);
        var EC23 = protractor.ExpectedConditions;
        var buttonClickable23 = EC23.elementToBeClickable(obj.name);
        browser.wait(buttonClickable23, 8000).then(function () {
            obj.optionedit.click();
            obj.buildproject1.click().then(function () {
                obj.dialogbox4.element(by.buttonText("OK")).click().then(function () {
                    var EC26 = protractor.ExpectedConditions;
                     browser.wait(EC26.urlContains(d.datadrive.Urllink2), 15000).then(function () {
                        obj.archivelink.click().then(function () {
                            // var EC27 = protractor.ExpectedConditions;
                            // var buttonClickable27 = EC27.elementToBeClickable(item1);
                            // browser.wait(buttonClickable27, 15000)
                                browser.sleep(10000).then(function () {
                                obj.projectDetails.filter(function (item1) {
                                    return item1.element(by.css("h3[class*='projectName']")).getText().then(function (text121) {
                                        return text121 == d.datadrive.name
                                    });
                                }).first().click();
                            });
                            
                                var EC49 = protractor.ExpectedConditions;
                                var buttonClickable49 = EC49.elementToBeClickable(obj.projecttitle);
                                browser.wait(buttonClickable49, 15000).then(function () {
                                    expect(obj.projecttitle.getText()).toBe(d.datadrive.name)
                            });
                        });
                    });
                });
            });
        }); 
    }, 600000);
 
   /* afterAll(function () {                                 //it will execute after all test suite will get executed
        browser.waitForAngularEnabled(false);
        obj.logout.click();
     });*/
     
});
