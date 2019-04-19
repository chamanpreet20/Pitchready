describe('to test the Pitchflow project', function () {
    var obj = require("./project.constant.js");
    var d = require("./project.data.js");

    /*beforeAll(function () {   //logging to a pitchflow application
        browser.waitForAngularEnabled(false);
        obj.getURL();
        obj.username.sendKeys(d.datadrive.username);
        obj.password.sendKeys(d.datadrive.password);
        obj.submitButton.click();
    });*/

    it('viewing the project', function () {  // To search for a project which is created and to click on it
        browser.waitForAngularEnabled(false);
        var EC6 = protractor.ExpectedConditions;
        var buttonClickable1 = EC6.elementToBeClickable(obj.projectName);
        browser.wait(buttonClickable1, 8000).then(function () {
            obj.projectDetails.filter(function (item) {

                return item.element(by.css("h3[class*='projectName']")).getText().then(function (text12) {
                    return text12 == d.datadrive.name;
                })
            }).first().click();
        });
        var EC4 = protractor.ExpectedConditions;
        var buttonClickable3 = EC4.elementToBeClickable(obj.projecttitle);
        browser.wait(buttonClickable3, 15000).then(function () {
            expect(obj.projecttitle.getText()).toBe(d.datadrive.name)
        });
    }, 600000);


    xit('upload functionality', function () {      //To upload a powerpoint
        browser.waitForAngularEnabled(false);
        var EC7 = protractor.ExpectedConditions;
        var buttonClickable2 = EC7.elementToBeClickable(obj.uploadButton);
        browser.wait(buttonClickable2, 10000).then(function () {
            var path = require('path');
            absolutePath = path.resolve(__dirname, d.datadrive.fileToUpload);
            obj.uploadButton.click().then(function () {
                browser.sleep(5000);
                browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            })
            obj.typefile.sendKeys(absolutePath).then(function () {
                var EC8 = protractor.ExpectedConditions;
                var buttonClickable3 = EC8.elementToBeClickable(obj.SelectAllbutton);
                browser.wait(buttonClickable3, 10000).then(function () {
                    obj.SelectAllbutton.click();
                    obj.ReplaceAllbutton.click().then(function () {

                        var EC9 = protractor.ExpectedConditions;
                        var buttonClickable41 = EC9.presenceOf(obj.dialogbox2);
                        browser.wait(buttonClickable41, 8000).then(function () {
                            obj.dialogbox2.element(by.buttonText("OK")).click();
                        });
                    });
                });
            });
        });
    }, 600000);



    xit('Number of slides in project', function () {     //To count number of slides present in a project 
        //var EC10 = protractor.ExpectedConditions;
        //var buttonClickable4 = EC10.presenceOf(obj.pagecount);
        //browser.wait(buttonClickable4, 8000)
        browser.sleep(8000).then(function () {
            obj.pagecount.getText().then(function (pagecount1) {
                console.log(pagecount1);
                obj.result = "";
                for (let count of pagecount1) {
                    if (!isNaN(count)) {
                        obj.result = obj.result + '' + count;
                        console.log(obj.result);
                    };
                };
                expect(obj.result).toBeTruthy(d.datadrive.pagenumber);
            });
        });
    }, 600000);


    xit('comment functionality', function () {                        //To add a comment in a project
        browser.waitForAngularEnabled(false);
        //var EC63 = protractor.ExpectedConditions;
        //var buttonClickable63 = EC63.invisibilityOf(obj.toastMessage);
        //browser.wait(buttonClickable63, 8000)
        browser.sleep(5000).then(function () {
            obj.expandarrow.element(by.css("i[class*='pull-left glyphicon section-header-arrow menu-right']")).click();
            browser.actions().doubleClick(obj.Slide).perform().then(function () {
                var EC45 = protractor.ExpectedConditions;
                var buttonClickable55 = EC45.elementToBeClickable(obj.CommentIcon);
                browser.wait(buttonClickable55, 10000).then(function () {
                    obj.CommentIcon.click().then(function () {
                        var EC46 = protractor.ExpectedConditions;
                        var buttonClickable56 = EC46.elementToBeClickable(obj.addcomments);
                        browser.wait(buttonClickable56, 10000).then(function () {
                            obj.addcomments.click().then(function () {
                                browser.sleep(8000)
                                    //var EC15 = protractor.ExpectedConditions;
                                    //var buttonClickable42 = EC15.elementToBeClickable(obj.commentoptions);
                                    //browser.wait(buttonClickable42, 10000)
                                    .then(function () {
                                        //var foo = element(by.css("div[class='annotations-boxes-wrapper']"));
                                        expect(obj.slideimage.getSize()).toEqual(jasmine.objectContaining({
                                            width: 993,
                                            height: 744
                                        }));

                                        element(by.css("div[class='annotation-number big']")).isPresent().then(function (isDisplayed) {   //if comment is already present in a project,as per the script i am clicking on comment present
                                            if (isDisplayed) {
                                                browser.sleep(6000);
                                                //console.log("comment is displayed");

                                                element.all(by.css("div[class='annotation-number big']")).get(1).click().then(function () {
                                                    browser.sleep(5000);
                                                    var EC33 = protractor.ExpectedConditions;
                                                    var buttonClickable46 = EC33.presenceOf(element(by.buttonText("Post")));
                                                    browser.wait(buttonClickable46, 10000).then(function () {
                                                        element(by.css("textarea[placeholder='Post Comment']")).sendKeys("comment is displayed").then(function () {
                                                            browser.sleep(3000);
                                                            var EC32 = protractor.ExpectedConditions;
                                                            var buttonClickable45 = EC32.elementToBeClickable(element(by.buttonText("Post")));
                                                            browser.wait(buttonClickable45, 10000).then(function () {
                                                                element(by.buttonText("Post")).click();
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                            else {
                                                browser.sleep(6000);                              //it will create a new comment
                                                //console.log("no comment exist");
                                                browser.actions()
                                                    .mouseMove(obj.slideimage, { x: 210, y: 75, })
                                                    .click()
                                                    .perform().then(function () {
                                                        browser.sleep(4000);
                                                        var EC36 = protractor.ExpectedConditions;
                                                        var buttonClickable48 = EC36.presenceOf(element(by.buttonText("Post")));
                                                        browser.wait(buttonClickable48, 10000).then(function () {
                                                            element(by.css("textarea[placeholder='Post Comment']")).sendKeys("1st comment").then(function () {
                                                                browser.sleep(3000);
                                                                var EC31 = protractor.ExpectedConditions;
                                                                var buttonClickable44 = EC31.elementToBeClickable(element(by.buttonText("Post")));
                                                                browser.wait(buttonClickable44, 10000).then(function () {
                                                                    element(by.buttonText("Post")).click();
                                                                });
                                                            });
                                                        });
                                                    });
                                            }   //1st box comment
                                        });
                                        browser.sleep(6000);
                                        browser.actions()
                                            .mouseMove(obj.slideimage, { x: 300, y: 90, })    //It will create a new comment
                                            .click()
                                            .perform().then(function () {
                                                var EC37 = protractor.ExpectedConditions;
                                                var buttonClickable49 = EC37.presenceOf(element(by.buttonText("Post")));
                                                browser.wait(buttonClickable49, 10000).then(function () {
                                                    browser.sleep(3000);
                                                    element(by.css("textarea[placeholder='Post Comment']")).sendKeys("2nd comment").then(function () {
                                                        browser.sleep(2000);
                                                        var EC38 = protractor.ExpectedConditions;
                                                        var buttonClickable50 = EC38.elementToBeClickable(element(by.buttonText("Post")));
                                                        browser.wait(buttonClickable50, 10000).then(function () {
                                                            element(by.buttonText("Post")).click();
                                                        })
                                                    });
                                                });
                                            });  //2nd box comment
                                    });
                                // // // var EC8 = protractor.ExpectedConditions;
                                // // browser.wait(EC8.presenceOf(element(by.css("div[class='comments-box']"))), 5000).then(function(){
                                obj.commentoptions.click().then(function () {
                                    browser.sleep(5000);
                                    var EC40 = protractor.ExpectedConditions;
                                    var buttonClickable51 = EC40.presenceOf(element(by.css("option[class='pink']")));   //It will draw in pink colour
                                    browser.wait(buttonClickable51, 10000).then(function () {
                                        element(by.css("option[class='pink']")).click();

                                        draw1 = element(by.css("canvas[class='draw-panel']"));
                                        browser.actions()
                                            .dragAndDrop(draw1, { x: 100, y: 100 })
                                            .mouseMove(draw1, { x: 100, y: 100 })
                                            .perform();
                                        browser.sleep(7000);
                                        var EC41 = protractor.ExpectedConditions;
                                        var buttonClickable52 = EC41.presenceOf(element(by.buttonText("Post")));
                                        browser.wait(buttonClickable52, 10000).then(function () {

                                            element(by.css("textarea[placeholder='Post Comment']")).sendKeys("drawpattern").then(function () {
                                                browser.sleep(3000);
                                                var EC42 = protractor.ExpectedConditions;
                                                var buttonClickable54 = EC42.elementToBeClickable(element(by.buttonText("Post")));
                                                browser.wait(buttonClickable54, 10000).then(function () {
                                                    element(by.buttonText("Post")).click();
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    }, 600000);

    xit('making slide private', function () {                              //To verify the private icon by clicking on it
        browser.waitForAngularEnabled(false);
        var EC60 = protractor.ExpectedConditions;
        var buttonClickable60 = EC60.elementToBeClickable(obj.slideprivate);
        browser.wait(buttonClickable60, 10000).then(function () {
            obj.slideprivate.click().then(function () {
                //var EC11 = protractor.ExpectedConditions;
                //var buttonClickable6 = EC11.visibilityOf(obj.toastMessage1);
                //browser.wait(buttonClickable6, 8000)
                browser.sleep(8000);
                // .then(function () {
                //     expect(obj.toastMessage.isDisplayed()).toBe(true);
                //      expect(obj.toastMessage1.getText()).toContain('Slide is private');
                // }); 
            });
        });
    }, 600000);

    it('Duplicating slides', function () {                              //To verify the duplicate icon by clicking on it
        browser.waitForAngularEnabled(false);
        browser.sleep(8000);
        browser.waitForAngularEnabled(false);
        var EC64 = protractor.ExpectedConditions;
        var buttonClickable64 = EC64.invisibilityOf(obj.toastMessage1);
        browser.wait(buttonClickable64, 8000).then(function () {
            obj.duplicateicon.click().then(function () {
                browser.sleep(8000);
                //var EC12 = protractor.ExpectedConditions;
                //var buttonClickable7 = EC12.presenceOf(obj.toastMessage1);
                //browser.wait(buttonClickable7, 8000).then(function () {
                //expect(toastMessage.isDisplayed()).toBe(true);
                //expect(obj.toastMessage1.getText()).toContain('Saved');
                element(by.css("div[class='pagesCount']")).getText().then(function (pagecount3) {
                    console.log(pagecount3);
                    var result2 = "";

                    for (let count2 of pagecount3) {
                        if (!isNaN(count2)) {
                            result2 = result2 + '' + count2;
                            console.log(result2);
                        }

                    }
                    var num1 = obj.result + 1;
                    //console.log(obj.result);
                    expect(result2).toBeTruthy(num1);
                    //});    //        
                });
            });
        });
    }, 600000);


    it('Removing slides', function () {                             //To verify the remove icon. By clicking on removing icon, it will reduce the total count of all slides by one

        browser.waitForAngularEnabled(false);
        browser.sleep(8000).then(function () {
            //var EC65 = protractor.ExpectedConditions;
            //var buttonClickable65 = EC65.invisibilityOf(obj.toastMessage2);
            //browser.wait(buttonClickable65, 8000)
            obj.RemoveIcon.click().then(function () {
                //var EC13 = protractor.ExpectedConditions;
                //var buttonClickable9 = EC13.presenceOf(obj.dialogbox3);
                //browser.wait(buttonClickable9, 8000).then(function () {

                browser.sleep(8000);
                obj.dialogbox3.element(by.buttonText("OK")).click().then(function () {
                    //var EC14 = protractor.ExpectedConditions;
                    ////var buttonClickable8 = EC14.presenceOf(obj.toastMessage2);
                    //browser.wait(buttonClickable8, 8000).then(function () {


                    //expect(obj.toastMessage2.getText()).toContain('Saved')

                    browser.sleep(8000);
                    element(by.css("div[class='pagesCount']")).getText().then(function (pagecount2) {
                        console.log(pagecount2);
                        var result1 = "";

                        for (let count1 of pagecount2) {   //indexdata
                            if (!isNaN(count1)) {
                                result1 = result1 + '' + count1;
                                console.log(result1);
                            }

                        }

                        var num = obj.result2 - 1;
                        //console.log(obj.result);
                        expect(result1).toBeTruthy(num);
                    });

                });
            });
        });
        //}); //});

    }, 600000);

   /* afterAll(function () {                            //After all will called after when all the specs in decribe get run 
        browser.waitForAngularEnabled(false);
        obj.logout.click();
    });
*/

});










