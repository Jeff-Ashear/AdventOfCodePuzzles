function count(string) {
    let obj = {}
    let char = ""
    
    if (string.length > 0) {
       for (let i = 0; i < string.length; i++) {
           char = string[i]
           if (obj.hasOwnProperty(char)) {
               obj[char] = obj[char] + 1
           } else {
               obj[char] = 1  
           }
       } 
    } 

    return obj
}

console.log(count('aba'))
console.log(count(''))