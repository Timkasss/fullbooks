'use client'
import { useState } from 'react';

import styles from './poster.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Poster({ books, index }) {
   const [hover, setHover] = useState(false)

   let poster = books.image;
   let categories = books.genre;
   let name = books.title;

   return (
      <article className={styles.filmPoster}>
         <h1 className={styles.name}>{name}</h1>
         <div className={`${styles.posterWrapper} ${styles.posterHover}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            {hover &&
               <div className={`${styles.hoverBackground} ${styles.background}`}>
                  <Link href={`/library/${index}`} className={`${styles.hoverButton} ${styles.button}`}>Карточка книги</Link>
               </div>
            }
            <Image src={poster} alt="poster" className={styles.poster} />
         </div>
         <p className={styles.genre}>{categories}</p>
         <div className={styles.rating}>8.50</div>

      </article >
   );
}

export default Poster;
