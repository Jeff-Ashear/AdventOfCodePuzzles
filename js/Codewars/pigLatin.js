function pigIt(str){
    let toArray  = str.split(" ")
    let thisLilPiggy = ""

    for(let i = 0; i < toArray.length; i++) {
        if (!toArray[i].match(/^[.,:!?]/)){

            let firstLetter = toArray[i][0]
            let remains = toArray[i].slice(1)
            thisLilPiggy += remains + firstLetter + 'ay'
            
            if (i < toArray.length - 1) {
                thisLilPiggy += ' '
            }
        } else {
            thisLilPiggy += toArray[i]
        }

        
    }

    return thisLilPiggy
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay')
console.log(pigIt('No more technical doccumentation !'))