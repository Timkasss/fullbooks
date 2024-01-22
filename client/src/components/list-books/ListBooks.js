import './listbooks.scss';
import { useState, useContext } from 'react';
import { BooksContext } from '../context';
import { Link } from 'react-router-dom';
function ListBooks() {
   const { dataBooks } = useContext(BooksContext);

   const myBooks = dataBooks.slice(0, 3);

   const [pick, setPick] = useState(0);
   let listbooks = ['Все', 'Любимые', 'Ожидаемые', 'Избанное'];
   return (
      <div className="list-books">
         <div className="list-books__head">
            <h1 className="list-books__title">Список твоїх книг</h1>
            <nav className="list-books__filter">
               <ul className="list-books__filter-list">
                  {
                     listbooks.map((item, index) => {
                        return (
                           <li className="list-books__filter-item" key={index}>
                              <span className={`list-books__filter-link section_filter ${pick === index ? 'list-books__filter_pick' : ''}`} onClick={() => setPick(index)}>{item}</span>
                           </li>
                        )
                     })
                  }
               </ul>
            </nav>
         </div>
         <div className="list-books__list-wrapper">
            {
               myBooks.map((item, index) => {
                  return (
                     <div className="list-books__book" key={index}>
                        <Link to={`/library/${item._id}`}>
                           <div className="list-books__book-image-wrapper">
                              <img src={item.image} alt="poster" className="list-books__book-image" />
                           </div>
                        </Link>
                        <div className="list-books__book-content">
                           <div className="list-books__left-content">
                              <h2 className="list-books__name">{item.title}</h2>
                              <p className="list-books__surname">{item.subTitle}</p>
                              <p className="list-books__genre">{item.genre}</p>
                           </div>
                           <div className="list-books__right-block">
                              <div className="list-books__rating">
                                 <span className="list-books__rating-count">{item.grade.rating}</span>
                              </div>
                              <Link to={`/library/${item._id}`} className="list-books__link">Карточка книги</Link>
                           </div>
                        </div>
                     </div>
                  )
               })
            }

         </div>
      </div>
   )
}

export default ListBooks;