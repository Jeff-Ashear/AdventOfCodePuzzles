function isSolved(board) {
    let row0 = board[0]
    let row1 = board[1]
    let row2 = board[2]
    let boardState = 10;

    console.log("dbugger", board[0][2])

    switch(board) {
        case board[0][0] && board[1][0] && board[2][0] === 1:
            boardState = 1
            break;
        case board[0][0] == 1:
            console.log("boardState = 1")
            break;
        case row0[0] && row1[0] && row2[0] === 1:
            boardState = 1
            break;
        case row0[0] === 0:
            boardState = 1
            console.log('boardState: ', boardState)
            break;
        default:
            boardState = 2;
            break;    
    }
    
    return boardState
    
}

console.log(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]]))
console.log(isSolved([[1, 1, 1], [0, 1, 2], [2, 1, 0]]))