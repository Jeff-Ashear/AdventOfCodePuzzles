function narcissistic(value) {
    let str = value.toString()
    let exponent = str.length
    let narcAcc = 0
    let narcTotal = 0

    for (let i = 0; i < exponent; i++) {
        let toNum = parseInt(str[i])
        narcAcc =  toNum ** exponent
        narcTotal = narcTotal + narcAcc
        console.log(narcTotal)
    }
    if (value === narcTotal) {
        return true
    } else{
        return false
    }
}

function narcissistic2(value) {
    return ('' + value).split('').reduce(function(p, c){
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

function narcissistic3(value){
    return ('' + value).split('').reduce(acc, val) =>
        acc + Math.pow(val, ('' + value.length))

    console.log(x)
}

console.log(narcissistic3(7));
console.log(narcissistic3(371));
console.log(narcissistic3(1652))