// function validParentheses(parens){
//     let openParens = 0
//     let closedParens = 0

//     if (parens[0] === "(" && parens[parens.length - 1] === ")") {
//         for(let i = 0; i < parens.length; i++) {
//             if (openParens >= closedParens) {
//                 if (parens[i] === "(") {
//                     openParens = openParens + 1
//                     console.log("( = ", openParens)
//                 } else {
//                     closedParens = closedParens + 1
//                     console.log(") = ", closedParens)
//                 }
//             }
//         }        
//         if (openParens === closedParens) {
//             return true
//         }
//     } else {
//         return false
//     }
//   }

// function validParentheses(parens){
//     var re = /\(\)/;
//     // let re = RegExp.new("()")
//     parens = "()"
//     while (re.test(parens)) parens = parens.replace(re, "");
//     return !parens;
//   }

function validParentheses(parens) {
    let parenCounter = 0
    for(let i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
            parenCounter++
        } else if (parens[i] === ")") {
            parenCounter--
        }
        if (parenCounter < 0) {
            return false
        }
    }
    if (parenCounter > 0) {
        return false
    }
    return true
}

  console.log(validParentheses("()"), true)
  console.log(validParentheses("())"), false)
  console.log(validParentheses("()("))