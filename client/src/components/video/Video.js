import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/scss';
import './video.scss';

import poster1 from '../../img/video/video1.png';
import poster2 from '../../img/video/video2.png';
import poster3 from '../../img/video/video3.png';
import poster4 from '../../img/video/video4.png';
import vid from '../../img/video/video.mp4';



function Video() {

   const [video, setVideo] = useState(0);

   const videos = [
      {
         img: poster1,
         name: 'Мулан',
         link: vid,
         like: 0,
         dislike: 0,
      },
      {
         img: poster4,
         name: 'Тихое место 2',
         link: 'https://www.youtube.com/watch?v=reN_okp2Gq4',
         like: 0,
         dislike: 0,
      },
      {
         img: poster3,
         name: 'Чёрная Вдова',
         link: 'https://www.youtube.com/watch?v=jG85y1Vf0Ng',
         like: 0,
         dislike: 0,
      },
      {
         img: poster1,
         name: 'Мулан',
         link: 'https://www.youtube.com/watch?v=jG85y1Vf0Ng',
         like: 0,
         dislike: 0,
      },
      {
         img: poster2,
         name: 'Форсаж 9',
         link: vid,
         like: 0,
         dislike: 0,
      },
   ]
   const [countGrade, setCountGrade] = useState(videos);

   function like() {
      const newMeant = [...countGrade];
      newMeant[video].like += 1;
      setCountGrade(newMeant)
   }
   function dislike() {
      const newMeant = [...countGrade];
      newMeant[video].dislike += 1;
      setCountGrade(newMeant)
   }

   return (
      <section className="video">
         <div className="video__container">
            <div className="video__header">
               <h1 className="video__title section_title">Новые трейлеры</h1>
               <a href="#" className="video__all-video">Все трейлеры</a>
            </div>
            <div className="video__big-video-wrapper">
               <section className="video__main-video">
                  <footer className="video__footer">
                     <div className="video__footer-left">
                        <h1 className="video__big-title">{videos[video].name}</h1>
                        <div className="video__socials">
                           <a href="#" className="video__social-link">
                              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                           </a>
                           <a href="#" className="video__social-link">
                              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                           </a>
                           <a href="#" className="video__social-link">
                              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                           </a>
                           <a href="#" className="video__social-link">
                              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                           </a>
                        </div>
                     </div>
                     <div className="video__grade">
                        <div className="video__grade-like" onClick={like}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                              <g clipPath="url(#clip0_1_1775)">
                                 <path d="M6.23803 12.262H3.18512C2.76363 12.262 2.42188 12.6037 2.42188 13.0252V25.2366C2.42188 25.6581 2.76358 25.9999 3.18512 25.9999H6.23798C6.65946 25.9999 7.00122 25.6582 7.00122 25.2366V13.0252C7.00122 12.6037 6.65956 12.262 6.23803 12.262Z" fill="white" />
                                 <path d="M25.3049 14.2852C25.1703 13.1012 24.0643 12.2621 22.8727 12.2621H16.9225C17.4281 11.3566 17.6996 8.79556 17.6875 7.74937C17.6676 6.01763 16.2335 4.62988 14.5017 4.62988H13.8719C13.45 4.62988 13.1086 4.97123 13.1086 5.39312C13.1086 7.15802 12.4214 10.3436 11.1253 11.6398C10.253 12.5121 9.50719 12.8282 8.5293 13.317V24.769C10.0265 25.2681 11.9274 26.0001 14.8248 26.0001H19.8174C21.4625 26.0001 22.7437 24.4765 22.1062 22.8667C23.0774 22.6021 23.7937 21.7114 23.7937 20.6575C23.7937 20.3601 23.7363 20.0754 23.6327 19.8138C25.2693 19.3679 25.8717 17.3471 24.7358 16.0782C25.1531 15.612 25.3833 14.9743 25.3049 14.2852Z" fill="white" />
                              </g>
                              <defs>
                                 <clipPath id="clip0_1_1775">
                                    <rect width="26" height="26" fill="white" transform="translate(0.871094)" />
                                 </clipPath>
                              </defs>
                           </svg>
                           <span className="video__like-count">{countGrade[video].like}</span>
                        </div>
                        <div className="video__grade-dislike" onClick={dislike}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                              <g clipPath="url(#clip0_1_1766)">
                                 <path d="M20.6331 14.6091L23.686 14.6091C24.1075 14.6091 24.4492 14.2674 24.4492 13.8459L24.4492 1.63445C24.4492 1.21296 24.1075 0.871204 23.686 0.871204L20.6331 0.871204C20.2116 0.871204 19.8699 1.21291 19.8699 1.63444L19.8699 13.8459C19.8699 14.2674 20.2115 14.6091 20.6331 14.6091Z" fill="white" />
                                 <path d="M1.56619 12.5859C1.70081 13.7698 2.80678 14.609 3.99836 14.609L9.94864 14.609C9.44296 15.5145 9.17153 18.0755 9.18357 19.1217C9.20353 20.8535 10.6376 22.2412 12.3694 22.2412L12.9992 22.2412C13.4211 22.2412 13.7625 21.8999 13.7625 21.478C13.7625 19.7131 14.4497 16.5275 15.7458 15.2313C16.6181 14.359 17.3639 14.0428 18.3418 13.5541L18.3418 2.10206C16.8446 1.60304 14.9437 0.871029 12.0463 0.871028L7.05365 0.871028C5.4086 0.871028 4.12739 2.39461 4.76485 4.00438C3.79366 4.26895 3.07744 5.15965 3.07744 6.21356C3.07744 6.51098 3.13482 6.79566 3.23842 7.05729C1.60179 7.5032 0.999374 9.52403 2.1353 10.7929C1.71798 11.2591 1.48784 11.8968 1.56619 12.5859Z" fill="white" />
                              </g>
                              <defs>
                                 <clipPath id="clip0_1_1766">
                                    <rect width="26" height="26" fill="white" transform="translate(26 26.8711) rotate(-180)" />
                                 </clipPath>
                              </defs>
                           </svg>
                           <span className="video__dislike-count">{countGrade[video].dislike}</span>
                        </div>
                     </div>
                  </footer>
                  <div className="video__wrapper-big">
                     <ReactPlayer
                        url={videos[video].link}
                        className='video__big-video'
                        width='100%'
                        height='100%'
                        controls
                        config={{
                           file: {
                              attributes: {
                                 poster: videos[video].img
                              }
                           }
                        }}
                     />
                  </div>

               </section>
               <div className="video__list-wrapper">
                  <div className="video__list-container">
                     <Swiper
                        modules={[Pagination]}
                        slidesPerView={4}
                        slidesPerGroup={1}
                        pagination={{
                           type: 'progressbar',
                           el: '.swiper-pagination',
                        }}
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
                        className='my-swiper-video'>
                        {
                           videos.map((item, index) => {
                              return (
                                 <SwiperSlide>
                                    <article className="video__item" key={index} >
                                       <div className="video__item-wrapper" onClick={() => setVideo(index)}>
                                          <img className="video__small-video" src={item.img} alt="poster" />
                                          {/* <video className="video__small-video"
                                       controls
                                       poster={item.img}>
                                       <source
                                          src={item.link}
                                          type="video/mp4"
                                       />
                                    </video> */}
                                       </div>
                                       <h2 className="video__item-title">{item.name}</h2>
                                    </article>
                                 </SwiperSlide>
                              )
                           })
                        }
                        <div className="swiper-pagination"></div>
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </section >
   );
}

export default Video;
