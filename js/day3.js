const fs = require('fs')

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
    let position = 0

    for (let i = 0; i < terrainMap.length; i++) {
        let terrain = terrainMap[i];
        let path = terrain[position];
        console.log(position, terrain, path);
        if (path === TREE) {
            trees = trees + 1;
        }
        position = position + 3;
        if (position >= terrain.length) {
            position -= terrain.length
        }
    }
    
    console.log("Trees encountered: ", trees);
}

treesEncountered(map);
$('#day3Result').text(trees + ' were encountered on the descent.');