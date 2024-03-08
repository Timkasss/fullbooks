import styles from "./paginationad.module.scss"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function PaginationAd() {
   return (
      <div className={styles.wrapper}>
         <h1 className={styles.title}>Items page</h1>
         <select name="page" className={styles.select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>
         <div className={styles.control}>
            <FaArrowLeft className={styles.left} />
            <FaArrowRight className={styles.right} />
         </div>
      </div>
   )
}