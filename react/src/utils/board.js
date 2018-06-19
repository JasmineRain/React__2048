
export const getEmptyCoordinates = board => {
    const coordinates = [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const val = board[row][col];
            if (val === 0) {
                coordinates.push([row, col]);
            }
        }
    }
    return coordinates;
};

export const getRandom = arr => arr[Math.round(Math.random() * (arr.length - 1))];

export const isBoardMoved = (pre, newBoard) =>
    JSON.stringify(pre) !== JSON.stringify(newBoard);

export const checkGameOver = board => {
    const copy = board;
    const check = func => {
        const isMoved = isBoardMoved(copy.board, func.board);
        return isMoved;
    };
    const moves = [
        check(doMove('LEFT',copy)),
        check(doMove('RIGHT',copy)),
        check(doMove('UP',copy)),
        check(doMove('DOWN',copy))
    ];

    return !moves.includes(true);
};

export const addRandomNumToBoard = board => {
    //console.log("from addRandom"+board);
    const newBoard = board.board.slice();
    if (checkGameOver(board)) {
        return {...board,gameOver:true};
    }

    const emptyCoordinates = getEmptyCoordinates(board.board);
    //console.log("empty coord"+emptyCoordinates.length);
    if (emptyCoordinates.length === 0) {
        // if (this.checkGameOver(newBoard)) {
        //     this.gameOver = true;
        //     return { gameOver: true };
        // }
        return board;
    }

    const cor = getRandom(emptyCoordinates);
    newBoard[cor[0]][cor[1]] = getRandom([2, 4]);

    // if (this.checkGameOver(newBoard)) {
    //     return newBoard;
    // }
    if(checkGameOver({...board,board:newBoard})){
        return {...board,gameOver:true};
    }

    return {...board,board:newBoard};
};

export const rotateRight = board => {
    //console.log("from rotate right"+board);
    const newBoard = [];
    const len = board.board.length;
    let mat = board.board;

    for (let col = 0; col < len; col++) {
        const newRow = [];
        for (let row = len - 1; row >= 0; row--) {
            newRow.push(mat[row][col]);
        }
        newBoard.push(newRow);
    }
    return {...board,board:newBoard};
};

export const rotateLeft = board => {
    //console.log("from rotate left"+board);
    const newBoard = [];
    const len = board.board.length;
    let mat = board.board;

    for (let col = len - 1; col >= 0; col--) {
        const newRow = [];
        for (let row = len - 1; row >= 0; row--) {
            newRow.unshift(mat[row][col]);
        }
        newBoard.push(newRow);
    }
    return {...board,board:newBoard};
};

export const shiftRight = board => {
    //console.log("from shift right"+board);
    const newBoard = [];
    //console.log(board.board);
    const len = board.board.length;
    let mat = board.board;

    // Shift all numbers to the right
    for (let row = 0; row < len; row++) {
        const boardRow = [];
        for (let col = 0; col < mat[row].length; col++) {
            const current = mat[row][col];
            if (current === 0)
                boardRow.unshift(current);
            else
                boardRow.push(current);
        }
        newBoard.push(boardRow);
    }
    //console.log(newBoard);
    return {...board,board:newBoard};
};

export const shiftLeft = board => {
    //console.log("from shift left"+board);
    const newBoard = [];
    const len = board.board.length;
    let mat = board.board;
    for (let r = 0; r < len; r++) {
        const newRow = [];
        for (let c = mat[r].length - 1; c >= 0; c--) {
            const curr = mat[r][c];
            if (curr === 0) newRow.push(curr);
            else newRow.unshift(curr);
        }
        newBoard.push(newRow);
    }
    return {...board,board:newBoard};
};

export const combineNumToLeft = board => {
    const len = board.board.length;
    let score = board.score;
    let newBoard = board.board.slice();
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) {
            if (newBoard[row][col] > 0 && newBoard[row][col] === newBoard[row][col + 1]) {
                newBoard[row][col] *= 2;
                newBoard[row][col + 1] = 0;
                score += newBoard[row][col];
            } else if (newBoard[row][col] === 0 && newBoard[row][col + 1] > 0) {
                newBoard[row][col] = newBoard[row][col + 1];
                newBoard[row][col + 1] = 0;
            }
        }
    }
    return {...board,score,board:newBoard};
};

export const combineNumToRight = board => {
    //console.log(board);
    const len = board.board.length;
    let score = board.score;
    let newBoard = board.board.slice();
    // Combine numbers and shift to right
    for (let row = 0; row < len; row++) {
        for (let col = newBoard[row].length - 1; col >= 0; col--) {
            if (newBoard[row][col] > 0 && newBoard[row][col] === newBoard[row][col - 1]) {
                newBoard[row][col] *= 2;
                newBoard[row][col - 1] = 0;
                score += newBoard[row][col];
            } else if (newBoard[row][col] === 0 && newBoard[row][col - 1] > 0) {
                newBoard[row][col] = newBoard[row][col - 1];
                newBoard[row][col - 1] = 0;
            }
        }
    }
    return {...board,score,board:newBoard};
};

export const doMove = (direction, board) => {
    //console.log("from doMove"+board);
    let newBoard = board;
    switch (direction) {
        case 'LEFT':
            newBoard=shiftLeft(newBoard);
            newBoard=combineNumToLeft(newBoard);
            return newBoard;
        case 'RIGHT':
            newBoard=shiftRight(newBoard);
            newBoard=combineNumToRight(newBoard);
            return newBoard;
        case 'UP':
            newBoard=rotateRight(newBoard);
            newBoard=shiftRight(newBoard);
            newBoard=combineNumToRight(newBoard);
            newBoard=rotateLeft(newBoard);
            return newBoard;
        case 'DOWN':
            newBoard=rotateRight(newBoard);
            newBoard=shiftLeft(newBoard);
            newBoard=combineNumToLeft(newBoard);
            newBoard=rotateLeft(newBoard);
            return newBoard;
        default:
            return board;
    }

};