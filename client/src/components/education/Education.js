import { useEffect, useRef, useContext } from 'react';

import Poster from '../popular/poster/Poster';
import { BooksContext } from '../context';
import './education.scss';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();



function Education() {
   const { dataBooks, setDataBooks } = useContext(BooksContext);
   const slides = dataBooks.slice(0, 9);

   const swiperElRef = useRef(null);
   useEffect(() => {
      //swiper parameters
      const swiperParams = {
         modules: [Navigation, Pagination],
         slidesPerView: 4,
         spaceBetween: 20,
         breakpoints: {
            25: {
               slidesPerView: 2,
               spaceBetween: 10,
            },
            425: {
               slidesPerView: 3,
               spaceBetween: 15,
            },
            768: {
               slidesPerView: 4,
               spaceBetween: 20,
            },
         },
         on: {
            init() {
               // ...
            },
         },
      };

      // now we need to assign all parameters to Swiper element
      if (swiperElRef.current !== null) {
         Object.assign(swiperElRef.current, swiperParams);
         // and now initialize it
         swiperElRef.current.initialize();
      }
   }, [])


   return (
      <section className="education">
         <div className="education__container">
            <h1 className="education__title section_title">Освіта</h1>
            <div className='education__slider-wrapper'>
               <swiper-container
                  ref={swiperElRef}
                  init="false"
                  navigation={{
                     nextEl: '.swipper-button-next',
                     prevEl: '.swipper-button-prev',
                  }}
                  pagination={{
                     type: 'fraction',
                     el: '.swiper-pagination',
                  }}
                  injectStylesUrls={[
                     'path/to/navigation-element.min.css',
                     'path/to/pagination-element.min.css',
                  ]}
               >
                  <div className="swiper-navigation-wrapper">
                     <div className="swipper-button-next"></div>
                     <div className="swipper-button-prev"></div>
                     <div className="swiper-pagination"></div>
                  </div>
                  {
                     slides.map(book => (
                        <swiper-slide key={book.id}><Poster books={book} /></swiper-slide>
                     ))
                  }
               </swiper-container>

            </div>
         </div>
      </section >
   )
}
export default Education;