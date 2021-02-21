const summation = function(n) {
    let set = []
    let sum = 0
    let subtractor = n
    for (i = 0; i < n; i++) {
        set.push(subtractor)
        subtractor = subtractor - 1
    }
    for (i = 0; i < set.length; ++i) {
       sum = sum + set[i] 
    }
    return sum
}


const summation2 = function(n) {
    let sum = (n * (n + 1) / 2)
    return sum
}

const summation = (n) => {return (n * (n + 1) / 2)}

console.log(summation2(1), 1)
console.log(summation2(8), 36)
console.log(summation3(15))