import { element, $, $$, browser, ExpectedConditions, By } from 'protractor';

export class Parameters {


    //username and password
    username: string = "cs_user@mypresentation.space";
    password: string = "!evalu3";

    //Settings: "Find Staff" search parameter + count of outcomes
    textFromFindStaff: string = "Admin";
    nuberOfRowFromTableStaff: number = 1;
    


    //Settings: "Find Projects" search Parameter + count of outcomes
    textFromFindProjects: string = "Automation";
    numberOfRowFromTableProject: number = 1;





}