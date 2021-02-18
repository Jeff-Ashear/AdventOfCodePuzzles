function reducer(array, func, init) {
    let result = 0
    result = 0
    if (!init) {
        init = array[0]
        result = result + init
        for (i = 1; i < array.length; i++) {
            result = func(result, array[i])
        }
    } else {
    result = result + init
    for (let i = 0; i < array.length; i++) {
        result = func(result, array[i])       
    }
    }
    return result
}

// testing where:
//     a = relying on the .reduce method in the background
//     b = relying on the manually coded reducer function
// console.log(`"a" tests rely on the .reduce method, while "b" tests do not.  Results should be the same.`)
// console.log("1a. with initial value: ", [1, 2, 3].reduce((acc, val) => { return acc + val}, 10))
// console.log("1b. with initial value: ", ([1, 2, 3], (acc, val) => acc + val, 10))

// console.log("2a. with initial value: ", [6, 7, 8].reduce((acc, val) => {return acc + val}, 5))
// console.log("2b. with initial value: ", reducer([6, 7, 8], (acc, val) => acc + val, 5))

// console.log("3a. no initial value: ", [6, 7, 8].reduce((acc, val) => acc + val))
// console.log("3b. no initial value: ", reducer([6, 7, 8], (acc, val) => acc + val))

// console.log("4a. subtract with initVal: ", [10, 9, 8].reduce((acc, val) => { return acc - val}, 100))
// console.log("4b. subtract with initVal: ", reducer([10, 9, 8], (acc, val) => acc - val, 100))

// console.log("5a. subtract, no initVal: ", [10, 9, 8].reduce((acc, val) => {return acc - val}))
// console.log("5b: subtract, no initial value: ", reducer([10, 9, 8], (acc, val) => acc - val))

// console.log('6a. multiply with initial value', [3, 4, 5].reduce((acc, val) => {return acc * val}, 2 ))
// console.log('6b: multiply with initVal: ', reducer([3, 4, 5], (acc, val) => acc * val, 2))

// console.log('7a. multiply, no initial value', [3, 4, 5].reduce((acc, val) => {return acc * val}))
// console.log('7b: multiply, no initVal: ', reducer([3, 4, 5], (acc, val) => acc * val))

// console.log('8a. divide with initial value', [5, 4, 2].reduce((acc, val) => {return acc / val}, 200 ))
// console.log('8b: divide with initVal: ', reducer([5, 4, 2], (acc, val) => acc / val, 200))

// console.log('9a. divide, no initial value', [20, 5, 2].reduce((acc, val) => {return acc / val}))
// console.log('9b: divide, no initVal: ', reducer([20, 5, 2], (acc, val) => acc / val))

console.log("10a. with initial value: ", ["a", "b", "c"].reduce((acc, val) =>  acc + val))
console.log("10b. with initial value: ", (reducer(["a", "b", "c"], (acc, val) => acc + val)))


// console.log(
//     [0, 1, 2, 3, 4].reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     }, 10)
// )