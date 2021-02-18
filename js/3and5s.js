function solution(number) {
    let arrayOfNumbers = []
    let answer = 0;

    if (number < 0) {
        return answer
    } else {
        for (i = 1; i <= number; ++i) {
            if (number < 0) {
                return answer
            } else if (i % 3 == 0 && i % 5 == 0) {
                // console.log("so true bro: ", i)
                arrayOfNumbers.push(i)
            } else if (i % 3 == 0) {
                // console.log("true bro: ", i)
                arrayOfNumbers.push(i)
            } else if (i % 5 == 0) {
                // console.log("Whatevs: ", i)
                arrayOfNumbers.push(i)
            }
        }

        console.log(arrayOfNumbers)

        for (i = 0; i < arrayOfNumbers.length; ++i) {
            answer = answer + arrayOfNumbers[i]
        }
        return answer
    }
}

console.log("The answer is: ", solution(-10))