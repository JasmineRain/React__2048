const initState = {
    status:"loading",
    data:[
        { genre: 'Sports', sold: 0, income: 2300 },
        { genre: 'Strategy', sold: 0, income: 667 },
        { genre: 'Action', sold: 0, income: 982 },
        { genre: 'Shooter', sold: 0, income: 5271 },
        { genre: 'Other', sold: 0, income: 3710 }
    ]
};

export default (state = initState,action) => {
    switch(action.type) {
        case "FETCH_STARTED": {
            return initState;
        }
        case "FETCH_SUCCESS": {
            return {...state, status: "success", ...action.result};
        }
        case "FETCH_FAILURE": {
            return {...state,status: "failure"};
        }
        default: {
            return state;
        }
    }
}
