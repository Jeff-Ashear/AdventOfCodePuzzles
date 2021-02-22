function isValidWalk(walk) {
    let validWalk = false
    let blocks = 0

    if (walk.length == 10) {
        for (let i = 0; i < walk.length; i++) {
            if (walk[i] == "n" || walk[i] == "e") {
                blocks = blocks + 1
            } else {
                blocks = blocks - 1
            }
        }
        if (blocks === 0) {
            validWalk = true
        }
    }
    return validWalk
}


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');