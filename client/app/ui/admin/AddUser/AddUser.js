import styles from "./adduser.module.scss";
import { IoMdClose } from "react-icons/io";

export default function AddUser({ openModel }) {
   return (
      <form className={styles.formUser} onClick={(e) => e.stopPropagation()}>
         <header className={styles.header}>
            <h1 className={styles.title}>Add User</h1>
            <IoMdClose className={styles.close} onClick={() => openModel(false)} />
         </header>

         <div className={styles.wrapInputs}>
            <div className={styles.top}>
               <input type="text" name="firstname" placeholder="First Name" className={styles.input} id={styles.firstName} />
               <input type="text" name="lastname" placeholder="Last Name" className={styles.input} id={styles.lastName} />
            </div>
            <div className={styles.bottom}>
               <input type="email" name="email" placeholder="Email" className={styles.input} id={styles.email} />
               <input type="password" name="password" placeholder="Password" className={styles.input} id={styles.password} />
               <select name="role" placeholder="Select Role Type" className={styles.input} id={styles.role}>
                  <option value="admin" defaultValue="admin">admin</option>
                  <option value="user">user</option>
               </select>
            </div>
         </div>
         <div className={styles.buttons}>
            <button className={styles.addButton}>Add User</button>
            <button className={styles.closeModel} onClick={() => openModel(false)}>Cancel</button>
         </div>
      </form>
   )
}