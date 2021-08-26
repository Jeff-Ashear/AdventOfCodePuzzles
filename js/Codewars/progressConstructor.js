class User {
    constructor(rank, progress,) {
        this.rank = rank; 
        this.progress = progress;
    }

    // get progress() {
    //     return this.getProgress()
    // }
    // getProgress() {
    //     return this.rank + ' ', + this.progress;
    // }
}

let jeff = new User(-8, 10)

console.log(jeff.rank)
console.log(jeff.progress)