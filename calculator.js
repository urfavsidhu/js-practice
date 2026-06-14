const readline = require('readline-sync')
function calculator() {
    let operator = readline.question("Kya karna hai : Add ke liye + , Subtarct ke liye - , Devide ke liye / , our Multiplication ke liye *, enter karo : ");
    let num1 = Number(readline.question("Pehla number enter karo : "));
    let num2 = Number(readline.question("Dusra number enter karo : "));

    if (operator == "+") {
        console.log(`${num1} our ${num2} ka addition = ${num1 + num2}`);
    }

    else if (operator == "-") {
        console.log(`${num1} our ${num2} ka subtraction = ${num1 - num2}`);
    }

    else if (operator == "*") {
        console.log(`${num1} our ${num2} ka multiplication = ${num1 * num2}`);
    }

    else if (operator == "/") {
        console.log(`${num1} our ${num2} ka division = ${num1 / num2}`);
    }

    else {
        console.log(`${operator} kon sa operator hai ye galat hai sahi se daal.`)
    }
}
while (true) {
    calculator()
    let again = readline.question("Dobara karna hai to y daba ya fir n : ");
    if (again == "n") break;
}
console.log("Thank You!");