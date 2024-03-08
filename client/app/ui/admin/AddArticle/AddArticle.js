import TipTap from "../TipTap/TipTap";
import styles from "./addarticle.module.scss";
import { IoMdClose } from "react-icons/io";

export default function AddArticle({ openModel }) {
   return (
      <form className={styles.formArticle} onClick={(e) => e.stopPropagation()}>
         <header className={styles.header}>
            <h1 className={styles.title}>Add Author</h1>
            <IoMdClose className={styles.close} onClick={() => openModel(false)} />
         </header>
         <TipTap />
         <div className={styles.buttons}>
            <button className={styles.addButton}>Add Author</button>
            <button className={styles.closeModel} onClick={() => openModel(false)}>Cancel</button>
         </div>
      </form>
   )
}