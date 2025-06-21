import { createContext, useState } from 'react'
import { databases } from '../lib/appwrite'
import { ID, Permission } from 'react-native-appwrite'
import { useUser } from '../hooks/useUser'

export const BooksContext = createContext()

const DATABASE_ID = "68565e6100110b4c548c"
const COLLECTION_ID = "68565e7c0003302d009f"

export function BooksProvider({children}) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchBookById(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }

    }
    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
        } catch (error) {
            console.error(error.message)
        }
    }
    async function deleteBook(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBookById, createBook, deleteBook}}
        >
            {children}
        </BooksContext.Provider>
    )

}