function mapper(array, func) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]))
    }
    return result
}

console.log([1, 2, 3].map(x => x * x))
console.log(mapper([1, 2, 3], x => x * x))
