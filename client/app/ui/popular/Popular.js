"use client"
import { useState } from 'react';
import styles from './popular.module.scss';
import Poster from './poster/Poster';

import { books } from '@/app/lib/placeholder-data';
import Link from 'next/link';
export default function Popular() {

   const [pick, setPick] = useState(0);

   const genre = ['Все', 'Художня', 'Наукова', 'Історична', 'Документальна'];
   return (
      <section className={styles.popular}>
         <div className={styles.container}>
            <div className={styles.headerWrapper}>
               <h1 className={`${styles.title} ${styles.section_title}`}>Популярне</h1>
               <span className={styles.line}></span>
               <header className={styles.header}>
                  <div className={styles.bodyBurger}>
                     <nav className={styles.filter}>
                        <ul className={styles.filterList}>
                           {
                              genre.map((item, index) => {
                                 return (
                                    <li className={styles.FilterItem} key={index}>
                                       <div className={`${styles.filterLink} ${styles.section_filter} ${pick === index ? styles.filter_pick : ''}`} onClick={() => setPick(index)}>{item}</div>
                                    </li>
                                 )
                              })
                           }
                        </ul>
                     </nav>
                  </div>
                  <div className={styles.burger}>
                     <span className={styles.burgerLine}></span>
                  </div>
               </header>
            </div>
            <div className={styles.filmsContainer}>
               {
                  books.map((books, index) => (
                     <Poster key={index} books={books} index={books._id} />
                  ))
               }
            </div>
            <div className={styles.wrapperLink}>
               <Link href='/library' className={styles.link}>Вся бібліотека</Link>
            </div>
         </div>
      </section>
   );
}
