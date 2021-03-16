const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.payload
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_EXPENSES':
            return {
                ...state,
                expenses: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;