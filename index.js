const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer').default;
const fs = require('fs');
const fileName = 'README.md';

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required for install? (N/A if not needed)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use/filepath for screenshot.'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your GitHub repo link?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your licence:',
            choices: ['MIT', 'Apache', 'GNU', 'Eclipse']
        }
    ])
    .then((answers) => {
        console.log('Prompt Answers: ' + answers);
        const readmeContent = generateMarkdown(answers);
        console.log('Generated README: ' + generateMarkdown(answers));
    

// TODO: Create a function to write README file
        fs.writeFile(fileName, readmeContent, (err) =>  {
            err ? console.error('Error writing file: ', err) : console.log('README.md file generated!')
        })
    })