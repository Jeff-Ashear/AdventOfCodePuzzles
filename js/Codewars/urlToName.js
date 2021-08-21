function domainName(url) {
    
    let indicie = 0;
    
    switch(url) {
        case url === "http://google.com":
            console.log("url: ", url)
            break;
    }
    
    
    
    // if (url.startsWith('www')) {
    //     indicie = 4
    // } else if (url.startsWith('http://www')) {
    //     indicie = 11
    // } else if (url.startsWith('https://www')) {
    //     indicie = 12
    // } else if (url.startsWith('http://')) {
    //     indicie = 7
    // } else if (url.startsWith('https://')) {
    //     indicie = 8
    // } else {
    //     indicie = 0
    // }
   
   
    let newString = ""
    
    for (let i = indicie; i < url.length; i++) {
        if (url[i] === ".") {
            break;
        } else {
            newString = newString + url[i]
        }
    }


    // return newString
}

console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("https://www.muao5trc.fr/archive/"))
console.log(domainName("http://www.j3vsibl91r2opz27cad7h0vda.it/users"))