//This component will hold the context for the user's name.
import React, { useContext } from "react";
import {createContext, useState} from "react";

export const UserContext = createContext();


export function UserProvider({children}){
    const[name, setName] = useState("");

    return <UserContext.Provider value={{name, setName}}>{children}</UserContext.Provider>
}