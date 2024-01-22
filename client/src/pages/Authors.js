import { useEffect, useState, useMemo, useContext } from "react";
import { AuthorsContext } from "../components/context";

import BreadCrumbs from "../components/bread-crumbs/BreadCrumbs";
import Author from "../components/author/Author";
import Pagination from "../components/pagination/Pagination";

import '../style/authors.scss';

function Authors() {
   const { dataAuthors } = useContext(AuthorsContext)

   let PageSize = 12;
   const [currentPage, setCurrentPage] = useState(1);
   const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return dataAuthors.slice(firstPageIndex, lastPageIndex);
   }, [currentPage, dataAuthors]);
   useEffect(() => {
      window.scrollTo({
         top: 0,
      });
   }, [currentPage])
   return (
      <div className="main__container">
         <section className="authors">
            <h1 className="authors__title section_title">Автори</h1>
            <header className="authors__header">
               <BreadCrumbs />
            </header>
            <div className="authors__books-wrapper">
               {
                  currentTableData.map((item, index) => (
                     <Author key={index} authors={item} index={item._id} />
                  ))
               }

            </div>
            <Pagination
               currentPage={currentPage}
               totalCount={dataAuthors.length}
               pageSize={PageSize}
               onPageChange={page => setCurrentPage(page)}
            />
         </section>
      </div>
   );

}

export default Authors;