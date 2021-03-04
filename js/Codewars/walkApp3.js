function isValidWalk(walk) {
    let validWalk = false
    let blocksNS = 0
    let blocksEW = 0

    if (walk.length == 10) {
        for (let i = 0; i < walk.length; i++) {
            switch(walk[i]) {
                case "n":
                    blocksNS++;
                    break;
                
                case "s":
                    blocksNS--;
                    break;
                
                case "e":
                    blocksEW++;
                    break;
                
                case "w":
                    blocksEW--;
                    break;
                default: console.log(blocksNS, blocksEWs)
            }
        }
        if (blocksNS === 0 && blocksEW === 0) {
            validWalk = true
        }
    }
    return validWalk
}


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');