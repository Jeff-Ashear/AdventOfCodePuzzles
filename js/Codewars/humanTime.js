function humanReadable(seconds) {
    //takes seconds
        // variables for hh  mm and ss
        // if seconds is > 59 
            //than seconds -59 and ss +59
            //seconds is then divided by 60
    if (seconds < 0) {
        return "Units of time cannot be negative."
    }
            
    // let ss = 0;
    // let mm = 0;
    // let hh = 0;
    // let minutes = 0
    // let hours = 0

    // if (seconds > 59) {
    //     seconds - 59
    //     ss = 59
    //     console.log("ss", ss)
    //     console.log("seconds", seconds)
    //     minutes = seconds / 60
    //     console.log("minutes", minutes)
    // }

    let humanTime = new Date(seconds * 1000).toISOString().substr(11, 8)
    return humanTime


  }

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');