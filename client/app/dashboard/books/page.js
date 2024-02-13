"use client"
import styles from './listbooks.module.scss';
import { useState } from 'react';



import { books } from '@/app/lib/placeholder-data'; import Link from 'next/link';
import Image from 'next/image';

function ListBooks() {

   const myBooks = books.slice(0, 3);

   const [pick, setPick] = useState(0);
   let listbooks = ['Все', 'Любимые', 'Ожидаемые', 'Избанное'];
   return (
      <div className={styles.listBooks}>
         <div className={styles.head}>
            <h1 className={styles.title}>Список твоїх книг</h1>
            <nav className={styles.filter}>
               <ul className={styles.filterList}>
                  {
                     listbooks.map((item, index) => {
                        return (
                           <li className={styles.filterItem} key={index}>
                              <span className={`${styles.filterLink} ${styles.section_filter} ${pick === index ? styles.filter_pick : ''}`} onClick={() => setPick(index)}>{item}</span>
                           </li>
                        )
                     })
                  }
               </ul>
            </nav>
         </div>
         <div className={styles.listWrapper}>
            {
               myBooks.map((item, index) => {
                  return (
                     <div className={styles.book} key={index}>
                        <Link href={`/library/${item._id}`}>
                           <div className={styles.bookImageWrapper}>
                              <Image src={item.image} alt="poster" className={styles.bookImage} />
                           </div>
                        </Link>
                        <div className={styles.bookContent}>
                           <div className={styles.leftContent}>
                              <h2 className={styles.name}>{item.title}</h2>
                              <p className={styles.surname}>{item.subTitle}</p>
                              <p className={styles.genre}>{item.genre}</p>
                           </div>
                           <div className={styles.rightBlock}>
                              <div className={styles.rating}>
                                 <span className={styles.ratingCount}>{item.grade.rating}</span>
                              </div>
                              <Link href={`/library/${item._id}`} className={styles.link}>Карточка книги</Link>
                           </div>
                        </div>
                     </div>
                  )
               })
            }

         </div>
      </div>
   )
}

export default ListBooks;