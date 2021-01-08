// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "Title",
    },
    {
      type: "input",
      message: "Give me a description of your project?",
      name: "Description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "Installation",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "Usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "Contributions",
    },
    {
      type: "input",
      message: "What are your test instructions?",
      name: "Test",
    },
  ])
  .then((response) => {
    console.log(response);
  });



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
