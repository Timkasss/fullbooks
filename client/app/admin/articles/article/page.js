import styles from "@/app/style/articlepage.module.scss";
import TipTap from "@/app/ui/admin/TipTap/TipTap";
import Link from "next/link";

export default function Article() {

   return (
      <div className={styles.block}>
         <TipTap />
         <div className={styles.buttons}>
            <button className={styles.addButton}>Add Article</button>
            <Link href="/admin/articles" className={styles.closeModel}>Cancel</Link>
         </div>
      </div>
   )
}