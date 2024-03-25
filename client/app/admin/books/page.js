import styles from "@/app/style/books.module.scss";

import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import book from '@/public/img/books/filmpreview.png';
import Image from "next/image";

export default function Books() {
   return (
      <div className={styles.block}>
         <article className={styles.blockBooks}>
            <header className={styles.header}>
               <span className={styles.titlePhoto}>Photo</span>
               <span className={styles.titleTitle}>Title</span>
               <span className={styles.titleAuthor}>Author</span>
               <span className={styles.titleDate}>Date</span>
               <span className={styles.actionTitle}>Action</span>
            </header>
            <article className={styles.item}>
               <div className={styles.photo}>
                  <Image width={70} height={100} src={book} alt="author" className={styles.image} />
               </div>
               <h1>Спомини ратного поля</h1>
               <p className={styles.fullname}>Гетьман Володимир Петрович</p>
               <div className={styles.date}>
                  01.03.2024
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
               <div className={styles.photo}>
                  <Image width={70} height={100} src={book} alt="author" className={styles.image} />
               </div>
               <h1>Спомини ратного поля</h1>
               <p className={styles.fullname}>Гетьман Володимир Петрович</p>
               <div className={styles.date}>
                  01.03.2024
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