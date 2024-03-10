import { create } from "zustand";
import { addAuthor, deleteAuthor, loadAuthors } from "@/app/lib/load-date";

export const useStore = create((set) => ({
   authors: [],
   fetchAuthors: async () => {
      const data = await loadAuthors();
      set({ authors: data })
   },
   deleteAuthors: async (id) => {
      await deleteAuthor(id);
   },
   addAuthor: async (formData) => {

      const newAuthor = {
         fullname: formData.get("fullname"),
         typeactivity: formData.get("typeactivity"),
         placeofbirth: formData.get("placeofbirth"),
         placeofdeath: formData.get("placeofdeath"),
         deathdate: formData.get("deathdate"),
         birthday: formData.get("birthday"),
         genre: formData.get("genre"),
         direction: formData.get("direction"),
         languageworks: formData.get("languageworks"),
         image: formData.get("image"),
      }
      console.log(newAuthor.image)
      const response = await addAuthor(newAuthor);
      if (response) {
         set((state) => ({ authors: [...state.authors, newAuthor] }))
      }
   }
}))
