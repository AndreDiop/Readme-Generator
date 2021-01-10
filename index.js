const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "What are your test instructions?",
    name: "test",
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
        value: "[BSD](https://choosealicense.com/licenses/bsd-2-clause/)",
      },
      {
        name: "GPL",
        value: "[GPL](https://choosealicense.com/licenses/gpl-3.0/#)",
      },
      { name: "MIT", value: "[MIT](https://choosealicense.com/licenses/mit/)" },
    ],
  },
];

const generateReadMe = ({
  title,
  description,
  installation,
  usage,
  contributions,
  test,
  email,
  github,
  license,
}) => {
  const readMeInfo = `
# ${title}
          
 ## Table of Contents
          
[Description](#About)
          
[Installation](#Installation)
          
[Usage](#Usage)
          
[Test Instructions](#Test)
          
[Contributing](#Contributing)
          
[Questions](#Questions)
          
[Licenses](#Licenses)
          
# About
${description}
## Installation
${installation}
## Usage
${usage}
## Test Instructions
${test}
          
          
## Contributing
${contributions}
          
## Questions
You can find me on [GitHub](https://www.github.com/${github}) 
You can reach me by email also at ${email}
## License
This project is covered under the following 
licenses: ${license}
        `;
  return readMeInfo;
};

function init() {
  console.log("Let the games begin!");
  inquirer.prompt(questions).then((response) => {
    console.log(response);

    const readmeTemplate = generateReadMe(response);
    // Create a function to write README file
    fs.writeFile("genReadMe.md", readmeTemplate, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("The shit worked homie");
      }
    });
  });
}
init();
