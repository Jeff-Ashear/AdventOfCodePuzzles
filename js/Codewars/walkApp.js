function isValidWalk(walk) {
    let validWalk = false
    let stepsNS = 0
    let stepsEW = 0

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {

            case "n":
                stepsNS = stepsNS + 1
                console.log(walk[i])
                console.log("steps NS: ", stepsNS)
                break;
            case "s":
                stepsNS = stepsNS - 1
                console.log(walk[i])
                break;
            case "e":
                stepsEW = stepsEW + 1
                console.log(walk[i])
                break;
            case "w":
                stepsEW = stepsEW - 1
                console.log(walk[i])
                break;
            default: console.log(walk[i])
        }
    }
    console.log("walk length: ", walk.length)
    if (walk.length == 10 && stepsNS === 0 && stepsEW === 0) {
        validWalk = true
    }
    switch (validWalk) {
        case true:
            console.log(`I'm working`);
            break;
        case false:
            console.log(`I'm false but working`)
            break;
        default:
            console.log("defaulted")
    }
    return validWalk
}


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(!isValidWalk(['w']), 'should return false');
console.log(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');