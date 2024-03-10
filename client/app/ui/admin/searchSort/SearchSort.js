"use client"
import styles from "@/app/ui/admin/searchSort/searchsort.module.scss";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import AddUser from "../AddUser/AddUser";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AddAuthor from "../AddAuthor/AddAuthor";
import AddBook from "../AddBook/AddBook";
import Link from "next/link";
export default function SearchSort() {


   const pathname = usePathname()
   const [openModal, setOpenModal] = useState(false);
   return (
      <div>
         <h1 className={styles.title}>{pathname === "/admin" && 'Users Dashboard' || pathname === "/admin/users" && 'Users' || pathname === "/admin/authors" && 'Authors'}</h1>
         <div className={styles.wrapper}>

            <div className={styles.wrapperInput}>
               <HiOutlineMagnifyingGlass className={styles.icon} />
               <input type="text" className={styles.search} placeholder="Search" />
            </div>
            {
               pathname === "/admin" ?
                  <div className={styles.button} onClick={() => setOpenModal(!openModal)}>
                     Add user +
                  </div>
                  :
                  pathname === "/admin/authors" ?
                     <div className={styles.button} onClick={() => setOpenModal(!openModal)}>
                        Add author +
                     </div>
                     : pathname === "/admin/books" ?
                        <div className={styles.button} onClick={() => setOpenModal(!openModal)}>
                           Add book +
                        </div>
                        : pathname === "/admin/articles" ?
                           <Link className={styles.button} href="/admin/articles/article">
                              Add article +
                           </Link>
                           : null
            }

            <form>
               <select name="sort" id="sortby" className={styles.sort} defaultValue="sort">
                  <option value="sort">Sort by</option>
                  <option value="one">one</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
               </select>
            </form>
         </div>
         {openModal &&
            <div className={styles.wrapperModel} onClick={() => setOpenModal(false)}>
               {
                  pathname === "/admin" ?
                     <AddUser openModel={setOpenModal} />
                     :
                     pathname === "/admin/authors" ?
                        <AddAuthor openModel={setOpenModal} />
                        :
                        pathname === "/admin/books" ?
                           <AddBook openModel={setOpenModal} />
                           : null
               }

            </div>
         }
      </div>
   )
}