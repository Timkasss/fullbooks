"use client"
import { useEffect, useState, useMemo } from "react";

import Filter from "@/app/ui/filter/Filter";

import Poster from "../ui/popular/poster/Poster";

import Pagination from "../ui/pagination/Pagination";
import styles from '../style/library.module.scss';
import { books } from "../lib/placeholder-data";


function Library() {
   const [cheked, setCheked] = useState([])

   function changeCheked(event) {
      const { name, checked } = event.target;
      if (checked) {
         setCheked(pre => [...pre, name])
      } else {
         setCheked(cheked.filter(item => item !== name))
      }
   }

   const dataBooks = books;


   const totalPage = dataBooks.length;

   // let PageSize = 12;
   // const [currentPage, setCurrentPage] = useState(1);
   // const currentTableData = useMemo(() => {
   //    const firstPageIndex = (currentPage - 1) * PageSize;
   //    const lastPageIndex = firstPageIndex + PageSize;
   //    let filteredData;
   //    if (cheked.length >= 1) {
   //       filteredData = dataBooks.filter(item => cheked.includes(item.genre));
   //    } else {
   //       filteredData = dataBooks;
   //    }
   //    return filteredData.slice(firstPageIndex, lastPageIndex);

   // }, [currentPage, dataBooks, cheked]);
   // useEffect(() => {
   //    window.scrollTo({
   //       top: 0,
   //    });
   // }, [currentPage])

   return (
      <>
         <div className={styles.container}>
            <section className={styles.library}>
               <h1 className={styles.title}>Бібліотека</h1>
               <header className={styles.header}>
                  {/* <BreadCrumbs /> */}
                  <p className={styles.text}>
                     Також як подальший розвиток різних форм діяльності, у своєму класичному уявленні допускає впровадження першочергових вимог. Сучасні технології досягли такого рівня, що використання сучасних методик передбачає незалежні методи реалізації стандартних підходів. Прихильники тоталітаризму в науці можуть бути оголошені такими, що порушують загальнолюдські норми етики та моралі.
                  </p>
                  <p className={styles.text}>
                     Також як подальший розвиток різних форм діяльності, у своєму класичному уявленні допускає впровадження першочергових вимог. Сучасні технології досягли такого рівня, що використання сучасних методик передбачає незалежні методи реалізації стандартних підходів. Прихильники тоталітаризму в науці можуть бути оголошені такими, що порушують загальнолюдські норми етики та моралі.
                  </p>
                  <Filter checked={changeCheked} />
               </header>
               <div className={styles.booksWrapper}>
                  {
                     dataBooks.map((item, index) => (
                        <Poster key={index} books={item} index={item._id} />
                     ))
                  }

               </div>
               <Pagination totalPage={totalPage} />
            </section>
         </div>
      </>
   )

}

export default Library;