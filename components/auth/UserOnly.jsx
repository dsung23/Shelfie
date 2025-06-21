import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { Text } from 'react-native'
import ThemedLoader from "../ThemedLoader"

// UserOnly component: restricts access to authenticated users only
const UserOnly = ({children}) => {
    // Get user and authChecked state from context
    const { user, authChecked } = useUser()
    // Get router instance for navigation
    const router = useRouter()

    useEffect(() => {
        // If authentication has been checked and there is no user, redirect to login
        if(authChecked && user === null) {
            router.replace('/login')
        }

    }, [user, authChecked])

    // While authentication is being checked or user is not loaded, show loading text
    if (!authChecked || !user) {
        return (
            <ThemedLoader />
        )
    }

    // If user is authenticated, render children components
    return children

}
export default UserOnly