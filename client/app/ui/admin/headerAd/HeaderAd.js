import styles from "@/app/ui/admin/headerAd/headerAd.module.scss";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
export default function HeaderAd() {
   return (
      <div className={styles.header}>
         <div className={styles.hello}>
            <h1 className={styles.heyTitle}>Hello, Lekan</h1>
            <p className={styles.heySubTitle}>Have a nice day</p>
         </div>
         <div className={styles.wrapperProfile}>
            <div className={styles.wrapperIcon}>
               <FaBell className={styles.icon} />
               <span className={styles.circle}></span>
            </div>
            <div className={styles.profile}>
               <div className={styles.avatar}>

               </div>
               <div className={styles.information}>
                  <h1 className={styles.fullname}>Lekan Okeowo</h1>
                  <p className={styles.role}>Admin</p>
               </div>
               <IoIosArrowDown className={styles.icon2} />
            </div>
         </div>

      </div>
   )
}