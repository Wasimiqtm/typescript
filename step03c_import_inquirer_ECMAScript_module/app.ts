import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter your age",
    }
])

console.log(`Inshaa Allah, after ${60 - answers.age} you will of 60`)