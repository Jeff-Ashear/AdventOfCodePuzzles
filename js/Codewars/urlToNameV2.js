function domainName(url) {
    if (url.startsWith("www.")) {
        return url.replace("www.", "").split(".")[0]
    } else if (url.startsWith("https://www.")) {
        return url.replace("https://www.", "").split(".")[0]
    } else if (url.startsWith("http://www.")) {
        return url.replace("http://www.", "").split(".")[0]
    } else if (url.startsWith("https://")) {
        return url.replace("https://", "").split(".")[0]
    } else if (url.startsWith("http://")) {
        return(url.replace("http://", "")).split(".")[0]
    }
    
}

console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("https://www.muao5trc.fr/archive/"))
console.log(domainName("http://www.j3vsibl91r2opz27cad7h0vda.it/users"))