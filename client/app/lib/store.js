
import { create } from "zustand";
import { addAuthor, addBookForm, deleteAuthor, deleteBook, loadAuthors, loadBooks } from "@/app/lib/load-date";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStoreAuthors = create((set) => ({
   authors: [],
   fetchAuthors: async () => {
      const data = await loadAuthors();
      set({ authors: data })
   },
   deleteAuthors: async (id) => {
      const response = await deleteAuthor(id);
      if (response) {
         set((state) => ({ authors: state.authors.filter(author => author.id !== id) }));
      } else {
         console.log("wrong")
      }
   },
   addAuthor: async (formData) => {
      const response = await addAuthor(formData);
      if (response) {
         set((state) => ({ authors: [...state.authors, newAuthor] }))
      }
   }
}))

export const useStoreBooks = create((set) => ({
   books: [],
   fetchBooks: async () => {
      const response = await loadBooks();
      set({ books: response })
   },
   addBook: async (FormData) => {
      const response = await addBookForm(FormData);
      if (response.ok) {
         set((state) => ({ books: [...state.books, FormData] }))
      }
   },
   deleteBook: async (id) => {
      const response = deleteBook(id);
      if (response.ok) {
         set((state) => ({
            books: state.books.filter(book => book.id !== id)
         }))
      }
   }
}))

export const useStoreFavourites = create(
   persist((set) => ({
      favourites: [],
      favouriteStatus: {},
      addInFavourites: (author) => set((state) => ({
         favourites: [...state.favourites.filter(item => item._id !== author._id), author],
         favouriteStatus: { ...state.favouriteStatus, [author._id]: true }
      })),
      deleteFromFavourites: (author) => set((state) => ({
         favourites: [...state.favourites.filter(item => item._id !== author._id)],
         favouriteStatus: { ...state.favouriteStatus, [author._id]: false }
      })),
   }),
      {
         name: "favourite",
         storage: createJSONStorage(() => localStorage)
      },
   ))

