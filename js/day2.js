const fs = require("fs")

const data = fs.readFileSync('../data/day2Input.txt', 'utf8')
const pwList = data.split("\n")

// console.log(pwList);
let minimum = 0;
let maximum = 0;
let requiredChar = "";
let password = "";

for (i = 0; i < pwList.length; i++) {
    let thisPW = pwList[i]
    console.log(thisPW);
    minimum = thisPW.
}