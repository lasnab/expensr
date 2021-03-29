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
        case 'SET_TOTAL':
            return {
                ...state,
                total: action.payload
            };
        case 'SET_LAST_FIVE':
            return {
                ...state,
                lastFive: action.payload
            };
        case 'SET_WEEKLY_EXPENSES':
            return {
                ...state,
                weeklyExpenses: action.payload
            };
        case 'SET_CATEGORY_EXPENSES':
            return {
                ...state,
                categoryExpenses: action.payload
            };
        case 'SET_CURRENCY':
            return {
                ...state,
                currency: action.payload
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