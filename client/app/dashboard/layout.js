"use client"
import { useState } from 'react';

import styles from '@/app/style/personal.module.scss';
import Link from 'next/link';

export default function Layout({ children }) {
   const links = ['', 'friends', 'reviews', 'books', 'people']
   const [indexLink, setIndexLink] = useState(0)

   return (
      <div className={styles.personal}>
         <div className={styles.container}>
            <nav className={styles.menu}>
               <ul className={styles.list}>
                  {
                     links.map((linki, index) => {
                        return (
                           <li className={`${styles.item} ${index === indexLink || (indexLink === 0 && index === 0) ? styles.item_active : ''}`} key={index} onClick={() => setIndexLink(index)}>
                              <Link href={`/dashboard/${linki}`} className={`${styles.link} ${styles[`link_icon_${linki}`]}`}></Link>
                           </li>
                        )
                     })
                  }
               </ul>
            </nav>
            {children}
         </div>
      </div >
   )
}