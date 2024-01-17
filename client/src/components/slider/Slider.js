import Poster from '../popular/poster/Poster';
import './slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';

function Slider({ books }) {

   return (
      <Swiper
         modules={[Navigation, Pagination]}
         pagination={{
            type: 'fraction',
            //clickable: true,
            el: '.swiper-pagination',
         }}
         navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         }}
         slidesPerView={4}
         slidesPerGroup={1}
         breakpoints={{
            0: {
               slidesPerView: 2,
               spaceBetween: 10,
            },
            320: {
               slidesPerView: 2,
               spaceBetween: 10,
            },
            425: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            768: {
               slidesPerView: 4,
               spaceBetween: 20,
            },
         }}
         className='my-swiper'
      >
         {
            books.map(book => (
               <SwiperSlide key={book.id} ><Poster books={book} /></SwiperSlide>
            ))
         }
         <div className="swiper-button-prev"></div>
         <div className="swiper-button-next"></div>
         <div className="swiper-pagination"></div>
      </Swiper>
   )
}
export default Slider;