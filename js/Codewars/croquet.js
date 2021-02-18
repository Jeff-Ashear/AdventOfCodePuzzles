const data = [[45, 12],[55,21],[19, -2],[104, 20]]

function openOrSenior(data) {
    const output = []
    for (i = 0; i < data.length; ++i) {
        if (data[i][0] > 55 && data[i][1] > 7) {
            output.push('senior')
        } else {
            output.push('open')
        }
    }
    return output
}

console.log(openOrSenior(data))