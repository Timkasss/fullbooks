import { useEffect, useState, useMemo, useContext } from "react";
import { BooksContext } from "../components/context";

import Filter from "../components/filter/Filter";
import Pagination from "../components/pagination/Pagination";
import Poster from "../components/popular/poster/Poster";
import BreadCrumbs from "../components/bread-crumbs/BreadCrumbs";

import '../style/library.scss';

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

   const { dataBooks } = useContext(BooksContext)
   let PageSize = 12;
   const [currentPage, setCurrentPage] = useState(1);
   const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      let filteredData;
      if (cheked.length >= 1) {
         filteredData = dataBooks.filter(item => cheked.includes(item.genre));
      } else {
         filteredData = dataBooks;
      }
      return filteredData.slice(firstPageIndex, lastPageIndex);

   }, [currentPage, dataBooks, cheked]);
   useEffect(() => {
      window.scrollTo({
         top: 0,
      });
   }, [currentPage])

   return (
      <>
         <div className="main__container">
            <section className="library">
               <h1 className="library__title">Бібліотека</h1>
               <header className="library__header">
                  <BreadCrumbs />
                  <p className="library__text">
                     Також як подальший розвиток різних форм діяльності, у своєму класичному уявленні допускає впровадження першочергових вимог. Сучасні технології досягли такого рівня, що використання сучасних методик передбачає незалежні методи реалізації стандартних підходів. Прихильники тоталітаризму в науці можуть бути оголошені такими, що порушують загальнолюдські норми етики та моралі.
                  </p>
                  <p className="library__text">
                     Також як подальший розвиток різних форм діяльності, у своєму класичному уявленні допускає впровадження першочергових вимог. Сучасні технології досягли такого рівня, що використання сучасних методик передбачає незалежні методи реалізації стандартних підходів. Прихильники тоталітаризму в науці можуть бути оголошені такими, що порушують загальнолюдські норми етики та моралі.
                  </p>
                  <Filter checked={changeCheked} />
               </header>
               <div className="library__books-wrapper">
                  {
                     currentTableData.map((item, index) => (
                        <Poster key={index} books={item} index={item._id} />
                     ))
                  }

               </div>
               <Pagination
                  currentPage={currentPage}
                  totalCount={dataBooks.length}
                  pageSize={PageSize}
                  onPageChange={page => setCurrentPage(page)}
               />
            </section>
         </div>
      </>
   )

}

export default Library;