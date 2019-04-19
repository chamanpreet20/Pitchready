var activetab_objects = function(){
    var projectDetails = element.all(by.css("div[class='ps-project-inner']"));
    var projectname = element(by.css("h3[class*='projectName']"));
    
    this.projtitleall =element.all(by.css("div[class='ps-project-inner']"));
    this.projectnm = element(by.css("h3[class*='projectName']"));
    

this.verifyprojectcreated = async function(lookforproject){
  await projectDetails.filter(function(project){
      
      return project.element(projectname.locator()).getText().then(function(title){
          //console.log(title);
          return title == lookforproject;
      });
});
}

};
module.exports=new activetab_objects();