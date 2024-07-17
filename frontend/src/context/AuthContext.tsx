import { createContext, ReactNode, useReducer} from "react";
import { User } from "../types/User";

interface AuthContextProviderProps {
    children: ReactNode
}

export interface AuthAction {
    type: "LOGIN" | "LOGOUT",
    payload?: { email: String, username: String, roles: number[] }
}

export const AuthContext = createContext<{
    state: User,
    dispatch: React.Dispatch<AuthAction>,
    logout: () => void
} | null>(null)

export const authReducer = (state: User, action: AuthAction) => {
    switch(action.type) {
        case "LOGIN":
            if (action.payload) {
                return { ...action.payload, isLoggedIn: true }
            }
            return state
        case "LOGOUT":
            return { 
                email: null,
                username: null,
                isLoggedIn: null,
                roles: null 
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {
        email: null,
        username: null,
        isLoggedIn: null,
        roles: null
    })

    const logout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (
        <AuthContext.Provider value={{state, dispatch, logout}}>
            { children }
        </AuthContext.Provider>
    )
}