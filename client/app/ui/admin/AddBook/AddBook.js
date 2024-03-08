import styles from "./addbook.module.scss";
import { IoMdClose } from "react-icons/io";
import book from '@/public/img/books/filmpreview.png'
import Image from "next/image";
import { FiUpload } from "react-icons/fi";

export default function AddBook({ openModel }) {
   return (
      <form className={styles.formBook} onClick={(e) => e.stopPropagation()}>
         <header className={styles.header}>
            <h1 className={styles.title}>Add Author</h1>
            <IoMdClose className={styles.close} onClick={() => openModel(false)} />
         </header>

         <div className={styles.wrapInputs}>
            <div className={styles.wrapImage}>
               {
                  !book ?
                     <Image width={500} height={500} src={book} alt="author" className={styles.image} />
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
               <label htmlFor="title" className={styles.titleInput}>Title</label>
               <input type="text" placeholder="Title" className={styles.input} id="title" />
            </div>
            <div>
               <label htmlFor="subtitle" className={styles.titleInput}>Subtitle</label>
               <input type="text" placeholder="Subtitle" className={styles.input} id="subtitle" />
            </div>
            <div>
               <label htmlFor="author" className={styles.titleInput}>Author</label>
               <select name="author" placeholder="Select author" className={styles.input} id="author">
                  <option value="admin" >Віталій Петльований</option>
                  <option value="user">Максим Горький</option>
               </select>
            </div>
            <div>
               <label htmlFor="genre" className={styles.titleInput}>Genre</label>
               <select name="genre" placeholder="Select genre" className={styles.input} id="genre">
                  <option value="admin" >вірші</option>
                  <option value="user">твори</option>
               </select>
            </div>

            <div>
               <label htmlFor="language" className={styles.titleInput}>language</label>
               <select name="languages" placeholder="Select language" className={styles.input} id="language">
                  <option value="admin" >Ukainian</option>
                  <option value="user">Russian</option>
               </select>
            </div>
            <div>
               <label htmlFor="date-published" className={styles.titleInput}>Date published</label>
               <input type="date" placeholder="Date published" className={styles.input} id="date-published" />
            </div>
            <div>
               <label htmlFor="count-page" className={styles.titleInput}>Count page</label>
               <input type="number" placeholder="Count-page" className={styles.input} id="count-page" />
            </div>
            <div>
               <label htmlFor="publisher" className={styles.titleInput}>Publisher</label>
               <select name="publisher" placeholder="Select publisher" className={styles.input} id="publisher">
                  <option value="admin" >Ukainian</option>
                  <option value="user">Russian</option>
               </select>
            </div>
            <div className={styles.wrapTextarea}>
               <label htmlFor="description" className={styles.titleInput}>description</label>
               <textarea name="description" placeholder="description" id="description" cols="100" rows="8" className={styles.textarea}></textarea>
            </div>
            <div className={styles.coverUploadBook}>
               <label htmlFor="book-file" className={styles.titleInput}>
                  <span className={styles.uploadText}>upload book</span>
                  <input type="file" id="book-file" className={styles.bookFile} />
               </label>
               <p className={styles.text}>Завантажте книгу</p>
            </div>
         </div>

         <div className={styles.buttons}>
            <button className={styles.addButton}>Add book</button>
            <button className={styles.closeModel} onClick={() => openModel(false)}>Cancel</button>
         </div>
      </form>
   )
}