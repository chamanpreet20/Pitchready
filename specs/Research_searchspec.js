/*
1. Enter the presentation name in the search research page
Verify the search result
2.Reset search
3.Upload docs-PPT*/ 

var t_data = require('..\\test_data\\testdata.json');
var login_page = require('..\\pageobjects\\loginOut_PO');
var myactivetabobj = require('..\\pageobjects\\activetab_PO');
var myprojectdetailobj = require('..\\pageobjects\\projectdetail_PO');
var myresearchpageobj = require('..\\pageobjects\\researchpage_PO');

describe('Verify search on research page ',function(){
    
    beforeAll(async function(){
        await login_page.get(t_data.loginurl);
        browser.sleep(4000);

    })

    it('Navigate to research folder of project',async function(){
       myactivetabobj.projtitleall.filter(function(project){
        return project.element(myactivetabobj.projectnm.locator()).getText().then(function(title){
            return title==t_data.newname;
        });
       }).first().click();
       var EC =protractor.ExpectedConditions;
       browser.wait(EC.elementToBeClickable(myprojectdetailobj.researchbutton),15000);
       myprojectdetailobj.researchbutton.click();
       browser.sleep(8000);
       expect(myresearchpageobj.allresourcestab.isDisplayed()).toBe(true);
      
    })

    it('Search for documents',async function(){
        
       myresearchpageobj.searchdocument(t_data.Researchname);
       //expect().toContain(t_data.Researchname);
       console.log("Printing searched documents:")
        myresearchpageobj.alldocs.each(function(element){
            element.getText().then(function(text){
                console.log(text);
            });
        });
         
       expect(await myresearchpageobj.searchreset.isDisplayed()).toBe(true);
       browser.sleep(5000);
    })

    it('Reset search',async function(){
        let count=0,countbefore=0;
         myresearchpageobj.searchreset.isPresent().then(async function(result){
            if(result === true)
            {
                myresearchpageobj.getcounts().then(function(value){
                countbefore = value;
            });

            }else
              {
                   // console.log("I am in else");
                    browser.wait(myresearchpageobj.searchdocument(t_data.Researchname));
                        myresearchpageobj.getcounts().then(function(value){
                            countbefore = value;
                        });                                                                                   
                    
                }
        });
        
        await browser.executeScript("arguments[0].click();",myresearchpageobj.searchreset);
                
         //extract count of docs after reset
        browser.sleep(5000);
        myresearchpageobj.getcounts().then(function(value){
            count = value;
        }).then(function(){
        console.log("count before reset:" +countbefore);
        console.log("Count after reset:" +count);
        expect(count).toBeGreaterThan(countbefore);
        });
             
    })

    it('Upload Documents',async function(){
        var path = require('path');
        let count=0,countbefore=0;
        //myresearchpageobj.uploadbtn.click();
        //Count of documents before upload
        myresearchpageobj.getcounts().then(function(value){
            countbefore = value;
        }); 
         //select file to upload
        var absolutePath = path.resolve(__dirname,t_data.fileToUpload);
       await myresearchpageobj.typefile.sendKeys(absolutePath);
        browser.sleep(8000);
        //extract count after upload
         myresearchpageobj.getcounts().then(function(value){
            count = value;
            //console.log("returned after count "+count);
        }).then(function(){
            console.log("count before upload:" +countbefore);
            console.log("Count after upload:" +count);
            expect(count).toEqual(countbefore+1);
        }); 
       
    })
})