String.prototype.toJadenCase = function (string) {
    let toJaden = string.split(" ")
    let jadenized = "";
    for (let i = 0; i < toJaden.length; i++) {
        let thisWord = toJaden[i].charAt(0).toUpperCase() + toJaden[i].substring(1)
        if (jadenized === "") {
            jadenized = thisWord
        } else {
            jadenized = " " + thisWord
        }
    }
    return jadenized
}

console.log(String.prototype.toJadenCase("this is an entirely lowercase string"))
