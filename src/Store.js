import React, {createContext, useReducer} from "react";
import reducer from './reducer'

const initialState = {
    login: false,
    user: {},
    expenses: [],
    total: 0,
    lastFive: [],
    weeklyExpenses:[],
    categoryExpenses:{ home: 0, food: 0, fuel: 0, shopping: 0, other: 0},
    currency: 'INR',
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;