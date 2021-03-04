function toCamelCase(str) {
    let array = []
    if (str.includes("-")) {
        array = str.split("-")
        
        console.log(array)
    } else if (str.includes("_")) {
        array = str.split("_")

    }

}

console.log(toCamelCase(''), '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")