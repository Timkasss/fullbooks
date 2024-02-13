"use client"
import { useState } from 'react';

import styles from './filter.module.scss';


import clsx from 'clsx';
import { books } from '@/app/lib/placeholder-data';

export default function Filter({ checked }) {
   const [open, setOpen] = useState(false);
   const dataBooks = books;

   function sortGenre() {
      let result = [];
      for (let str of dataBooks) {
         if (!result.includes(str.genre)) {
            result.push(str.genre)
         }
      }
      return result;
   }
   const dataFilter = sortGenre();
   return (
      <div className={clsx(styles.filter, open ? styles.filter__close : '')}>
         <div className={clsx(styles.choose, open ? styles.chooseActive : '')} onClick={() => setOpen(!open)}>
            Вибери жанри
         </div>
         <div className={styles.valueWrapper}>
            <div className={styles.value}>
               {dataFilter.map((item, index) => (
                  <label key={index} className={styles.checkboxLabel}>
                     <input
                        alt={item}
                        className={styles.check}
                        type="checkbox"
                        name={item}
                        onChange={checked}
                     />
                     <span className={styles.text} title={item}>{item}</span>
                  </label>
               ))}
            </div>

         </div>
      </div >
   )
}