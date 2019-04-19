function pitchflow(){

//creating project--
	this.username=element(by.id('userNameInput'));
	this.password=element(by.id('passwordInput'));
	this.submitButton=element(by.id('submitButton'));
	this.linkText1=element(by.linkText('New Project'));
	this.name = element(by.name('name'));
	this.formpage = element.all(by.css("input[class*=form-control]"));
    this.optionsector = element(by.cssContainingText("Select[class*='form-control'] option","Healthcare"));
    this.optiondealtype = element(by.cssContainingText("Select[class*='form-control'] option","Pitch"));
    this.optionprojecttype = element(by.cssContainingText("Select[class*='form-control'] option","Powerpoint"));
    this.optionsecurity = element(by.cssContainingText("Select[class*='form-control'] option","Public"));
    this.date = element(by.className('dateText'));
	this.datefield = element.all(by.css("button[class='btn btn-sm btn-default']"));
	this.buildproject1 = element(by.css("button[class='btn btn-success buildProject']"));
	this.dialogbox = element.all(by.css("div[class='row']")).get(6);
	this.OKbuttontest =element(by.buttonText('OK'));
	this.projecttitle=element(by.css("div[class*='title-inside']"));
	this.logout=element(by.css("img[class*='exit-icon']"));

//Actions project--
	this.evalueservelogo1 = element(by.className("logo"));
	this.projectName = element(by.css("h3[class*='projectName']"));
	this.projectDetails = element.all(by.css("div[class='ps-project-inner']"));
	this.uploadButton = element(by.className("btn-upload"));
	this.typefile=element(by.css('input[type="file"]'));
	this.SelectAllbutton = element(by.buttonText("Select All"));
	this.ReplaceAllbutton = element(by.buttonText("Replace All"));
	this.dialogbox2 = element.all(by.css("div[class='row']")).get(16);
	this.pagecount = element(by.css("div[class='pagesCount']"));
	this.Slide = element.all(by.css("div[class='image']")).get(0);
	this.CommentIcon = element.all(by.css("i[class='icon-comments-icon']")).get(1);
	this.expandarrow = element.all(by.css("accordion-group[class*='accordion accordion-draggable panel']")).get(0);
	this.addcomments = element(by.buttonText("View / Add Comments"));
    this.commentoptions = element.all(by.className("comment-button-text")).get(1);		
	this.slideimage = element(by.css("div[class='annotations-boxes-wrapper']"));
	this.slideprivate = element(by.css("i[class='glyphicon glyphicon-globe']"));
	this.duplicateicon = element(by.css("i[class='icon-duplicate']"));
	this.RemoveIcon = element(by.css("i[class='icon-trash']"));
	this.dialogbox3 = element.all(by.css("div[class='row']")).get(12);
	this.toastMessage1 = element(by.css("div[className='toast toast-success']"));
	this.toastmessage2 = element(by.className("toast-message"));
	this.toastMessage = element(by.className("toast toast-success"));

//download functionality
	this.downloadIcon = element(by.css("div[class='downloadPresentation']"));
	this.downloadButton = element(by.css("button[class='btn btn-info btn-download']"));
	this.downloadButton2 = element(by.buttonText('Download'));
	this.exportdialog =element(by.css("div[class='export-container']"))

//archive functionality
this.optionedit = element(by.cssContainingText("Select[class*='form-control status'] option", "Archived"));
this.dialogbox4 = element.all(by.css("div[class='row']")).get(4);
this.archivelink = element(by.css("div[routerlink='/projects/2']"));
this.searchfield = element.all(by.css("input[placeholder='Search Projects']")).get(1);
this.presentationTitle = element.all(by.className("presentation-title-container"));


//Search Project
this.flagAll = element(by.className("btn-select-all"));
this.AddTo = element(by.className("btn-add"));
this.flaggedSlides = element(by.className("flagged-slides-menu-host"));
this.Dropdownfield = element(by.css("span[class='dropdown-item']"));
this.DropdownItem0 = element.all(by.css("li[class='dropdown-menu-item']")).get(0);
this.DropdownItem2 = element.all(by.css("li[class='dropdown-menu-item']")).get(2);
this.checkboxes = element.all(by.className("checkbox-label"));
this.AddToPresentation = element(by.css("button[class='btn-add-to']"));
this.summary = element(by.css("div[class='transfer-summary']"));
this.slideClose = element(by.className("close-menu"));
this.IndexPanel = element(by.css("tab[class='active tab-pane']"));
this.RefineSearchPanel = element(by.css("li:nth-child(2)"));
this.RefineSearch = element.all(by.className("refine-search-content"));
this.CloneToNew = element(by.className("btn-clone"));
this.SlideContainer = element(by.className("clone-slides-container__bd"));
this.DateCalender = element(by.className("icon-calendar-icon"));
this.SaveButton = element(by.css("button[class='btn-save']"));
this.DropdownItem3 = element.all(by.css("li[class='dropdown-menu-item']")).get(1);
this.ResearchButton = element(by.className("btn-research"));


//Research
this.downloadButton3 = element(by.className("btn-download"));
this.RemoveButton = element(by.className("btn-remove"));
this.researchtitle = element.all(by.className("file-title clickable"));
this.activetab = element(by.css("tab[class='tab-pane active']"));


	var result;
	var result1;
	var result2;
	var pagecount2;
	var pagecount1;
	var pagecount3;
	var count1;
	var count2;
	
	

	
	this.getURL = function()
		{
		
		 browser.get('https://pitchflow.evalueserve.com/cs')
		};
};

module.exports = new pitchflow();

