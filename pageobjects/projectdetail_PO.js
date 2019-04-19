var projectdetail_objects = function(){
    this.projectTitle=element(by.css("div[class*='title-inside']"));
    this.expandarrow = element.all(by.css("accordion-group[class*='accordion accordion-draggable panel']")).get(0);
    this.expandsection=element(by.css("i[class*='pull-left glyphicon section-header-arrow menu-right']"));
    this.Slide = element.all(by.css("div[class='image']")).get(0);
    var downloadiconparent= element(by.css("div[class='pull-right rightOptions']"));
    this.downloadiconchild= downloadiconparent.element(by.css("i[class='icon-download']"));
    this.researchbutton = element(by.className("btn-research"));
    this.downloadppt= $('.downloadPresentation');
    this.exportmodaldialoge=$('div[class="export-container"]');
}
module.exports=new projectdetail_objects();