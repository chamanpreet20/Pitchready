describe('to test the Pitchflow project', function () {
    var obj = require("./project.constant.js");
    var d = require("./project.data.js");
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

   /* beforeAll(function () {                                                //The beforeAll function is called only once before all the specs in describe are run
        browser.waitForAngularEnabled(false);
        obj.getURL();
        obj.username.sendKeys(d.datadrive.username);
        obj.password.sendKeys(d.datadrive.password);
        obj.submitButton.click();
    });*/


    it('viewing the project', function () {                               //To search for a project which is created and to click on it
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
    }, 600000);


    it('Download project', function () {                                //To click on a download icon of a project.
        browser.waitForAngularEnabled(false);
        var EC20 = protractor.ExpectedConditions;
        var buttonClickable20 = EC20.elementToBeClickable(obj.downloadIcon);
        browser.wait(buttonClickable20, 5000).then(function () {
            obj.downloadIcon.click().then(function () {
                // browser.sleep(8000);
                var EC22 = protractor.ExpectedConditions;
                var buttonClickable22 = EC22.elementToBeClickable(obj.downloadButton);
                browser.wait(buttonClickable22, 10000).then(function () {
                    expect(obj.exportdialog.isDisplayed()).toBe(true);
                    obj.downloadButton.click().then(function () {

                        var EC21 = protractor.ExpectedConditions;
                        var buttonClickable21 = EC21.elementToBeClickable(obj.downloadButton2);
                        browser.wait(buttonClickable21, 10000).then(function () {
                            expect(obj.exportdialog.isDisplayed()).toBe(true);
                            //browser.sleep(3000);
                            obj.downloadButton2.click().then(function () {
                                browser.sleep(30000);
                                // function readTextFile(file) {
                                //     var rawFile = new XMLHttpRequest();
                                //     rawFile.open("GET", file, false);
                                //     rawFile.onreadystatechange = function () {
                                //         if (rawFile.readyState === 4) {
                                //             if (rawFile.status === 200 || rawFile.status == 0) {
                                //                 var allText = rawFile.responseText;
                                //                 console.log(allText);
                                //             }
                                //         }
                                //     }
                                //     rawFile.send(null);
                                // }
                                // readTextFile("xyz");
                            });
                            //element(by.buttonText('Finish')).click().then(function(){
                            //browser.pause();
                            //});
                        });
                    });
                });

            });
            // verifyFileDownload: function() {
            //     var filename = 'C:\Users\Admin\Downloads' + '/fileName.extension';
            //       browser.driver.wait(function() {
            //         return fs.existsSync(filename);
            //       }, 30000).then(function() {
            //         console.log("Getting the ERROR while downloading file as file is not downloaded.");
            //       });
            //     };
        });
        //var glob = require("glob");
        //browser.wait(function () {
        //  var filesArray = glob.sync("*.pptx");
        // if (typeof filesArray !== 'undefined' && filesArray.length > 0) {
        // this check is necessary because `glob.sync` can return
        // an empty list, which will be considered as a valid output
        // making the wait to end.
        //   return filesArray;
        //}
        //}, 20000).then(function (filesArray) {
        //var filename = filesArray[0];
        // now we have the filename and can do whatever we want
        //});


    }, 600000);
  /*  afterAll(function () {                                              //After all will called after when all the specs in decribe get run
        browser.waitForAngularEnabled(false);
        obj.logout.click();
     });*/

});
