"use client"
import styles from "./addbook.module.scss";
import { IoMdClose } from "react-icons/io";
import book from '@/public/img/books/filmpreview.png'
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import Select from 'react-select';
import { useStoreBooks } from "@/app/lib/store";

export default function AddBook({ openModel }) {

   const genre = [
      { value: "lyrics", label: "вірші" },
      { value: "writings", label: "твори" },
   ]
   const author = [
      { value: "bitalii", label: "Віталій Петльований" },
      { value: "gorkii", label: "Максим Горький" }
   ]
   const publisher = [
      { value: "test", label: "test" },
      { value: "test", label: "test" }
   ]
   const addBook = useStoreBooks((state) => state.addBook)
   const handleBook = (FormData) => {
      addBook(FormData)
   }

   return (
      <form className={styles.formBook} onClick={(e) => e.stopPropagation()} action={handleBook}>
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
               <input type="text" placeholder="Title" className={styles.input} id="title" name="title" />
            </div>
            <div>
               <label htmlFor="subtitle" className={styles.titleInput}>Subtitle</label>
               <input type="text" placeholder="Subtitle" className={styles.input} id="subtitle" name="subTitle" />
            </div>
            <div>
               <label htmlFor="author" className={styles.titleInput}>Author</label>
               <Select inputId="author" name="authors" options={author} styles={{
                  control: (baseStyles, state) => ({
                     ...baseStyles,
                     minHeight: "34px",
                     color: "#222B45",
                     border: "1px solid #EFF4FA",
                     width: "100%",
                     borderRadius: "10px",
                     marginTop: "5px"
                  }),
                  option: (baseStyles, state) => ({
                     ...baseStyles,
                     color: "#222B45",
                  }),
               }} />
            </div>
            <div>
               <label htmlFor="genre" className={styles.titleInput}>Genre</label>
               <Select options={genre} name="genre" inputId="genre" styles={{
                  control: (baseStyles, state) => ({
                     ...baseStyles,
                     minHeight: "34px",
                     color: "#222B45",
                     border: "1px solid #EFF4FA",
                     width: "100%",
                     borderRadius: "10px",
                     marginTop: "5px"
                  }),
                  option: (baseStyles, state) => ({
                     ...baseStyles,
                     color: "#222B45",
                  }),
               }} />
            </div>

            <div>
               <label htmlFor="language" className={styles.titleInput}>language</label>
               <select name="language" placeholder="Select language" className={styles.input} id="language">
                  <option value="admin" >Ukainian</option>
                  <option value="user">Russian</option>
               </select>
            </div>
            <div>
               <label htmlFor="date-published" className={styles.titleInput}>Date published</label>
               <input type="date" placeholder="Date published" className={styles.input} id="date-published" name="publishedDate" />
            </div>
            <div>
               <label htmlFor="count-page" className={styles.titleInput}>Count page</label>
               <input type="text" placeholder="Count-page" className={styles.input} id="count-page" name="pages" />
            </div>
            <div>
               <label htmlFor="publisher" className={styles.titleInput}>Publisher</label>
               <Select options={publisher} name="publisher" inputId="publisher" styles={{
                  control: (baseStyles, state) => ({
                     ...baseStyles,
                     minHeight: "34px",
                     color: "#222B45",
                     border: "1px solid #EFF4FA",
                     width: "100%",
                     borderRadius: "10px",
                     marginTop: "5px"
                  }),
                  option: (baseStyles, state) => ({
                     ...baseStyles,
                     color: "#222B45",
                  }),
               }} />
            </div>
            <div className={styles.wrapTextarea}>
               <label htmlFor="description" className={styles.titleInput}>description</label>
               <textarea type="text" name="description" placeholder="description" id="description" cols="100" rows="8" className={styles.textarea}></textarea>
            </div>
            <div className={styles.coverUploadBook}>
               <label htmlFor="book-file" className={styles.titleInput}>
                  <span className={styles.uploadText}>upload book</span>
                  <input type="file" id="book-file" className={styles.bookFile} name="pdf" />
               </label>
               <p className={styles.text}>Завантажте книгу</p>
            </div>
         </div>

         <div className={styles.buttons}>
            <button className={styles.addButton} type="submit">Add book</button>
            <button className={styles.closeModel} onClick={() => openModel(false)}>Cancel</button>
         </div>
      </form>
   )
}