const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator');

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What\'s your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What\'s your story?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What\'s your LinkedIn?',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'What\'s your Github username?',
        name: 'github',
    },
    {
        type: 'rawlist',
        message: 'What License was this created with?',
        name: 'license',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
          ]
    }
];

inquirer.prompt(questions).then((answers) => {
    utils.generatePage(answers);
})