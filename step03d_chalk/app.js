import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter age"
    }
]);
console.log(chalk.blue(`Inshaa Allah, after ${60 - answers.age} you will of 60`));
