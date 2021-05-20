function rot13(message) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let rottenMessage = []
    let expression = /\s+/g;

    for (let i = 0; i < message.length; i++) {
        if (message[i].match(expression)) {
            rottenMessage.push(message[i])
        } else {
            let messageLetter = message[i]
            for (let j = 0; j < alphabet.length; j++)
            if (messageLetter === alphabet[j]) {
                let rottenNumber = j + 13
                if (rottenNumber > 25) {
                    rottenNumber = rottenNumber -25
                }
                rottenMessage.push(alphabet[rottenNumber])
            }
        }
    }
    return rottenMessage.join("")
}

console.log(rot13("do I really like to code, or do I just wish I liked to code?"))

