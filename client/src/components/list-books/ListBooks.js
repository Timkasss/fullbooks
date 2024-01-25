import './listbooks.scss';
import { useState, useContext } from 'react';
import { BooksContext } from '../context';
function ListBooks() {
   const { dataBooks } = useContext(BooksContext);

   const image = dataBooks[0]?.volumeInfo.imageLinks.thumbnail;
   const name = dataBooks[0]?.volumeInfo.title;
   const surName = dataBooks[0]?.volumeInfo.subtitle;
   const genre = dataBooks[0]?.volumeInfo.categories[0];
   const rating = dataBooks[0]?.volumeInfo.averageRating;

   const [pick, setPick] = useState(0);
   let listbooks = ['Все', 'Любимые', 'Ожидаемые', 'Избанное'];
   return (
      <div className="list-books">
         <div className="list-books__head">
            <h1 className="list-books__title">Список фильмов</h1>
            <nav className="list-books__filter">
               <ul className="list-books__filter-list">
                  {
                     listbooks.map((item, index) => {
                        return (
                           <li className="list-books__filter-item" key={index}>
                              <a className={`list-books__filter-link section_filter ${pick === index ? 'list-books__filter_pick' : ''}`} onClick={() => setPick(index)}>{item}</a>
                           </li>
                        )
                     })
                  }
               </ul>
            </nav>
         </div>
         <div className="list-books__list-wrapper">
            <div className="list-books__book">
               <div className="list-books__book-image-wrapper">
                  <img src={image} alt="poster" className="list-books__book-image" />
               </div>
               <div className="list-books__book-content">
                  <div className="list-books__left-content">
                     <h2 className="list-books__name">{name}</h2>
                     <p className="list-books__surname">{surName}</p>
                     <p className="list-books__genre">{genre}</p>
                  </div>
                  <div className="list-books__right-block">
                     <div className="list-books__rating">
                        <span className="list-books__rating-count">{rating}</span>
                     </div>
                     <a href="#" className="list-books__link">Карточка фильма</a>
                  </div>
               </div>
            </div>
            <div className="list-books__book">
               <div className="list-books__book-image-wrapper">
                  <img src={image} alt="poster" className="list-books__book-image" />
               </div>
               <div className="list-books__book-content">
                  <div className="list-books__left-content">
                     <h2 className="list-books__name">{name}</h2>
                     <p className="list-books__surname">{surName}</p>
                     <p className="list-books__genre">{genre}</p>
                  </div>
                  <div className="list-books__right-block">
                     <div className="list-books__rating">
                        <span className="list-books__rating-count">{rating}</span>
                     </div>
                     <a href="#" className="list-books__link">Карточка фильма</a>
                  </div>
               </div>
            </div>
            <div className="list-books__book">
               <div className="list-books__book-image-wrapper">
                  <img src={image} alt="poster" className="list-books__book-image" />
               </div>
               <div className="list-books__book-content">
                  <div className="list-books__left-content">
                     <h2 className="list-books__name">{name}</h2>
                     <p className="list-books__surname">{surName}</p>
                     <p className="list-books__genre">{genre}</p>
                  </div>
                  <div className="list-books__right-block">
                     <div className="list-books__rating">
                        <span className="list-books__rating-count">{rating}</span>
                     </div>
                     <a href="#" className="list-books__link">Карточка фильма</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListBooks;