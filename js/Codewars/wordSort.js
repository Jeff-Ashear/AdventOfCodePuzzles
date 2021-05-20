function order(str) {
    if (str == "") {
        return str
    }

    let sortStrs = str.split(" ")
    let result = ""
    let sorter = /\d+/;
    let counter = 1

    for (let i = 0; i < sortStrs.length; i++) {
        // console.log(sortStrs[i].match(sorter))
        if (counter == sortStrs.length) {
            console.log("counter", counter)
            return result
        }
        if (counter == sortStrs[i].match(sorter)) {
            result = result + sortStrs[i] + " "
            counter++
            i = 0
            console.log("result", result)
        }
        
        // if (i + 1 == sortStrs.match(sorter)) {
        //     result = result + sortStrs[i] + " "
        //     console.log("result ", result)
        // }
    }
    // return result
}


console.log("actual:", order("is2 Thi1s T4est 3a"), "expected:", "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")