import './listperson.scss';
import { useState } from 'react';
import person from '../../img/personal/avatar.png';
function ListPerson() {


   const [pick, setPick] = useState(0);
   let listbooks = ['Все', 'Любимые', 'Избанное'];
   return (
      <div className="list-books">
         <div className="list-books__head">
            <h1 className="list-books__title">Список персон</h1>
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
                  <img src={person} alt="poster" className="list-books__book-image" />
               </div>
               <div className="list-books__book-content">
                  <div className="list-books__left-content">
                     <h2 className="list-books__name">Джонни Депп</h2>
                     <p className="list-books__surname">Johnny Depp</p>
                     <p className="list-books__genre">Актер, Продюсер, Режиссер, Сценарист</p>
                  </div>
                  <div className="list-books__right-block">
                     <a href="#" className="list-books__link">Карточка писателя</a>
                  </div>
               </div>
            </div>
            <div className="list-books__book">
               <div className="list-books__book-image-wrapper">
                  <img src={person} alt="poster" className="list-books__book-image" />
               </div>
               <div className="list-books__book-content">
                  <div className="list-books__left-content">
                     <h2 className="list-books__name">Том Хэнкс</h2>
                     <p className="list-books__surname">Tom Hanks</p>
                     <p className="list-books__genre">Актер, Продюсер, Режиссер, Сценарист</p>
                  </div>
                  <div className="list-books__right-block">
                     <a href="#" className="list-books__link">Карточка писателя</a>
                  </div>
               </div>
            </div>
            <div className="list-books__book">
               <div className="list-books__book-image-wrapper">
                  <img src={person} alt="poster" className="list-books__book-image" />
               </div>
               <div className="list-books__book-content">
                  <div className="list-books__left-content">
                     <h2 className="list-books__name">Жан Рено</h2>
                     <p className="list-books__surname">Jean Reno</p>
                     <p className="list-books__genre">Актер</p>
                  </div>
                  <div className="list-books__right-block">
                     <a href="#" className="list-books__link">Карточка писателя</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListPerson;