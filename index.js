const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require("./src/generate.js");
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');

const team = [];
function addManager() {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is Manager name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is Manager employee id?',
            name: 'id',

        },
        {
            type: 'input',
            message: 'what is Manager email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'what is Manager office number?',
            name: 'officeNumber',

        },

    ])
        .then((answer) => {
            const managerData = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(managerData);
            // let mngr = JSON.stringify(answer);


            addExtra();
        });
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Interns name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is Interns employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is Interns email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What school does Intern attend? ',
            name: 'school'
        },
    ])
        .then((answer) => {
            const internData = new Intern(answer.name, answer.id, answer.email, answer.school);
            team.push(internData);

            addExtra();
        })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is engineers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is engineers employees id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is engineers email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is engineers Github name?',
            name: 'github'
        },
    ])
        .then((answer) => {
            const engineerData = new Engineer(answer.name, answer.id, answer.email, answer.github);
            team.push(engineerData);

            addExtra();
        })
}


function addExtra() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add another employee?',
            choices: ['Intern', 'Engineer', 'No more employees'],
            name: 'type'
        },
    ])
        .then((answer) => {
            if (answer.type === 'Intern') {
                addIntern()
            } else if (answer.type === 'Engineer') {
                addEngineer();
            } else {
                // const created = generateHtml();
                // writeToFile("./dist/team.html", created)
                writeToFile()
            }
        })
}


addManager();

function writeToFile() {
    console.log(team)
    fs.writeFileSync('./dist/team.html' , generateHtml(team), 'utf-8')
    

        // (err) ? console.log("error") : console.log(team)
    // )
}



