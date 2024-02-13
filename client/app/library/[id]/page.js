
import BookCard from '@/app/ui/book-card/BookCard';
import Slider from '@/app/ui/slider/Slider';
import Review from '@/app/ui/review/Review';

import styles from '@/app/style/book.module.scss';


import avatar from '@/public/img/book/avatar-comment.png';
import Image from 'next/image';

import { books } from '@/app/lib/placeholder-data';

export default function Book({ params: { id } }) {
   //ДОБАВИТИ ПРЕЛОУД
   const slides = books;

   return (
      <>
         <BookCard databook={books[id]} />
         <div className={styles.container}>
            <section className={styles.quotesBlock}>
               <h1 className={`${styles.QBtitle} ${styles.section_title}`}>Цитати з книги</h1>
               <article className={styles.quote}>
                  <h1 className={styles.name}>Слова отца </h1>
                  <p className={styles.text}>Принимая во внимание показатели успешности, высококачественный прототип будущего проекта не оставляет шанса для своевременного выполнения сверхзадачи. Равным образом, дальнейшее развитие различных форм деятельности играет определяющее значение для благоприятных перспектив!</p>
               </article>
               <article className={styles.quote}>
                  <h1 className={styles.name}>Слова странного человека</h1>
                  <p className={styles.text}>Мы вынуждены отталкиваться от того, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает актуальность форм воздействия. Приятно, граждане, наблюдать, как непосредственные участники технического прогресса представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. Господа, понимание сути ресурсосберегающих технологий создаёт предпосылки для приоритизации разума над эмоциями. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.</p>
               </article>
            </section>
            <section className={styles.similerBooks}>
               <h1 className={styles.SBtitle}>Схожі книги</h1>
               <Slider books={slides} />
            </section>
            <section className={styles.bookReviews}>
               <div className={styles.titleWrapper}>
                  <h1 className={styles.title}>Рецензии к фильму</h1>
                  <div className={styles.add}>Добавить рецензию</div>
               </div>
               <header className={styles.header}>
                  <div className={styles.pick}>Всего <span className='book-reviews__pick-count book-reviews__pick-count_color_blue'>36</span></div>
                  <div className={styles.pick}>Положительных <span className='book-reviews__pick-count book-reviews__pick-count_color_green'>28</span></div>
                  <div className={styles.pick}>Отрицательных<span className='book-reviews__pick-count book-reviews__pick-count_color_red'>3</span></div>
                  <div className={styles.pick}>Нейтральных рецензий<span className='book-reviews__pick-count book-reviews__pick-count_color_yellow'>5</span></div>
                  <div className={styles.pick}>Процент<span className='book-reviews__pick-count book-reviews__pick-count_color_brown'>87%</span></div>
               </header>
               <div className={styles.wrapper}>
                  <Review />
               </div>
               <div className={styles.pagination}>
                  <span className={styles.point}></span>
                  <span className={`${styles.point} ${styles.point_active}`}></span>
                  <span className={styles.point}></span>
                  <span className={styles.point}></span>
                  <span className={styles.point}></span>
                  <span className={styles.point}></span>
               </div>
            </section>
            <div className={styles.writeComment}>
               <div className={styles.person}>
                  <div className={styles.avatar}>
                     <Image src={avatar} alt="avatar" className={styles.img} />
                  </div>
                  <div className={styles.personData}>
                     <h1 className={styles.personName}>Евгений Батиков</h1>
                     <a href="#" className={styles.personLink}>Мой профиль</a>
                  </div>
               </div>
               <form action="#" className={styles.form}>
                  <div className={styles.formHeader}>
                     <input type="text" className={styles.inputTitle} placeholder='Заголовок Вашої рецензії' />
                     <select name="grade" id={styles.gradePick} className={styles.gradePick}>
                        <option value="good">Позитивна рецензія</option>
                        <option value="middle">Нейтральна рецензія</option>
                        <option value="bad">Негативна рецензія</option>
                     </select>
                  </div>
                  <div className={styles.kindText}>
                     <button id={styles.bold} className={styles.writeComment_butStyle}>Ж</button>
                     <button id={styles.italics} className={styles.writeComment_butStyle}>К</button>
                     <button id={styles.emphasized} className={styles.writeComment_butStyle}>А</button>
                  </div>
                  <textarea name="comment" id={styles.writeComment} rows="10"></textarea>
                  <div className={styles.formFooter}>
                     <div className={styles.checkboxWrapper}>
                        <input id={styles.writeCkeckbox} type="checkbox" className={styles.checkbox} />
                        <label className={styles.checkboxLabel} htmlFor="write-ckeckbox">
                           Соглашаюсь на условия
                        </label>
                        <a href="#" className={styles.checkboxLink}>политики конфиденциальности</a>
                     </div>
                     <div className={styles.buttons}>
                        <button className={styles.preView}>Попередній перегляд</button>
                        <button className={styles.sent}>Відправити</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>

   )


}