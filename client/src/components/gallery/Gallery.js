import './gallery.scss';
import { useState } from 'react';
import photo1 from '../../img/page-person/gallery1.png';
import photo2 from '../../img/page-person/gallery2.png';
import photo3 from '../../img/page-person/gallery3.png';
import photo4 from '../../img/page-person/gallery4.png';
import photo5 from '../../img/page-person/gallery5.png';
import photo6 from '../../img/page-person/gallery6.png';


import { Navigation } from 'swiper/modules';


import 'swiper/element/css/free-mode';
import 'swiper/element/css/navigation';
import 'swiper/element/css/thumbs';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


function Gallery() {
   const [showGallery, setShowGallery] = useState(false);


   return (
      <section className="gallery">
         <div className="gallery__head-wrapper">
            <h1 className="gallery__title section_title">Фото</h1>
            <a href="#" className="gallery__link">Всі фото</a>
         </div>
         <div className="gallery__images-wrapper">
            <div className="gallery__image gallery_image_height">
               <img src={photo1} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image">
               <img src={photo2} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image">
               <img src={photo3} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image">
               <img src={photo4} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image gallery_image_height">
               <img src={photo5} alt="photo" className="gallery__img" />
            </div>
            <div className="gallery__image" onClick={() => setShowGallery(!showGallery)}>
               <img src={photo6} alt="photo" className="gallery__img" />
               <div className="gallery__image_hover">
                  <span className="gallery__image_count">+196</span>
               </div>
            </div>
         </div>
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
               <div className="swiper-background" onClick={() => setShowGallery(false)}>
               </div>
               <div className="swip">
                  <swiper-container
                     navigation="true"
                     modules={[Navigation]}
                  >
                     <swiper-slide><img src={photo1} alt="photo" /></swiper-slide>
                     <swiper-slide><img src={photo2} alt="photo" /></swiper-slide>
                     <swiper-slide><img src={photo3} alt="photo" /></swiper-slide>
                     <swiper-slide><img src={photo4} alt="photo" /></swiper-slide>
                     <swiper-slide><img src={photo5} alt="photo" /></swiper-slide>
                     <swiper-slide><img src={photo6} alt="photo" /></swiper-slide>
                  </swiper-container>
               </div>
            </>
         }


      </section >
   )
}

export default Gallery;