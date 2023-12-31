const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Title',
    name: 'Title',
  },
  {
    type: 'input',
    message: 'Description',
    name: 'Description',
  },
  {
    type: 'input',
    message: 'Installation',
    name: 'Installation',
  },
  {
    type: 'input',
    message: 'Usage',
    name: 'Usage',
  },
  {
    type: 'list',
    message:'License badge',
    name: 'Badge',
    choices: ['edX', 'Duolingo', 'Express.js', 'jQuery', 'Node.js', 'none']
  },
  {
    type: 'input',
    message:'License description',
    name: 'License',
  },
  {
    type: 'input',
    message: 'Tests',
    name: 'Tests',
  },
  {
    type: 'input',
    message: 'Features',
    name: 'Features',
  },
  {
    type: 'input',
    message: 'How to Contribute',
    name: 'HowtoContribute',
  },
  {
    type: 'input',
    message: 'Email',
    name: 'Email',
  },
  {
    type: 'input',
    message: 'Github',
    name: 'Git',
  },
  {
    type: 'input',
    message: 'Github Link',
    name: 'GitLink',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var fs = require('fs');
  fs.writeFile(fileName, data , function(err) {
      if (err) {
          return console.log(err);
      }
   console.log("El archivo fue creado correctamente");
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
           writeToFile('README.md', utils(response))
        );
}

// Function call to initialize app
init();
