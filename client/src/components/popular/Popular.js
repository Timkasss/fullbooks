import { useState, useContext } from 'react';
import './popular.scss';
import { BooksContext } from '../context';
import { Link } from 'react-router-dom';
import Poster from './poster/Poster';
function Popular() {

   const [pick, setPick] = useState(0);
   const { dataBooks, setDataBooks } = useContext(BooksContext);
   const books = dataBooks.slice(0, 9);
   // let sortGenre = () => {
   //    let result = ['Все']
   //    for (let str of dataBooks) {
   //       if (!result.includes(str.genre)) {
   //          result.push(str.genre)
   //       }
   //    }
   //    return result;
   // }
   const genre = ['Все', 'Художня', 'Наукова', 'Історична', 'Документальна'];
   return (
      <section className="popular">
         <div className="popualar__container">
            <div className="popular__header-wrapper">
               <h1 className='popular__title section_title'>Популярне</h1>
               <span className='popular__line'></span>
               <header className="popular__header">
                  <div className="body-burger">
                     <nav className="popular__filter">
                        <ul className="popular__filter-list">
                           {
                              genre.map((item, index) => {
                                 return (
                                    <li className="polupar__filter-item" key={index}>
                                       <a className={`popular__filter-link section_filter ${pick === index ? 'popular__filter_pick' : ''}`} onClick={() => setPick(index)}>{item}</a>
                                    </li>
                                 )
                              })
                           }
                        </ul>
                     </nav>
                  </div>
                  <div className="burger">
                     <span className='burger-line'></span>
                  </div>
               </header>
            </div>
            <div className="popular__films-container">
               {
                  books.map((book, index) => (
                     <Poster key={index} books={book} index={book._id} />
                  ))
               }
            </div>
            <div className="popular__wrapper-link">
               <Link to={'/library'} className="popular__link">Вся бібліотека</Link>
            </div>
         </div>
      </section>
   );
}

export default Popular;
