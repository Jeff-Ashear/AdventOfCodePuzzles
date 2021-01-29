const fs = require("fs");

const array = fs.readFileSync("../data/day2Input.txt", "utf8");
const passwordList = array.split("\n");
let [range, characterAndColon, password] = passwordList[2].split(" ");
let [position1, position2] = range.split("-");
let requiredChar = characterAndColon[0]
let positionCheck1 = password[position1 - 1]
let positionCheck2 = password[position2 - 1]

console.log(positionCheck1)
console.log(positionCheck2)

let correct = true

function checkPositions(passwordPolicies) {
    if (requiredChar !== positionCheck1) {
        correct = true
    } else {
        correct = false
    }

    return correct
}


console.log("correct: ", checkPositions(password, requiredChar, position1));