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


const TREE = '#';
const CLEAR = '.';
let trees = 0;
let position = 0 

for (let i = 0; i < example.length; i++) {
    let terrain = example[i];
    let path = terrain[position];
    console.log(position, terrain, path);
    if (path === TREE) {
        trees = trees + 1;
    }
    position = position + 3;
    if (position > example[i].length) {
        position -= example[i].length
    }
}

console.log("Trees encountered: ", trees);
