export const placeRandom = () =>({
    type:"PLACE_RANDOM"
});

export const resetGame = () =>({
    type:"RESET"
});

export const moveUp = () =>({
    type:"MOVE_UP"
});

export const moveDown = () =>({
    type:"MOVE_DOWN"
});

export const moveLeft = () =>({
    type:"MOVE_LEFT"
});

export const moveRight = () =>({
    type:"MOVE_RIGHT"
});

export const initBoard = board =>({
    type:"INIT",
    board
});


export const fetchRankStarted = () => ({
    type:"FETCH_STARTED",
});

export const fetchRankSuccess =  (result) => ({
    type:"FETCH_SUCCESS",
    result
});

export const fetchRankFailure = (error) => ({
    type:"FETCH_FAILURE",
    error
});

let nextSeqId=0;

export const fetchRank = () => {
    return (dispatch) => {
        const apiUrl = "http://127.0.0.1:8080/rank";

        const seqId = ++ nextSeqId;

        const dispatchIfValid = (action) => {
            if (seqId === nextSeqId) {
                return dispatch(action);
            }
        };

        dispatchIfValid(fetchRankStarted());

        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            console.log(response.status)
            response.json().then((responseJson) => {
                dispatchIfValid(fetchRankSuccess(responseJson));
            }).catch((error) => {
                dispatchIfValid(fetchRankFailure(error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchRankFailure(error));
        })
    };
};
