import React, {createContext, useReducer} from "react";


const Context = createContext();
const InitState = []

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            return [...state, action.payload];
        case "REMOVE_CART":
            return state.filter((item, index) => index !== action.payload.index);
        case "UPDATE_CART":
            return [...state.filter((item, index)=> index !== action.payload.indexi), action.payload];
        default:
            return state;
    }
}
const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, InitState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}


export {ContextProvider, Context};