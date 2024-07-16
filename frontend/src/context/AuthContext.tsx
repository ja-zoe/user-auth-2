import { createContext, ReactNode, useReducer, useState } from "react";
import { User } from "../types/User";

interface AuthContextProviderProps {
    children: ReactNode
}

export interface AuthAction {
    type: "LOGIN" | "SIGNOUT",
    payload: User
}

export const AuthContext = createContext<{
    state: User,
    dispatch: React.Dispatch<AuthAction>
} | null>(null)

export const authReducer = (state: User, action: AuthAction) => {
    switch(action.type) {
        case "LOGIN":
            return { ...action.payload }
        case "SIGNOUT":
            return { 
                email: null,
                username: null,
                isLoggedIn: null 
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {
        email: null,
        username: null,
        isLoggedIn: null
    })

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}