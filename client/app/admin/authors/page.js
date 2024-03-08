import styles from "@/app/style/authorspage.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import avatar from '@/public/img/authors/author.png';
import Image from "next/image";

export default function Authors() {
   return (
      <div className={styles.block}>
         <article className={styles.blockAuthors}>
            <header className={styles.header}>
               <span className={styles.titlePhoto}>Photo</span>
               <span className={styles.titleName}>Name</span>
               <span className={styles.titleDate}>Date</span>
               <span className={styles.actionTitle}>Action</span>
            </header>
            <article className={styles.item}>
               <div className={styles.photo}>
                  <Image width={70} height={100} src={avatar} alt="author" className={styles.image} />
               </div>
               <h2 className={styles.fullname}>Гетьман Володимир Петрович</h2>
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
                  <Image width={41} height={41} src={avatar} alt="author" className={styles.image} />
               </div>
               <h2 className={styles.fullname}>Гетьман Володимир Петрович</h2>

               <div className={styles.date}>
                  24 Otc,2015
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