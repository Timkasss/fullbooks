import { useState } from 'react';


import './search.scss';

import film from '../../../img/header/item.png'
function Search() {
   const [openModel, setOpenModel] = useState(false)

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
                     <input type="text" className="search__input" />
                     <button className="search__form-button"></button>
                     <div className="search__close" onClick={closeBack}></div>
                  </div>
                  <div className="search__wrapper">
                     <div className="search__films">
                        <h1 className="search__title">Фильмы</h1>
                        <div className="search__item">
                           <img src={film} alt="film" className="search__image" />
                           <div className="search__info">
                              <h2 className="search__name">Побег (сериал 2005 – 2017)</h2>
                              <p className="search__unname">Побег</p>
                              <p className="search__kind">Боевик, триллер, драма, криминал, детектив</p>
                           </div>
                           <div className="search__films-rating">8.40</div>
                        </div>
                        <div className="search__item">
                           <img src={film} alt="film" className="search__image" />
                           <div className="search__info">
                              <h2 className="search__name">Побег (сериал 2005 – 2017)</h2>
                              <p className="search__unname">Побег</p>
                              <p className="search__kind">Боевик, триллер, драма, криминал, детектив</p>
                           </div>
                           <div className="search__films-rating">8.40</div>
                        </div>
                        <div className="search__item">
                           <img src={film} alt="film" className="search__image" />
                           <div className="search__info">
                              <h2 className="search__name">Побег (сериал 2005 – 2017)</h2>
                              <p className="search__unname">Побег</p>
                              <p className="search__kind">Боевик, триллер, драма, криминал, детектив</p>
                           </div>
                           <div className="search__films-rating">8.40</div>
                        </div>
                     </div>
                     <div className="search__actors">
                        <h1 className="search__title">Персоны</h1>
                        <div className="search__item">
                           <img src={film} alt="film" className="search__image" />
                           <div className="search__info">
                              <h2 className="search__name">Елена Побегаева</h2>
                              <p className="search__unname">Елена Побегаева</p>
                              <p className="search__kind">Актриса</p>
                           </div>
                        </div>
                        <div className="search__item">
                           <img src={film} alt="film" className="search__image" />
                           <div className="search__info">
                              <h2 className="search__name">Елена Побегаева</h2>
                              <p className="search__unname">Елена Побегаева</p>
                              <p className="search__kind">Актриса</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

            </>
         }

      </div>
   )
}
export default Search;