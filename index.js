const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generateMarkdown.js");
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give me a description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contributions",
  },
  {
    type: "input",
    message: "What technology was used?",
    name: "tech",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What's your Git Hub user name?",
    name: "github",
  },
  {
    type: "list",
    message: "Which license do you require?",
    name: "license",
    choices: [
      { name: "none", value: "This work is unlicensed" },
      {
        name: "BSD",
      },
      {
        name: "ISC",
      },
      { name: "MIT" },
    ],
  },
];

function init() {
  console.log("Enter information to create your readme!");
  inquirer.prompt(questions).then((response) => {
    console.log(response);

    const readmeTemplate = generateReadMe(response);
    // Create a function to write README file
    fs.writeFile("newReadme.md", readmeTemplate, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Your Readme is ready. It is titled newReadme.md ");
      }
    });
  });
}
init();
