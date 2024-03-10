"use client"
import styles from "@/app/style/authorspage.module.scss";
import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { useStore } from "@/app/lib/store";
import { useEffect } from "react";


export default function Authors() {

   const fetchAuthors = useStore((state) => state.fetchAuthors);
   const authors = useStore(state => state.authors);
   const deleteAuthors = useStore((state) => state.deleteAuthors);
   useEffect(() => {
      fetchAuthors()
   }, [fetchAuthors])

   const del = (id) => deleteAuthors(id);


   return (
      <div className={styles.block}>
         <article className={styles.blockAuthors}>
            <header className={styles.header}>
               <span className={styles.titlePhoto}>Photo</span>
               <span className={styles.titleName}>Name</span>
               <span className={styles.titleDate}>Date</span>
               <span className={styles.actionTitle}>Action</span>
            </header>
            {
               authors?.map((author, index) => {
                  return (
                     <article className={styles.item} key={index}>
                        <div className={styles.photo}>
                           <Image width={70} height={100} src={author.image} alt="author" className={styles.image} />
                        </div>
                        <h2 className={styles.fullname}>{author.fullname}</h2>
                        <div className={styles.date}>
                           {author.date}
                        </div>
                        <div className={styles.action}>
                           <div className={styles.change}>
                              <LuPencilLine />
                           </div>
                           <div className={styles.delete} onClick={() => del(author._id)}>
                              <RiDeleteBin5Line />
                           </div>
                        </div>
                     </article>
                  )
               })
            }
         </article>
      </div>

   )
}