import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
const initialState = {

};

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    
    
    return <ShopContext.Provider value={ value }>
        {children}
    </ShopContext.Provider>

}