// import { useEffect, useState, useMemo, useContext } from "react";
// import { AuthorsContext } from "../components/context";

// import BreadCrumbs from "../components/bread-crumbs/BreadCrumbs";
import Author from "../ui/author/Author";

import styles from '../style/authors.module.scss';
import { loadAuthors } from "../lib/load-date";


export default async function Authors() {

   const writers = await loadAuthors()

   // let PageSize = 12;
   // const [currentPage, setCurrentPage] = useState(1);
   // const currentTableData = useMemo(() => {
   //    const firstPageIndex = (currentPage - 1) * PageSize;
   //    const lastPageIndex = firstPageIndex + PageSize;
   //    return dataAuthors.slice(firstPageIndex, lastPageIndex);
   // }, [currentPage, dataAuthors]);
   // useEffect(() => {
   //    window.scrollTo({
   //       top: 0,
   //    });
   // }, [currentPage])
   return (
      <div className={styles.container}>
         <section className={styles.authors}>
            <h1 className={`${styles.title} ${styles.section_title}`}>Автори</h1>
            <header className={styles.header}>
               {/* <BreadCrumbs /> */}
            </header>
            <div className={styles.booksWrapper}>
               {
                  writers.map((item, index) => (
                     <Author key={index} authors={item} index={item._id} />
                  ))
               }

            </div >
            {/* <Pagination
               currentPage={currentPage}
               totalCount={dataAuthors.length}
               pageSize={PageSize}
               onPageChange={page => setCurrentPage(page)}
            /> */}
         </section >
      </div >
   );

}
