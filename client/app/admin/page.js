"use client"
import styles from "@/app/style/admin.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { useState } from "react";

export default function Admin() {
   const [whenUser, setWhenUser] = useState(false);



   return (
      <div className={styles.block}>
         <article className={styles.blockUsers}>
            <h1 className={styles.title}>List Users</h1>
            <header className={styles.header}>
               <span className={styles.titleName}>Name</span>
               <span>Create Date</span>
               <span>Role</span>
               <span className={styles.actionTitle}>Action</span>
            </header>
            <article className={styles.item}>
               <div className={styles.person}>
                  <h2 className={styles.fullname}>David Wagner</h2>
                  <p className={styles.email}>david_wagner@example.com</p>
               </div>
               <div className={whenUser ? styles.default : styles.button} onClick={() => setWhenUser(!whenUser)}>
                  {
                     whenUser ? 'User' : 'Admin'
                  }
               </div>
               <div className={styles.date}>
                  24 Otc,2015
               </div>
               <div className={styles.role}>
                  Lorem ipsum
               </div>
               <div className={styles.action}>
                  <div className={styles.change}>
                     <LuPencilLine />
                  </div>
                  <div className={styles.delete}>
                     <RiDeleteBin5Line />
                  </div>
               </div>
            </article>
            <article className={styles.item}>
               <div className={styles.person}>
                  <h2 className={styles.fullname}>David Wagner</h2>
                  <p className={styles.email}>david_wagner@example.com</p>
               </div>
               <div className={whenUser ? styles.default : styles.button} onClick={() => setWhenUser(!whenUser)}>
                  {
                     whenUser ? 'User' : 'Admin'
                  }
               </div>
               <div className={styles.date}>
                  24 Otc,2015
               </div>
               <div className={styles.role}>
                  Lorem ipsum
               </div>
               <div className={styles.action}>
                  <div className={styles.change}>
                     <LuPencilLine />
                  </div>
                  <div className={styles.delete}>
                     <RiDeleteBin5Line />
                  </div>
               </div>
            </article>
         </article>
      </div>
   )
}