import React, {createContext, useState} from "react";


const Context = createContext();

const ContextProvider = ({children})=>{
    const [data, setData] = useState("abul");

    return (
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
}


export {ContextProvider, Context};