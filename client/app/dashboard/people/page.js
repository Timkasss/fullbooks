"use client"
import styles from './listperson.module.scss';
import { useState } from 'react';
import person from '@/public/img/personal/avatar.png';
import Image from 'next/image';
import { useStoreFavourites } from '@/app/lib/store';
import Link from 'next/link';


export default function ListPerson() {

   const favourites = useStoreFavourites((state) => state.favourites)

   const [pick, setPick] = useState(0);
   let listbooks = ['Все', 'Любимые', 'Избанное'];
   return (
      <div className={styles.listBooks}>
         <div className={styles.head}>
            <h1 className={styles.title}>Список персон</h1>
            <nav className={styles.filter}>
               <ul className={styles.filterList}>
                  {

                     listbooks.map((item, index) => {
                        return (
                           <li className={styles.filterItem} key={index}>
                              < a className={`${styles.filterLink} ${styles.section_filter} ${pick === index ? styles.filter_pick : ''}`} onClick={() => setPick(index)}>{item}</a>
                           </li>
                        )
                     })
                  }
               </ul>
            </nav >
         </div >
         <div className={styles.listWrapper}>
            {
               favourites?.map((person, index) => {
                  return (
                     <div className={styles.book} key={index}>
                        <div className={styles.bookImageWrapper}>
                           <Image width={200} height={300} src={person.image} alt="poster" className={styles.bookImage} />
                        </div>
                        <div className={styles.bookContent}>
                           <div className={styles.leftContent}>
                              <h2 className={styles.name}>{person.fullname}</h2>
                              <p className={styles.surname}>{person.direction}</p>
                              <p className={styles.genre}>{person.typeactivity}</p>
                           </div>
                           <div className={styles.rightBlock}>
                              <Link href={`/authors/${person._id}`} className={styles.link}>Карточка автора</Link>
                           </div>
                        </div>
                     </div>
                  )
               })
            }

            {/* <div className={styles.book}>
               < div className={styles.bookImageWrapper}>
                  <Image src={person} alt="poster" className={styles.bookImage} />
               </div>
               <div className={styles.bookContent}>
                  < div className={styles.leftContent}>
                     <h2 className={styles.name}>Том Хэнкс</h2>
                     <p className={styles.surname}>Tom Hanks</p>
                     <p className={styles.genre}>Актер, Продюсер, Режиссер, Сценарист</p>
                  </div>
                  <div className={styles.rightBlock}>
                     < a href="#" className={styles.link}>Карточка писателя</a>
                  </div>
               </div >
            </div >
            <div className={styles.book}>
               < div className={styles.bookImageWrapper}>
                  <Image src={person} alt="poster" className={styles.bookImage} />
               </div>
               <div className={styles.bookContent}>
                  < div className={styles.leftContent}>
                     <h2 className={styles.name}>Жан Рено</h2>
                     <p className={styles.surname}>Jean Reno</p>
                     <p className={styles.genre}>Актер</p>
                  </div>
                  <div className={styles.rightBlock}>
                     < a href="#" className={styles.link}>Карточка писателя</a>
                  </div>
               </div >
            </div > */}
         </div >
      </div >
   )
}