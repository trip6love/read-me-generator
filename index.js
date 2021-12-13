// TODO: Include packages needed for this application
const inquierer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title!',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please proive a title!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'repository',
        message:'Please enter the title of your repository!',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter a repository!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message:'Please enter your Github username!',
        validate: hubInput => {
            if (hubInput) {
                return true;
            } else {
                console.log('Please enter a username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'disc',
        message:'Please enter a description of your work!',
        validate: discInput => {
            if (discInput) {
                return true;
            } else {
                console.log('Please enter a description!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'use',
        message:'Please enter details on using your finished product!',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please provide details on usage!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message:'Please enter your email for any further questions!',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please enter a email!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message:'Please enter testing instructions for your application!',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test instructions!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message:'Please enter any packages needed for this application!',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please Enter installation information!')
                return false;
                
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Please enter guidelines for anyone wanting to contribute!',
        validate: contriInput => {
            if (contriInput) {
                return true;
            } else {
                console.log('Please enter any guidelines the user needs to know about!')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message:'Please enter licensing information!',
        choices: ['GNU', 'MIT', 'Apache 2.0', 'ISC'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license!')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'built',
        message: 'Please select the languages used for your application!',
        choices: ['HTML' , 'CSS', 'JavaScript', 'Node.js'],
        default: 0,
        validate: builtInput => {
            if(builtInput) {
                return true;
            } else {
                console.log('Please select at least one language!')
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'link',
        message: 'Please enter a link to your deployed work!',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter a link to your deployed application!');
                return false;
            }
        }
    },
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if(err) {
            throw err
        };
        console.log('ReadME Complete! Locate the file in the dist folder.')
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquierer.prompt(questions);
};

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    .then(generatedFile => writeToFile('ReadME.md',generatedFile))
    .catch(err => {
        console.log(err);
    })
