import styles from "@/app/style/articles.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";

export default function Articles() {
   return (
      <div className={styles.block}>
         <article className={styles.blockBooks}>
            <header className={styles.header}>
               <span className={styles.titleTitle}>Title</span>
               <span className={styles.titleAuthor}>Author</span>
               <span className={styles.titleDate}>Date</span>
               <span className={styles.actionTitle}>Action</span>
            </header>
            <article className={styles.item}>
               <div className={styles.wrapperTitle}>
                  <h1 className={styles.title}
                     title="Новини праці та капіталу: осінь польсько-українських відносин, спеціальна операція з деолігархізації України як демократичний парламент «партія веде»"
                  >Новини праці та капіталу: осінь польсько-українських відносин, спеціальна операція з деолігархізації України як демократичний парламент «партія веде»</h1>
               </div>

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
               <div className={styles.wrapperTitle}>
                  <h1 className={styles.title}
                     title="Новини праці та капіталу: осінь польсько-українських відносин, спеціальна операція з деолігархізації України як демократичний парламент «партія веде»"
                  >Новини праці та капіталу: осінь польсько-українських відносин, спеціальна операція з деолігархізації України як демократичний парламент «партія веде»</h1>
               </div>
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