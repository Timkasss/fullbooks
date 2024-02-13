"use client"
import Poster from '../popular/poster/Poster';
import styles from './slider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
export default function Slider({ books }) {

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
         className={styles.mySwiper}
      >
         {
            books.map((book, index) => (
               <SwiperSlide key={index} ><Poster books={book} index={book._id} /></SwiperSlide>
            ))
         }
         <div className='swiper-button-prev'></div>
         <div className='swiper-button-next'></div>
         <div className='swiper-pagination'></div>
      </Swiper>
   )
}