#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { welcome } from "./welcome.js";
await welcome();
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message: "What do you want to add in your TODO? ",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more TODO?",
            default: false
        }
    ]);
    const { TODO, addMore } = answers;
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        let resp1 = chalk.red(`Kindly Add valid Input`);
        console.log(resp1);
    }
    ;
    if (todos.length > 0) {
        let resp2 = chalk.magenta(`TODO List`);
        console.log(resp2);
        todos.forEach(TODO => {
            console.log(TODO);
        });
    }
    else {
        let resp3 = chalk.cyan(`No todos found`);
        console.log(resp3);
    }
    ;
}
