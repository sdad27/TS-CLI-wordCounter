#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        message: "enter a sentence",
        name: "sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(words);
console.log(words.length);
