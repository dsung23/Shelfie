import { createContext, useState } from 'react'
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

// Create a context to share user data and auth functions across the app
export const UserContext = createContext()

// UserProvider component wraps the app and provides user/auth state
export function UserProvider({ children }) {
    const [user, setUser] = useState(null); // Holds the current user object

    // Login function: creates a session and fetches user data
    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        } catch (error) {
            throw Error(error.message)
        }

    }

    // Register function: creates a new user and logs them in
    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            throw Error(error.message)
        }

    }

    // Logout function: 
    async function logout() {
        await account.deleteSession("current")
        setUser(null)
    }

    // Provide user state and auth functions to children components
    return (
        <UserContext.Provider value={{user, login, register, logout }}>
            { children }
        </UserContext.Provider>
    )
}