"use client"
import { useState } from 'react';
//import { Link } from 'react-router-dom';
import styles from './author.module.scss';
import Image from 'next/image';
import Link from 'next/link';



//import BreadCrumbs from '../bread-crumbs/BreadCrumbs';

export default function Author({ authors, index }) {
   const [hover, setHover] = useState(false);
   return (
      <article className={styles.author}>
         <h1 className={styles.name}>{authors.fullname}</h1>
         <div className={`${styles.posterWrapper} ${styles.authorHover}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            {hover &&
               <div className={`${styles.hoverBackground} ${styles.background}`}>
                  <Link href={`/authors/${index}`} className={`${styles.hoverButton} ${styles.button}`}>Карточка персоны</Link>
               </div>
            }
            <Image src={authors.image} alt="poster" className={styles.poster} />
         </div>

      </article >
   );
}
