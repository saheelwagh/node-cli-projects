#!/usr/bin/env node

//import inquirer, chalk, figlet and sehll 
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
//welcome prompt
const init = () => {
    console.log(
        chalk.green(
            figlet.textSync("Node f*cking JS", {
                font: "Ghost",
                horizontalLayout: "default",
                verticalLayout: "default"
            })
        )
    );
};

//function to ASK QUESTIONS
const askQuestions = () => {
    const questions = [{
            name: "FILENAME",
            type: "input",
            message: "What should be the file extension ?"
        },
        {
            name: "EXTENSION",
            type: "list",
            choices: [".rb", "js", ".py", ".sh"],
            filter: (val) => val.split(`.`)[1]

        }
    ];
    return inquirer.prompt(questions);
}

//create the file
const createFile = (filename, extension) => {
    const filePath = `${process.cwd()}/${filename}.${extension}`
    shell.touch(filePath);
    return filePath;
}
//show success message
const success = (filepath) => {
    console.log(
        chalk.white.bgGreen.bold(`Done! FIle created at ${filepath}`)
    )
}
const run = async () => {
    /*
     *introduce the script
     *ask questions
     *generate the script
     */
    //intro
    init()
    //ask questions
    const answers = await askQuestions();
    const {
        FILENAME,
        EXTENSION
    } = answers;
    //create file
    const filePath = createFile(FILENAME, EXTENSION)
    //success message
}
run()