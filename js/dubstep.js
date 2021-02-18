function songDecoder(song) {
   let originalSong = song.replace(/WUB/g, " ")
   originalSong = originalSong.replace(/\s\s+/g, " ")
   originalSong = originalSong.trim()
   console.log(originalSong)
}

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
(songDecoder("AWUBBWUBC")


//Why does the scope problem happen:

// function songDecoder(song) {
//    let originalSong = song.replace(/WUB/g, " ");
//    return originalSong
// }

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// console.log(originalSong) 
