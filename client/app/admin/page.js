"use client"
import styles from "@/app/style/admin.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { useState } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'
import { nanoid } from "nanoid";
const useStore = create(persist((set) => ({
   users: [
      {
         id: 1,
         name: "Oleg Wagner",
         email: "david_wagner@example.com",
         date: "02.02.2024",
         role: "Lorem ipsum",
      },
      {
         id: 2,
         name: "David Wagner",
         email: "david_wagner@example.com",
         date: "02.02.2024",
         role: "Lorem ipsum",
      },
      {
         id: 3,
         name: "Oleg Wagner",
         email: "david_wagner@example.com",
         date: "02.02.2024",
         role: "Lorem ipsum",
      },
      {
         id: 4,
         name: "David Wagner",
         email: "david_wagner@example.com",
         date: "02.02.2024",
         role: "Lorem ipsum",
      },
   ],
   deleteUser: (id) => set((state) => ({ ...state, users: state.users.filter((item) => item.id !== id) })),
   addUser: (id, name, email, date, role) => set((state) => ({ ...state, users: [...state.users, { id, name, email, date, role }] }))
}), {
   name: "users",
}
))

export default function Admin() {
   const [whenUser, setWhenUser] = useState(false);

   const users = useStore((state) => state.users)

   const deleteUser = useStore((state) => state.deleteUser);

   const newUser = useStore((state) => state.addUser)

   const handleDelete = (id) => {
      deleteUser(id)
   }
   const addUser = (formData) => {
      const id = nanoid();
      const name = formData.get("name");
      const email = formData.get("email");
      const date = formData.get("date");
      const role = formData.get("role");
      newUser(id, name, email, date, role)
   }

   return (
      <div className={styles.block}>
         <article className={styles.blockUsers}>
            <form action={addUser}>
               <input type="text" name="name" placeholder="name" />
               <input type="email" name="email" placeholder="email" />
               <input type="text" name="date" placeholder="date" />
               <input type="text" name="role" placeholder="role" />
               <button type="submit">send</button>
            </form>
            <h1 className={styles.title}>List Users</h1>
            <header className={styles.header}>
               <span className={styles.titleName}>Name</span>
               <span>Create Date</span>
               <span>Role</span>
               <span className={styles.actionTitle}>Action</span>
            </header>
            {
               users.map((user, index) => {

                  return (
                     <article className={styles.item} key={index}>
                        <div className={styles.person}>
                           <h2 className={styles.fullname}>{user.name}</h2>
                           <p className={styles.email}>{user.email}</p>
                        </div>
                        <div className={whenUser ? styles.default : styles.button} onClick={() => setWhenUser(!whenUser)}>
                           {
                              whenUser ? 'User' : 'Admin'
                           }
                        </div>
                        <div className={styles.date}>
                           {user.date}
                        </div>
                        <div className={styles.role}>
                           {user.role}
                        </div>
                        <div className={styles.action}>
                           <div className={styles.change}>
                              <LuPencilLine />
                           </div>
                           <div className={styles.delete} onClick={() => handleDelete(user.id)}>
                              <RiDeleteBin5Line />
                           </div>
                        </div>
                     </article>
                  )
               })
            }
         </article>
      </div >
   )
}