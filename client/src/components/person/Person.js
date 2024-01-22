import { useContext, useState } from 'react';

import './person.scss';
import { AuthorsContext } from '../context';
function Person() {
   const [pick, setPick] = useState(0);
   let sortFilter = ['За рік', "За місяць", "За неділю"];


   const [isLoading, setIsLoading] = useState(false);

   const { dataAuthors } = useContext(AuthorsContext);

   const theBest = dataAuthors.slice(0, 6);

   function load() {
      setIsLoading(true)
   }
   setTimeout(load, 2000)

   return (
      <section className="person">
         <div className="person__container">
            <div className="person__header">
               <h1 className="person__title section_title">Популярні автори</h1>
               <nav className="person__filter">
                  <ul className="person__filter-list popular__filter-list">
                     {
                        sortFilter.map((item, index) => {
                           return (
                              <li className="person__filter-item polupar__filter-item" key={index}>
                                 <span className={`person__filter-link popular__filter-link section_filter ${pick === index ? 'popular__filter_pick' : ''}`} onClick={() => setPick(index)}>{item}</span>
                              </li>
                           )
                        })
                     }
                  </ul>
               </nav>
            </div>
            {
               isLoading && <div className="person__content">
                  <article className="person-block">
                     <div className="person-block__background"></div>
                     {/* <span className="person-block__place">{dataAuthors[0].place}</span> */}
                     <div className="person-block__infa">
                        <h1 className="person-block__first-name">{theBest[0].fullname}</h1>
                        <p className="person-block__second-name">{theBest[0].typeactivity}</p>
                        <p className="person-block__age">{theBest[0].direction}</p>
                     </div>
                     <img src={theBest[0].image} alt="person" className="person-block__image" />
                  </article>
                  <article className="person-block">
                     <div className="person-block__background"></div>
                     {/* <span className="person-block__place">{dataAuthors[1].place}</span> */}
                     <div className="person-block__infa">
                        <h1 className="person-block__first-name">{theBest[1].fullname}</h1>
                        <p className="person-block__second-name">{theBest[1].typeactivity}</p>
                        <p className="person-block__age">{theBest[1].direction}</p>
                     </div>
                     <img src={theBest[1].image} alt="person" className="person-block__image" />
                  </article>
                  <div className="person__rest">
                     {
                        theBest.slice(2).map((item, index) => {
                           return (
                              <article className="person__rest-block" key={index}>
                                 <div className="person__rest-inf">
                                    <h1 className="person__rest-name">{item.fullname}</h1>
                                    <p className="person__rest-surname">{item.typeactivity}</p>
                                    <p className="person__rest-age">{item.direction}</p>
                                 </div>
                                 {/* <span className="person__rest-place">{item.place}</span> */}
                              </article>
                           )
                        })
                     }
                  </div>
               </div>
            }

         </div>
      </section>
   )
}
export default Person;