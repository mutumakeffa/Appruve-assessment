import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';



// initial state
const  initialState = {
    subscriptions: [
        { id: 1, plan: 'Bronze', price: 2000 },
        { id: 2, plan: 'Silver', price: 3000 },
        { id: 3, plan: 'Gold', price: 4000 },
    ]
}


// Create context
export const GlobalContext = createContext(initialState)


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    // Actions
    function addSubscription(id) {
        dispatch({
            type: 'ADD_SUBSCRIPTION',
            payload: id
        });
    }

    return(
        <GlobalContext.Provider value={{ 
            subscriptions: state.subscriptions,
            addSubscription
            
        }}>
            { children }
        </GlobalContext.Provider>
    )
}
