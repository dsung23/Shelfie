import { useContext } from 'react'
import { BooksContext} from '../context/BooksContext'

export function useBooks() {
    const context = useContext(BooksContext)

    if (!context) {
        throw new Error("useUser must be used within a UserProvider")
    }

    return context
}