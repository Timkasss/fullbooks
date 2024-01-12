import { useState } from 'react';

import './filter.scss';

const dataFilter = [
   'автобіографія',
   'біографія',
   'вибрані твори',
   'ВКПБ',
   'діамат',
   'загальне',
   'збірка статей',
   'ілюстроване видання',
   'істмат',
   'історична хроніка',
   'історичні нариси',
   'літературна критика',
   'літературознавство',
   'листи',
   'наукова монографія',
   'оповідання',
   'педагогічні твори',
   'переклади',
   'пзт',
   'поезія',
   'політекономія',
   'проза',
   'публіцистика',
   'робочі нариси',
   'спогади',
   'твори',
   'худліт'
];

function Filter() {
   const [open, setOpen] = useState(false);

   return (
      <div className={`filter ${open ? 'filter__close' : ''}`}>
         <div className={`filter__choose ${open ? 'filter__choose-active' : ''}`} onClick={() => setOpen(!open)}>
            Choose item            Choose item            Choose item
         </div>
         <div className="filter__value-wrapper ">
            <div className="filter__value">
               {dataFilter.map((item, index) => (
                  <label key={index} className="filter__checkbox-label">

                     <input
                        alt={item}
                        className='filter__check'
                        type="checkbox"
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