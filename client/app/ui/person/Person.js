
"use client"
import { useState } from 'react';
import styles from './person.module.scss';
//import { AuthorsContext } from '../context';
import { writers } from '@/app/lib/placeholder-data';
import Image from 'next/image';
export default function Person() {
   const [pick, setPick] = useState(0);
   const sortFilter = ['За рік', "За місяць", "За неділю"];


   // const [isLoading, setIsLoading] = useState(false);


   const theBest = writers.slice(0, 6);
   // function load() {
   //    setIsLoading(true)
   // }
   // setTimeout(load, 2000)

   return (
      <section className={styles.person}>
         <div className={styles.container}>
            <div className={styles.header}>
               <h1 className={`${styles.title} ${styles.section_title}`}>Популярні автори</h1>
               <nav className={styles.filter}>
                  <ul className={styles.filterList}>
                     {
                        sortFilter.map((item, index) => {
                           return (
                              <li className={styles.filterItem} key={index} >
                                 <span className={`${styles.filterLink} ${styles.section_filter} ${pick === index ? styles.filter_pick : ''}`} onClick={() => setPick(index)}>{item}</span>
                              </li>
                           )
                        })
                     }
                  </ul>
               </nav>
            </div>

            <div className={styles.content}>
               <article className={styles.personBlock}>
                  <div className={styles.background}></div>
                  <div className={styles.infa}>
                     <h1 className={styles.firstName}>{theBest[0].fullname}</h1>
                     <p className={styles.secondBame}>{theBest[0].typeactivity}</p>
                     <p className={styles.age}>{theBest[0].direction}</p>
                  </div>
                  <Image src={theBest[0].image} alt="person" className={styles.image} />
               </article>
               <article className={styles.personBlock}>
                  <div className={styles.background}></div>
                  <div className={styles.infa}>
                     <h1 className={styles.firstName}>{theBest[1].fullname}</h1>
                     <p className={styles.secondBame}>{theBest[1].typeactivity}</p>
                     <p className={styles.age}>{theBest[1].direction}</p>
                  </div>
                  <Image src={theBest[1].image} alt="person" className={styles.image} />
               </article>
               <div className={styles.rest}>
                  {
                     theBest.slice(2).map((item, index) => {
                        return (
                           <article className={styles.restBlock} key={index}>
                              <div className={styles.restInf}>
                                 <h1 className={styles.restName}>{item.fullname}</h1>
                                 <p className={styles.restSurname}>{item.typeactivity}</p>
                                 <p className={styles.restAge}>{item.direction}</p>
                              </div>
                           </article>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </section >
   )
}