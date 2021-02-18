const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// function createPhoneNumber(numbers) {
//     let phoneNumber = "("
//     let thisNumber = ""
//     let formatParen = ") "
//     let formatDash = "-"


//     for (let i = 0; i < 3; ++i) {
//         if (integers[i] <= 9 && integers[i] >= 0) {
//             thisNumber = integers[i].toString()
//             phoneNumber = phoneNumber.concat(thisNumber)
//         }
//     }
    
//     phoneNumber = phoneNumber.concat(formatParen)

//     for (let i = 4; i < 6; ++i) {
//         if (integers[i] <= 9 && integers[i] >= 0) {
//             thisNumber = integers.toString()
//             phoneNumber = phoneNumber.concat(thisNumber)
//         }
//     }

//     phoneNumber = phoneNumber.concat(formatDash)

    // for (let i = 7; i < integers.length; ++i) {
    //     if (integers <= 9 && integers >= 0) {
    //         thisNumber = integers[i].toString()
    //         phoneNumber = phoneNumber.concat(thisNumber)
    //     }
    // }


//     return phoneNumber
// };

// function createPhoneNumber(numbers) {
//     let cleaned = ('' + integers).replace(/\D/g, '')
//     let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
//     if (match) {
//         return '(' + match[1] + ') ' + match[2] + '-' + match[3]
//     }

//     return null
// }


function createPhoneNumber(integers){
    let cleaned = integers.join('')
    console.log(cleaned)
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    console.log(match)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    
    return null
}


    console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");


    function createPhoneNumber(numbers){
        const reducer = (p,c) => p.replace('x',c)
        return numbers.reduce(reducer, "(xxx) xxx-xxxx");
     }    
