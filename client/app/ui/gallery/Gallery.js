"use client"
import styles from './gallery.module.scss';
import { useState } from 'react';
import photo1 from '@/public/img/page-person/gallery1.png';
import photo2 from '@/public/img/page-person/gallery2.png';
import photo3 from '@/public/img/page-person/gallery3.png';
import photo4 from '@/public/img/page-person/gallery4.png';
import photo5 from '@/public/img/page-person/gallery5.png';
import photo6 from '@/public/img/page-person/gallery6.png';


import { Navigation } from 'swiper/modules';


import 'swiper/element/css/free-mode';
import 'swiper/element/css/navigation';
import 'swiper/element/css/thumbs';

import { register } from 'swiper/element/bundle';
import Image from 'next/image';
// register Swiper custom elements
register();


export default function Gallery() {
   const [showGallery, setShowGallery] = useState(false);

   const images = [photo1, photo2, photo3, photo4, photo5, photo6];
   return (
      <section className={styles.gallery}>
         <div className={styles.headWrapper}>
            <h1 className={styles.title}>Фото</h1>
            <div onClick={() => setShowGallery(!showGallery)} className={styles.link}>Всі фото</div>
         </div>
         <div className={styles.imagesWrapper}>

            <div className={`${styles.image} ${styles.gallery_image_height}`}>
               <Image
                  src={photo1}
                  width={1000}
                  height={1359}
                  alt="photo" className={styles.img} />
            </div>
            <div className={styles.image}>
               <Image
                  src={photo2}
                  width={1000}
                  height={1359}
                  alt="photo" className={styles.img} />
            </div>
            <div className={styles.image}>
               <Image
                  src={photo3}
                  width={1000}
                  height={1359}
                  alt="photo" className={styles.img} />
            </div>
            <div className={styles.image}>
               <Image
                  src={photo4}
                  width={1000}
                  height={1359}
                  alt="photo" className={styles.img} />
            </div>
            <div className={`${styles.image} ${styles.gallery_image_height}`}>
               <Image
                  src={photo5}
                  width={1000}
                  height={1359}
                  alt="photo" className={styles.img} />
            </div>
            <div className={styles.image} onClick={() => setShowGallery(!showGallery)}>
               <Image
                  src={photo6}
                  width={1000}
                  height={1359}
                  alt="photo" className={styles.img} />
               <div className={styles.image_hover}>
                  <span className={styles.image_count}>+196</span>
               </div>
            </div >
         </div >
         {/* <div className="swiper-background">
            <div className="swiper">
               <div className="swiper__big">
                  <div className="swiper__big-photo">
                     <img src={photo1} alt="photo" className="swiper__photo" />
                  </div>
                  <div className="swiper__big-photo">
                     <img src={photo2} alt="photo" className="swiper__photo" />
                  </div>
                  <div className="swiper__big-photo">
                     <img src={photo3} alt="photo" className="swiper__photo" />
                  </div>
               </div>
               <div className="swiper__small">
                  <div className="swiper__small-photo">
                     <img src={photo1} alt="photo" className="swiper__photo" />
                  </div>
                  <div className="swiper__small-photo">
                     <img src={photo2} alt="photo" className="swiper__photo" />
                  </div>
                  <div className="swiper__small-photo">
                     <img src={photo3} alt="photo" className="swiper__photo" />
                  </div>
               </div>
            </div>
         </div> */}
         {
            showGallery &&
            <>
               <div className={styles.swiperBackground} onClick={() => setShowGallery(false)}>
               </div>
               <div className={styles.swip}>
                  <swiper-container
                     navigation="true"
                     modules={[Navigation]}
                  >
                     {
                        images.map((item) => {
                           console.log(item)
                           return (
                              <swiper-slide><Image
                                 src={item.src}
                                 width={1000}
                                 height={1359}
                                 alt="photo" />
                              </swiper-slide>
                           )
                        })
                     }
                  </swiper-container>
               </div>
            </>
         }


      </section >
   )
}
