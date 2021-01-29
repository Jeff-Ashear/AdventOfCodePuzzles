const fs = require('fs');

function compareExpenseAmounts(expenses) {
    // let a = expenseList[0]
    // console.log(a)
    // let b = expenseList[1]
    // console.log(b)
    // let c = a + b;
    // console.log(c)
    for (let i = 0; i < expenseList.length; ++i) {

        let expense1 = expenseList[i]
        // console.log(expense1)
        for (let j = 0; j < expenseList.length; ++j) {
            let expense2 = expenseList[j];
            if (expense1 + expense2 === 2020) {
                console.log("True")
                // console.log("The first number is: ", expense1);
                // console.log("The second number is: ", expense2);
                // expensesMultiplied = expense1 * expense2
                // console.log("Day one part one Answer is: ", expensesMultiplied)
            }
        }
    }

    
}

const day1Data = fs.readFileSync('../data/day1Input.txt', 'utf8');
// const expenseList = day1Data.split("\n");

let convertToNumbers = day1Data => expenseList.map(Number);
console.log(expenseList)

compareExpenseAmounts([expenseList]);