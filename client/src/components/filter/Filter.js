import { useContext, useState } from 'react';

import './filter.scss';
import { BooksContext } from '../context';



function Filter({ checked }) {
   const [open, setOpen] = useState(false);
   const { dataBooks } = useContext(BooksContext);


   function sortGenre() {
      let result = [];
      for (let str of dataBooks) {
         if (!result.includes(str.genre)) {
            result.push(str.genre)
         }
      }
      return result;
   }
   const dataFilter = sortGenre();
   return (
      <div className={`filter ${open ? 'filter__close' : ''}`}>
         <div className={`filter__choose ${open ? 'filter__choose-active' : ''}`} onClick={() => setOpen(!open)}>
            Вибери жанри
         </div>
         <div className="filter__value-wrapper ">
            <div className="filter__value">
               {dataFilter.map((item, index) => (
                  <label key={index} className="filter__checkbox-label">
                     <input
                        alt={item}
                        className='filter__check'
                        type="checkbox"
                        name={item}
                        onChange={checked}
                     />
                     <span className="filter__text" title={item}>{item}</span>
                  </label>
               ))}
            </div>

         </div>
      </div>
   )
}

export default Filter;