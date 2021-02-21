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

console.log("12b. without initial value: ", (reducer([[], 1, 2, 3], ( (acc, val) => {acc.push(val); return acc} ))))