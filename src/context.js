import React, { createContext, useState } from "react"

export const UserContext = React.createContext()

export const ContextProvider = ({ children }) => {

    const [curretUser] = useState()

    function signup() {
        
    }
    
    return (
        <UserContext.Provider value={
            signup
        }>
            {children}
        </UserContext.Provider>
    )
}


