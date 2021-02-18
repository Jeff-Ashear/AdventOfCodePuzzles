var fs = require('fs')

const d3Data = fs.readFileSync('../data/day3input.txt', 'utf8')
const map = d3Data.split('\n')

let example = [
    "..##.......",
    "#...#...#..",
    ".#....#..#.",
    "..#.#...#.#",
    ".#...##..#.",
    "..#.##.....",
    ".#.#.#....#",
    ".#........#",
    ".##...#...",
    "#...##....#",
    ".#..#...#.#"
]



function treesEncountered(terrainMap) {
    const TREE = '#';
    const CLEAR = '.';
    let trees = 0;
    let slope1Trees = 0
    let slope2Trees = 0
    let slope3Trees = 0
    let slope4Trees = 0
    let slope5Trees = 0

    let position = 0
    
        for (let i = 0; i < terrainMap.length; i++) {
            let terrain = terrainMap[i];
            let path = terrain[position];
            // console.log(position, terrain, path);
            if (path === TREE) {
                trees = trees + 1;
                slope1Trees = slope1Trees + 1;                
            }
            position = position + 1;
            if (position >= terrain.length) {
                position -= terrain.length
            }
        }

        position = 0
        console.log("Slope 1 trees encountered: ", slope1Trees)
        console.log("total trees encountered: ", trees)

    for (let i = 0; i < terrainMap.length; i++) {
        let terrain = terrainMap[i];
        let path = terrain[position];
        // console.log(position, terrain, path);
        if (path === TREE) {
            trees = trees + 1;
            slope2Trees = slope2Trees + 1
        }
        position = position + 3;
        if (position >= terrain.length) {
            position -= terrain.length
        }
    }
    
    position = 0
    console.log("Slope 2 trees encountered: ", slope2Trees)
    console.log("total trees encountered: ", trees)

    for (let i = 0; i <terrainMap.length; i++) {
        let terrain = terrainMap[i]
    }
}

treesEncountered(map);
// $('#day3Result').text(trees + ' were encountered on the descent.');