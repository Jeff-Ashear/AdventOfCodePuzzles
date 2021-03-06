const fs = require("fs")

// This function counts the number of valid passwords that were passed to it.
//     @passwordPolicies: array of password policy strings that match the following pattern.
//          policyString: passwordString
//                where policyString has the following pattern:
//                       9-99 x
function countValidPasswords(passwordPolicies) {
    let count = 0;
    for (let i = 0; i < passwordPolicies.length; i++) {
        
        let passwordPolicy = passwordPolicies[i]
        let [range, characterAndColon, password] = passwordPolicy.split(" ")
        let requiredChar = characterAndColon[0]
        
        let matchingChars = 0;        
        for (let i = 0; i < password.length; ++i) {
            if (password[i] == requiredChar) {
                matchingChars += 1;
            }
        }
        
        let [minimum, maximum] = range.split("-").map(Number)
        if (matchingChars >= minimum && matchingChars <= maximum) {
            count += 1
            $("#day2Result").text("What about this?");
            // $("#day2Result").text("Number of Valid Passwords: " + count);
        }
        // $("#day2Result").html('<h3>Day 2 Part 1</h3><br><h3>Number of Valid Passwords: ' + count + '</h3>');
    }
    return count
}

const day2Data = fs.readFileSync('../data/day2Input.txt', 'utf8')
const passwordList = day2Data.split("\n")
countValidPasswords(passwordList);
console.log("Number of Valid Passwords: ", countValidPasswords(passwordList))
