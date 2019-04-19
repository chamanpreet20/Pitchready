describe('to test the Pitchflow', function () {
    var obj = require("./project.constant.js");
    var d = require("./project.data.js");


    beforeAll(function () {   //The beforeAll function is called only once before all the specs in describe are run
        browser.waitForAngularEnabled(false);
        obj.getURL();
        obj.username.sendKeys(d.datadrive.username);
        obj.password.sendKeys(d.datadrive.password);
        obj.submitButton.click();
    });


    it('search for the archived project', function test() {   //Here we are entering searchname(from project.data) and trying to search for archived project
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



    xit('Actions on archived project', function () {     
        browser.waitForAngularEnabled(false);
        obj.IndexPanel.all(by.tagName("a")).count().then(function (count1) {
            console.log(count1)
        });
        obj.IndexPanel.all(by.tagName("a")).each(function (pptsection) {
            pptsection.getText().then(function (pptsection1) {   // index of a search archived project
                console.log(pptsection1);
            });
            pptsection.click().then(function () {
                browser.sleep(2000);
            });
        });
        obj.RefineSearchPanel.click().then(function () {        //refine search of a search archived project
            obj.RefineSearch.count().then(function (count) {
                console.log(count);
            });
            obj.RefineSearch.each(function (pptsection2) {
                pptsection2.getText().then(function (pptsection3) {
                    console.log(pptsection3);
                });
            });
            obj.RefineSearch.filter(function (pptsection4) {
                return pptsection4.isDisplayed();
            }).click();
        });
    }, 6000000);



    xit('Adding slides to created project', function () {
        browser.waitForAngularEnabled(false);
        obj.flagAll.click().then(function () {                   //clicking on flag All icon
            var EC71 = protractor.ExpectedConditions;
            browser.wait(EC71.elementToBeClickable(obj.AddTo), 5000).then(function () {
                obj.AddTo.click().then(function () {             //clicking on Add to icon
                    // var EC70 = protractor.ExpectedConditions;
                    // browser.wait(EC70.visibilityOf(element(by.className("flagged-slides-menu-host"))), 5000)
                    browser.sleep(5000).then(function () {
                        obj.flaggedSlides.element(by.css("span[class='dropdown-item']")).click().then(function () {  
                            browser.sleep(5000);              
                            obj.DropdownItem0.click().then(function () {         //selecting the presentation from dropdown
                                browser.sleep(5000);
                                obj.checkboxes.filter(function (dropdown) {
                                    return dropdown.getText().then(function (dropdown1) {    
                                        console.log(dropdown1)
                                        return dropdown1 == d.datadrive.newname       //fetching the project name from project.data new name and adding the slides over there
                                    })
                                }).first().click();
                                browser.sleep(5000);
                                obj.AddToPresentation.click().then(function () {
                                    browser.sleep(25000);
                                    obj.flaggedSlides.element(by.css("div[class='transfer-summary']")).getText().then(function (summary) {
                                        console.log(summary)                                        //printing the message
                                        expect(summary).toBe("Added to" + "\n" + d.datadrive.newname + "\n" + "as Presentation");
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


    xit('Adding to favourites', function () {
        browser.waitForAngularEnabled(false);
        var EC71 = protractor.ExpectedConditions;
        browser.wait(EC71.elementToBeClickable(obj.AddTo), 5000).then(function () {
            obj.AddTo.click().then(function () {                  //clicking on Add to icon
                // var EC70 = protractor.ExpectedConditions;
                // browser.wait(EC70.visibilityOf(element(by.className("flagged-slides-menu-host"))), 5000)
                browser.sleep(5000).then(function () {
                    obj.flaggedSlides.element(by.css("span[class='dropdown-item']")).click().then(function () {
                        browser.sleep(5000);                           //selecting the favorities in project from dropdown
                        obj.DropdownItem2.click().then(function () {
                            browser.sleep(5000);
                            obj.AddToPresentation.click().then(function () {
                                browser.sleep(5000);
                                obj.flaggedSlides.element(by.css("div[class='transfer-summary']")).getText().then(function (summary) {
                                    console.log(summary)                //printing the message
                                    expect(summary).toBe("Added to" + "\n" + "favorites" + "\n" + "as Favorites");
                                });
                            });
                            obj.flaggedSlides.element(by.className("close-menu")).click();
                        });
                    });
                });
            });
        });
    }, 6000000);


    xit('Adding to Research', function test() {
        browser.waitForAngularEnabled(false);
        //obj.flagAll.click().then(function () {
            var EC73 = protractor.ExpectedConditions;
            browser.wait(EC73.elementToBeClickable(obj.AddTo), 5000).then(function () {
                obj.AddTo.click().then(function () {         //clicking on Add to icon
                    browser.sleep(5000).then(function () {
                        obj.flaggedSlides.element(by.css("span[class='dropdown-item']")).click().then(function () {
                            browser.sleep(5000);                         //selecting the Research in project from dropdown
                            obj.DropdownItem3.click().then(function () {
                                browser.sleep(5000);
                                obj.checkboxes.filter(function (dropdown) {
                                    return dropdown.getText().then(function (dropdown1) {
                                        console.log(dropdown1)          
                                        return dropdown1 == d.datadrive.newname
                                    })
                                }).first().click();
                                browser.sleep(5000);
                                element(by.css("input[placeholder='Research file name']")).sendKeys(d.datadrive.ResearchName).then(function () {
                                    element(by.className("btn btn-primary btn-add-to")).click().then(function () {    //entering the research project name
                                        browser.sleep(5000);
                                        obj.flaggedSlides.element(by.css("div[class='transfer-summary']")).getText().then(function (summary) {
                                            console.log(summary)            //printing the message
                                            expect(summary).toBe("Added to" + "\n" + d.datadrive.ResearchName + "\n" + "as Research in project");
                                        });
                                    });
                                });
                                obj.flaggedSlides.element(by.className("close-menu")).click();

                           // });
                        });
                    });
                });
            });
        });
    }, 600000);



    it('clonning to new project', function () {       //clicking on Add to new button and clonning a new project and entering all the mandatory fields
        browser.waitForAngularEnabled(false);
        obj.flagAll.click().then(function () {      
        browser.sleep(5000);
        obj.CloneToNew.click().then(function () {
            browser.sleep(5000);
            obj.name.sendKeys(d.datadrive.newproject);
            obj.SlideContainer.element(by.className("icon-calendar-icon")).click().then(function () {
                obj.datefield.get(0).click().then(function () {
                    browser.sleep(5000);
                })
            });
            // var EC66 = protractor.ExpectedConditions;
            // browser.wait(EC66.elementToBeClickable(element(by.className("btn-save"))), 20000).then(function () {
            obj.SaveButton.click().then(function () {
                // var EC65 = protractor.ExpectedConditions;
                // var buttonClickable65 = EC65.invisibilityOf(element(by.className("modal-body")));
                // var buttonClickable66 = EC65.presenceOf(element(by.css("tab[class='active tab-pane']")));
                //  browser.wait(EC65.and(buttonClickable65, buttonClickable66), 20000).then(function () {
                browser.sleep(18000);
            });
            browser.sleep(20000).then(function () {
                obj.evalueservelogo1.click().then(function () {
                    // var EC3 = protractor.ExpectedConditions;
                    // var buttonClickable2 = EC3.elementToBeClickable(obj.projectName);
                    // browser.wait(buttonClickable2, 15000)
                    browser.sleep(20000).then(function () {
                        obj.projectDetails.filter(function (item2) {
                            return item2.element(by.css("h3[class*='projectName']")).getText().then(function (text123) {
                                return text123 == d.datadrive.newproject;
                            });
                        }).first().click();
                    });
                    var EC4 = protractor.ExpectedConditions;
                    var buttonClickable3 = EC4.elementToBeClickable(obj.projecttitle);
                    browser.wait(buttonClickable3, 15000).then(function () {
                        expect(obj.projecttitle.getText()).toBe(d.datadrive.newproject)
                    });
                    //});
                    //}); });
                    //});
                });
            });
        });
    }, 6000000);
});

    afterAll(function () {                        //After all will called after when all the specs in decribe get run
        browser.waitForAngularEnabled(false);
        obj.logout.click();
     });

});