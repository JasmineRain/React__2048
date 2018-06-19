import * as funcs from '../utils/board'
const initState = {
    board: [[2, 0, 0, 0], [0, 0, 0, 0], [0, 2, 0, 0], [0, 0, 0, 0]],
    score: 0,
    gameOver: false
};

const board = (state = initState, action) => {
    switch (action.type) {
        case "INIT": {
            if (action.board) {
                return {...state};
            }
            const result = funcs.addRandomNumToBoard(state);
            return {...state,...result};
        }
        case "PLACE_RANDOM": {
            const result = funcs.addRandomNumToBoard(state);
            return {...state,...result};
        }
        case "MOVE_UP": {
            const result = funcs.doMove('UP',state);
            return {...state,...result};
        }
        case "MOVE_DOWN": {
            const result = funcs.doMove('DOWN',state);
            return {...state,...result};
        }
        case "MOVE_LEFT": {
            const result = funcs.doMove('LEFT',state);
            return {...state,...result};
        }
        case "MOVE_RIGHT": {
            const result = funcs.doMove('RIGHT',state);
            return {...state,...result};
        }
        case "RESET": {
            //const result = funcs.addRandomNumToBoard(state);
            return {...initState};
        }
        default: {
            return state;
        }
    }
};


export default board;