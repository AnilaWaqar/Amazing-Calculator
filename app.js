#! /usr/bin/env node
import inquirer from "inquirer";
// Printing welcome message:
console.log("\n\tWelcome To \ 'Anila Waqar\' - CLI Amazing Calculator\n");
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Entersecond number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
console.log(answer);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select opeation");
}
