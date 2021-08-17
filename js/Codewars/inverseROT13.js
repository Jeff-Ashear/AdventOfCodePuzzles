function rot13(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let isUpperCase = false
    let rottenMessage = ""
    let thisLetter = ""
    let alphaChecker = /[a-z]/i;
    let caseChecker = /[A-Z]$/

    for (let i = 0; i < str.length; ++i) {
        if (str[i].match(alphaChecker)) {
            if (str[i].match(caseChecker)) {
                isUpperCase = true
            }
            let thisLetter = str[i]
            for (let j = 0; j < alphabet.length; ++j) {
                if (thisLetter.toLowerCase().match(alphabet[j])) {
                    let rottenNumber = j + 13
                    if (rottenNumber >= 26) {
                        rottenNumber = rottenNumber - 26
                    }
                    let thisLetter = alphabet[rottenNumber]
                    if (isUpperCase === true) {
                        rottenMessage = rottenMessage + thisLetter.toUpperCase()
                        isUpperCase = false
                    } else {
                        rottenMessage = rottenMessage + thisLetter
                    }
                }
            }
        } else {
            rottenMessage = rottenMessage + str[i]
        }      
    }
    return rottenMessage
}


console.log(rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf"))
console.log(rot13("EBG13 rknzcyr."))
console.log(rot13("Guvf vf zl svefg EBG13 rkprepvfr!"))