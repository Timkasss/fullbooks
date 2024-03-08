
//import BreadCrumbs from '../components/bread-crumbs/BreadCrumbs';
import BookPerson from '@/app/ui/book-person/BookPerson';
import Gallery from '@/app/ui/gallery/Gallery';
import Comment from '@/app/ui/comment/Comment';

import styles from '../../style/pagePerson.module.scss';

import award1 from '@/public/img/page-person/award1.png';
import award2 from '@/public/img/page-person/award2.png';
import award3 from '@/public/img/page-person/award3.png';


import Image from 'next/image';

import { loadAuthor } from '@/app/lib/load-date';
import Switch from '@/app/ui/switch/Switch';

export default async function PagePerson({ params: { id } }) {
   const author = await loadAuthor(id);

   return (
      <div className={styles.container}>
         <section className={styles.pagePerson}>
            <div className={styles.containerSmall}>
               <div className={styles.headerWrapper}>
                  {/* <BreadCrumbs author={dataAuthors} /> */}
                  <div className={styles.social}>
                     <a href="#" className={styles.socialTelegram}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                     </a>
                     <a href="#" className={styles.socialTwitter}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                     </a>
                  </div>
                  <h1 className={styles.headerTitle}>{author.fullname}</h1>
                  <p className={styles.headerSubtitle}></p>
               </div>
               <div className={styles.wrapperImg}>
                  <Image
                     src={author.image}
                     width={1000}
                     height={500}
                     alt='face' className={styles.image} />
               </div>
               <Switch author={author} />

               <div className={styles.favorites}>
                  <div className={styles.favoritesButton}></div>
                  В избранном у 37933 человек
               </div>
            </div>
         </section >
         <div className={styles.award}>
            <div className={styles.item}>
               <div className={styles.imgWrapper}>
                  <Image
                     src={award1}
                     width={49}
                     height={123}
                     alt="award" className={styles.img} />
               </div>
               <div className={styles.content}>
                  <span className={styles.title}>Оскар</span>
                  <div className={styles.text}>Лучшая мужская роль</div>
                  <div className={styles.year}>2020</div>
               </div>
            </div>
            <div className={styles.item}>
               <div className={styles.imgWrapper}>
                  <Image
                     src={award2}
                     width={49}
                     height={123}
                     alt="award" className={styles.img} />
               </div>
               <div className={styles.content}>
                  <span className={styles.title}>Оскар</span>
                  <div className={styles.text}>Лучшая мужская роль</div>
                  <div className={styles.year}>2020</div>
               </div>
            </div>
            <div className={styles.item}>
               <div className={styles.imgWrapper}>
                  <Image
                     src={award3}
                     width={49}
                     height={123}
                     alt="award" className={styles.img} />
               </div>
               <div className={styles.content}>
                  <span className={styles.title}>Оскар</span>
                  <div className={styles.text}>Лучшая мужская роль</div>
                  <div className={styles.year}>2020</div>
               </div>
            </div>
            <div className={styles.item}>
               <div className={styles.imgWrapper}>
                  <Image
                     src={award3}
                     width={49}
                     height={123}
                     alt="award" className={styles.img} />
               </div>
               <div className={styles.content}>
                  <span className={styles.title}>Оскар</span>
                  <div className={styles.text}>Лучшая мужская роль</div>
                  <div className={styles.year}>2020</div>
               </div>
            </div>
         </div>
         <BookPerson />
         <Gallery />
         <Comment />
      </div>
   )
}
