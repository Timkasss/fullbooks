import styles from "@/app/style/users.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";

export default function Users() {
   return (
      <div className={styles.block}>
         <article className={styles.statistics}>
            <article className={styles.itemStatistics}>
               <h1 className={styles.titleStatistics}>Lorem ipsum</h1>
               <span className={styles.countStatistics}>614</span>
            </article>
            <article className={styles.itemStatistics}>
               <h1 className={styles.titleStatistics}>Lorem ipsum</h1>
               <span className={styles.countStatistics}>124</span>
            </article>
            <article className={styles.itemStatistics}>
               <h1 className={styles.titleStatistics}>Lorem ipsum</h1>
               <span className={styles.countStatistics}>504</span>
            </article>
            <article className={styles.itemStatistics}>
               <h1 className={styles.titleStatistics}>Lorem ipsum</h1>
               <span className={styles.countStatistics}>100</span>
            </article>
         </article>
         <article className={styles.blockUsers}>
            <header className={styles.header}>
               <span className={styles.titleName}>Name</span>
               <span>User ID</span>
               <span>Lorem ipsum</span>
               <span>Data</span>
               <span>Lorem ipsum</span>
               <span className={styles.actionTitle}>Action</span>
            </header>
            <article className={styles.item}>
               <div className={styles.person}>
                  <h2 className={styles.fullname}>David Wagner</h2>
               </div>
               <div>User ID</div>
               <div className={styles.email}>david_wagner@example.com</div>
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
               </div>
               <div>User ID</div>
               <div className={styles.email}>david_wagner@example.com</div>
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