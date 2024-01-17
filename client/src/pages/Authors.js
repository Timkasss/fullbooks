import { useEffect, useState, useMemo, useContext } from "react";
import { AuthorsContext } from "../components/context";

import BreadCrumbs from "../components/bread-crumbs/BreadCrumbs";
import Author from "../components/author/Author";
import Pagination from "../components/pagination/Pagination";

import '../style/authors.scss';

function Authors() {
   const authors = useContext(AuthorsContext)
   // const authors = [
   //    { id: 0, name: 'Іван Олексійович Бунін' },
   //    { id: 1, name: 'Іван Олексійович Бунін' },
   //    { id: 2, name: 'Борис Леонідович Пастернак' },
   //    { id: 3, name: 'Михайло Афанасійович Булгаков' },
   //    { id: 4, name: 'Олександр Ісаєвич Солженіцін' },
   //    { id: 5, name: 'Іван Олександрович Бунін' },
   //    { id: 6, name: 'Олексій Максимович Пешков (Максим Горький)' },
   //    { id: 7, name: 'Микола Васильович Гоголь' },
   //    { id: 8, name: 'Федір Михайлович Достоєвський' },
   //    { id: 9, name: 'Лев Миколайович Толстой' },
   //    { id: 10, name: 'Антон Павлович Чехов' },
   //    { id: 11, name: 'Іван Олексійович Бунін' },
   //    { id: 12, name: 'Борис Леонідович Пастернак' },
   //    { id: 13, name: 'Михайло Афанасійович Булгаков' },
   //    { id: 14, name: 'Олександр Ісаєвич Солженіцін' },
   //    { id: 15, name: 'Іван Олександрович Бунін' },
   //    { id: 16, name: 'Олексій Максимович Пешков (Максим Горький)' },
   //    { id: 17, name: 'Микола Васильович Гоголь' },
   //    { id: 18, name: 'Федір Михайлович Достоєвський' },
   //    { id: 19, name: 'Лев Миколайович Толстой' },
   //    { id: 20, name: 'Антон Павлович Чехов' }
   // ];
   let PageSize = 12;
   const [currentPage, setCurrentPage] = useState(1);
   const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return authors.slice(firstPageIndex, lastPageIndex);
   }, [currentPage, authors]);
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
                  currentTableData.map((item) => (
                     <Author authors={item} key={item.id} index={item.id} />
                  ))
               }

            </div>
            <Pagination
               currentPage={currentPage}
               totalCount={authors.length}
               pageSize={PageSize}
               onPageChange={page => setCurrentPage(page)}
            />
         </section>
      </div>
   );

}

export default Authors;