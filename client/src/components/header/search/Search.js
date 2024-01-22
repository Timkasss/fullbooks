import { useContext, useState } from 'react';

import './search.scss';

import { AuthorsContext, BooksContext } from '../../context';
import { Link } from 'react-router-dom';


function Search() {
   const [openModel, setOpenModel] = useState(false);
   const [search, setSearch] = useState('');
   const { dataBooks } = useContext(BooksContext);
   const { dataAuthors } = useContext(AuthorsContext);


   const [foundBook, setFoundBook] = useState([])
   const [foundAvtor, setFoundAvtor] = useState([])


   function onSearch() {
      if (search) {
         let result = dataBooks.filter(item => {
            let foundDone = item.title.toLowerCase().includes(search.toLowerCase());
            return foundDone;
         })
         let result2 = dataAuthors.filter(item => {
            let foundDone2 = item.fullname.toLowerCase().includes(search.toLowerCase());
            return foundDone2;
         })
         setFoundBook(result);
         setFoundAvtor(result2);
      }
   }


   function closeBack(event) {
      let target = event.target.closest('.search__background');
      let close = event.target.closest('.search__close');
      if (!target && !close) return;
      setOpenModel(!openModel)

   }
   return (
      <div className="search">
         <div className="search__button" onClick={() => setOpenModel(!openModel)}>
            <div className="search__icon"></div>
         </div>
         {
            openModel &&
            <>
               <div className="search__background" onClick={closeBack}>
               </div>
               <div className="search__form">
                  <div className="search__form-header">
                     <input type="text" className="search__input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                     <button className="search__form-button" onClick={onSearch}></button>
                     <div className="search__close" onClick={closeBack}></div>
                  </div>
                  <div className="search__wrapper">
                     {
                        search &&
                        <>
                           <div className="search__films">
                              <h1 className="search__title">Книги</h1>
                              {
                                 foundBook.map((book, index) => {
                                    return (
                                       <Link to={`/library/${book._id}`} key={index}>
                                          <div className="search__item">
                                             <img src={book.image} alt="film" className="search__image" />
                                             <div className="search__info">
                                                <h2 className="search__name">{book.title}</h2>
                                                <p className="search__unname">{book.subTitle}</p>
                                                <p className="search__kind">{book.genre}</p>
                                             </div>
                                             <div className="search__films-rating">{book.grade.rating}</div>
                                          </div>
                                       </Link>
                                    )
                                 })
                              }
                           </div>
                           <div className="search__actors">
                              <h1 className="search__title">Автори</h1>
                              {
                                 foundAvtor.map((avtor, index) => {
                                    return (
                                       <Link to={`/authors/${avtor._id}`} key={index}>
                                          <div className="search__item">
                                             <img src={avtor.image} alt="film" className="search__image" />
                                             <div className="search__info">
                                                <h2 className="search__name">{avtor.fullname}</h2>
                                                {/* <p className="search__unname">Елена Побегаева</p> */}
                                                <p className="search__kind">{avtor.typeactivity}</p>
                                             </div>
                                          </div>
                                       </Link>
                                    )
                                 })
                              }
                           </div>
                        </>
                     }


                  </div>

               </div>

            </>
         }

      </div>
   )
}
export default Search;