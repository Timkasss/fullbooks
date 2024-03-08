import styles from "./addauthor.module.scss";
import { IoMdClose } from "react-icons/io";
import author from '@/public/img/authors/author.png'
import Image from "next/image";
import { FiUpload } from "react-icons/fi";

export default function AddAuthor({ openModel }) {
   return (
      <form className={styles.formAuthor} onClick={(e) => e.stopPropagation()}>
         <header className={styles.header}>
            <h1 className={styles.title}>Add Author</h1>
            <IoMdClose className={styles.close} onClick={() => openModel(false)} />
         </header>

         <div className={styles.wrapInputs}>
            <div className={styles.wrapImage}>
               {
                  !author ?
                     <Image width={500} height={500} src={author} alt="author" className={styles.image} />
                     :
                     <div className={styles.fileContainer}>
                        <FiUpload className={styles.upFile} />
                        <div className={styles.textFile}>
                           <p className={styles.textFileOne}>Drag & drop any file here</p>
                           <label htmlFor="image-upload" className={styles.customUpload}>
                              <input type="file" name="image" className={styles.backImage} id="image-upload" />
                              <span>or <span className={styles.styleWord}>browser file</span> from device</span>
                           </label>

                        </div>
                     </div>
               }
            </div>
            <div>
               <label htmlFor="first-name" className={styles.titleInput}>First name</label>
               <input type="text" placeholder="First Name" className={styles.input} id="first-name" />
            </div>
            <div>
               <label htmlFor="last-name" className={styles.titleInput}>last name</label>
               <input type="text" placeholder="Last Name" className={styles.input} id="last-name" />
            </div>
            <div className={styles.surname}>
               <label htmlFor="surname" className={styles.titleInput}>Surname</label>
               <input type="text" placeholder="Surname" className={styles.input} id="surname" />
            </div>
            <div>
               <label htmlFor="date-born" className={styles.titleInput}>Date born</label>
               <input type="date" placeholder="Date born" className={styles.input} id="date-born" />
            </div>
            <div>
               <label htmlFor="date-dead" className={styles.titleInput}>Date dead</label>
               <input type="date" placeholder="Date dead" className={styles.input} id="date-dead" />
            </div>
            <div>
               <label htmlFor="place-born" className={styles.titleInput}>Place born</label>
               <input type="text" placeholder="Place born" className={styles.input} id="place-born" />
            </div>
            <div>
               <label htmlFor="place-dead" className={styles.titleInput}>Place dead</label>
               <input type="text" placeholder="Place dead" className={styles.input} id="place-dead" />
            </div>
            <div>
               <label htmlFor="genre" className={styles.titleInput}>Genre</label>
               <select name="genre" placeholder="Select genre" className={styles.input} id="genre">
                  <option value="admin">вірші</option>
                  <option value="user">твори</option>
               </select>
            </div>
            <div>
               <label htmlFor="direction" className={styles.titleInput}>direction</label>
               <select name="direction" placeholder="Select direction" className={styles.input} id="direction">
                  <option value="admin">соцреалізм</option>
                  <option value="user">опортунізм</option>
               </select>
            </div>
            <div>
               <label htmlFor="language" className={styles.titleInput}>language</label>
               <select name="languages" placeholder="Select language" className={styles.input} id="language">
                  <option value="admin">Ukainian</option>
                  <option value="user">Russian</option>
               </select>
            </div>


         </div>
         <div className={styles.buttons}>
            <button className={styles.addButton}>Add Author</button>
            <button className={styles.closeModel} onClick={() => openModel(false)}>Cancel</button>
         </div>
      </form>
   )
}