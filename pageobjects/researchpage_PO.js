var researchpage_objects = function(){
    this.allresourcestab=$('div[class="tabs-container"] span','All Resources');
    this.searchbox = $('div[class="list-conainer__filters"]').$("input[class*='search-field-desktop']");
    this.resultcontainer= $('div[class="results-container"]');
    this.documenttitle= $('a[class*="file-title"]');
    this.alldocs=element.all(by.css('a[class*="file-title"]'));
    this.searchreset=$('span[class="search-reset"]','X');
    this.uploadbtn=$('button[class="upload-button"]');
    this.typefile=element(by.css('input[type="file"]'));
    this.documentcount=element(by.css('span[class="doc-count"]'));
    this.dropdwn=element(by.css('span[class="dropdown-items-label"]'));

    this.searchdocument = async function(docname){
        console.log("In search doc");
        this.searchbox.click();
        browser.sleep(5000);
        this.searchbox.sendKeys(docname);
        browser.sleep(15000);
    };
       
    this.getcounts=async function(){
        return await this.documentcount.getText().then(function(text){
           // console.log(text);
            var result = parseInt(text.replace(/[^0-9]+/g,""));
            //console.log("result: " +result);
            return result;
        });
    };
}
module.exports=new researchpage_objects();