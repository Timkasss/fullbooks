'use client'
import { useState } from 'react';

import styles from './poster.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Poster({ books, index }) {
   const [hover, setHover] = useState(false)

   return (
      <article className={styles.filmPoster}>
         <h1 className={styles.name}>{books.title}</h1>
         <div className={`${styles.posterWrapper} ${styles.posterHover}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            {hover &&
               <div className={`${styles.hoverBackground} ${styles.background}`}>
                  <Link href={`/library/${index}`} className={`${styles.hoverButton} ${styles.button}`}>Карточка книги</Link>
               </div>
            }
            <Image
               src={books.image}
               width={1000}
               height={500}
               alt="poster" className={styles.poster} />
         </div>
         <p className={styles.genre}>{books.authors}</p>
         <div className={styles.rating}>8.50</div>

      </article >
   );
}