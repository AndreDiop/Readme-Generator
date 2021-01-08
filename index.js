// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
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
      message: "What are your test instructions?",
      name: "test",
    },
  ])

  // TODO: Create a function to write README file
  .then((response) => {
    console.log(response);
    const readMeInfo = `
# ${response.title}

## Table of Contents

[Description](#About)

[Installation](#Installation)

[Usage](#Usage)

[Test Instructions](#Test)

[Contributing](#Contributing)

[Licenses](#Licenses)

# About
${response.description}
## Installation
${response.installation}
## Usage
${response.usage}
## Test Instructions
${response.test}


## Contributing
${response.contributions}



## License

[MIT](https://choosealicense.com/licenses/mit/) 

    `;
    fs.writeFile("genReadMe.md", readMeInfo, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("The shit worked homie");
      }
    });
  });

// // TODO: Create a function to initialize app
// function init() {}

// // // Function call to initialize app
// init();
