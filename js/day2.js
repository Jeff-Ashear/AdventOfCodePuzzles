const fs = require("fs")

const d2Data = fs.readFileSync('../data/day2Input.txt', 'utf8')
const pwList = d2Data.split("\n")

// console.log(pwList);
let minimum = 0;
let maximum = 0;
let requiredChar = "";
let password = "";
let validPWs = 0;

function pwValidator(pwList) {
    for (i = 0; i < 3; i++) {
        // let thisPW = pwList[i]
        // console.log("thisPW: ", thisPW);
        // let range = thisPW.match(/\d+/g).map(Number)
        // console.log(range)
        // let minimum = range[0]
        // let maximum = range[1]
        // let requiredChar = thisPW.split(" ", 2);
        // let password = thisPW.split(": ");
        // console.log("Minimum: ", minimum);
        // console.log("Maiximum: ", maximum);
        // console.log("Required character: ", requiredChar);
        // console.log("Password: ", password);
        // console.log(  )

        let thisPW = pwList[i]
        console.log("This Password: ", thisPW)

        let range = thisPW.match(/\d+/g).map(Number)
        console.log("Range: ", range)

        let elements = thisPW.split(" ")
        console.log("elements: ", elements)

        let password = elements[2]
        console.log("Password: ", password)

        let requiredChar = elements[1]
        requiredChar = requiredChar.replace(/:/g, '')
        console.log("Required Character: ", requiredChar)

        // requiredChar = password(re, requiredCharsInPW);
        // requiredCharsInPW = password.replace(/[^`${requiredChar}`]/g, '')

        let minimum = range[0]
        let maximum = range[1]
        let requiredCharsInPW = "";
        let replace = "replace(/[^a]/g, '')";
        let re = new RegExp(replace, "g");
        password = replace(re, requiredChar)
        console.log("Number of occurances: ", requiredCharsInPW.length)

        if (requiredCharsInPW.length >= minimum && requiredCharsInPW.lenght <= maximum) {
            validPWs +=
                $("#day2Results").text("The number of valid passwords is: " + validPWs);
        }

    }
}
pwValidator()

console.log("Number of Valid Passwords: ", validPWs)