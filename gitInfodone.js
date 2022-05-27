/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition =
  "git is a tool used for code and version management, allowing users to create milestones along the development process that can be referred or reverted to in the future if need be.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition =
  "github is a public community where users share their code to allow for collaboration and collaborative version control with other users.";

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
  description: "Initializes a git repository at the current location",
  code: "git init",
};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
  description:
    "clone is used to point to an existing git repository and make a copy of it in a new directory",
  code: "git clone *desired URL*",
};
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
  description:
    "concisely displays details of the current directory including detailed changelog and file tracking",
  code: "git status",
};
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
  description: "adds a specified item to a git repository",
  code: "git add *desired file*",
};
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
  description:
    "creates a snapshot of the current project and its changes, titled by the user's desired message",
  code:"git commit -m"},

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {description:"used to upload a local git repository to a remote repository elsewhere", code:"git push *desired URL*"}



