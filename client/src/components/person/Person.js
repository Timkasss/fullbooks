import { useState } from 'react';

import person from '../../img/person/personOne.png';
import person2 from '../../img/person/personTwo.png';
import './person.scss';
function Person() {
   const [pick, setPick] = useState(0);
   let sortFilter = ['За рік', "За місяць", "За неділю"];

   const persons = [
      {
         place: '1-е место',
         name: 'Квентин Тарантино',
         surname: 'Quentin Tarantino',
         age: '57 лет',
      },
      {
         place: '2-е место',
         name: 'Джейсон Стейтем',
         surname: 'Jason Statham',
         age: '52 года',
      },
      {
         place: '3-е место',
         name: 'Тинто Брасс',
         surname: 'Tinto Brass',
         age: '87 лет',
      },
      {
         place: '4-е место',
         name: 'Джеки Чан',
         surname: 'Jackie Chan',
         age: '66 лет',
      },
      {
         place: '5-е место',
         name: 'Том Харди',
         surname: 'Tom Hardy',
         age: '42 года',
      },
      {
         place: '6-е место',
         name: 'Акшай Кумар',
         surname: 'Akshay Kumar',
         age: '52 года',
      },
   ]
   return (
      <section className="person">
         <div className="person__container">
            <div className="person__header">
               <h1 className="person__title section_title">Популярні персони</h1>
               <nav className="person__filter">
                  <ul className="person__filter-list popular__filter-list">
                     {
                        sortFilter.map((item, index) => {
                           return (
                              <li className="person__filter-item polupar__filter-item" key={index}>
                                 <a className={`person__filter-link popular__filter-link section_filter ${pick === index ? 'popular__filter_pick' : ''}`} onClick={() => setPick(index)}>{item}</a>
                              </li>
                           )
                        })
                     }
                  </ul>
               </nav>
            </div>
            <div className="person__content">
               <article className="person-block">
                  <div className="person-block__background"></div>
                  <span className="person-block__place">{persons[0].place}</span>
                  <div className="person-block__infa">
                     <h1 className="person-block__first-name">{persons[0].name}</h1>
                     <p className="person-block__second-name">{persons[0].surname}</p>
                     <p className="person-block__age">{persons[0].age}</p>
                  </div>
                  <img src={person} alt="person" className="person-block__image" />
               </article>
               <article className="person-block">
                  <div className="person-block__background"></div>
                  <span className="person-block__place">{persons[1].place}</span>
                  <div className="person-block__infa">
                     <h1 className="person-block__first-name">{persons[1].name}</h1>
                     <p className="person-block__second-name">{persons[1].surname}</p>
                     <p className="person-block__age">{persons[1].age}</p>
                  </div>
                  <img src={person2} alt="person" className="person-block__image" />
               </article>
               <div className="person__rest">
                  {
                     persons.slice(2).map((item, index) => {
                        return (
                           <article className="person__rest-block" key={index}>
                              <div className="person__rest-inf">
                                 <h1 className="person__rest-name">{item.name}</h1>
                                 <p className="person__rest-surname">{item.surname}</p>
                                 <p className="person__rest-age">{item.age}</p>
                              </div>
                              <span className="person__rest-place">{item.place}</span>
                           </article>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </section>
   )
}
export default Person;