import { BooksContext } from '../components/context';
import { useContext, useRef, useEffect } from 'react';
import '../style/book.scss';
import BookCard from '../components/book-card/BookCard';
import Poster from '../components/popular/poster/Poster';
import avatar from '../img/book/avatar-comment.png';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import Review from '../components/review/Review';
// register Swiper custom elements
register();


function Book() {
   const { dataBooks } = useContext(BooksContext);
   //ДОБАВИТИ ПРЕЛОУД

   const slides = dataBooks.slice(0, 9);

   const swiperElRef = useRef(null);
   useEffect(() => {
      //swiper parameters
      const swiperParams = {
         modules: [Navigation, Pagination],
         injectStyles: [
            `
            swiper-container::part(pagination) {
        bottom:150px;
             }
            `,
         ],
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
      <>
         {
            dataBooks.length > 1 && <BookCard databook={dataBooks} />
         }
         <div className="book__container">
            <section className="quotes-block">
               <h1 className="quotes-block__title section_title">Цитати з книги</h1>
               <article className="quote">
                  <h1 className="quote__name">Слова отца </h1>
                  <p className="quote__text">Принимая во внимание показатели успешности, высококачественный прототип будущего проекта не оставляет шанса для своевременного выполнения сверхзадачи. Равным образом, дальнейшее развитие различных форм деятельности играет определяющее значение для благоприятных перспектив!</p>
               </article>
               <article className="quote">
                  <h1 className="quote__name">Слова странного человека</h1>
                  <p className="quote__text">Мы вынуждены отталкиваться от того, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает актуальность форм воздействия. Приятно, граждане, наблюдать, как непосредственные участники технического прогресса представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. Господа, понимание сути ресурсосберегающих технологий создаёт предпосылки для приоритизации разума над эмоциями. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.</p>
               </article>
            </section>
            <section className="similer-books">
               <h1 className="similer-books__title section_title">Схожі книги</h1>
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
               >
                  <div className="swiper-navigation-wrapper" slot="container-start">
                     <div className="swipper-button-next"></div>
                     <div className="swipper-button-prev"></div>
                  </div>
                  {
                     slides.map(book => (
                        <swiper-slide key={book.id}><Poster books={book} /></swiper-slide>
                     ))
                  }
               </swiper-container>
            </section>
            <section className="book-reviews">
               <div className="book-reviews__title-wrapper">
                  <h1 className="book-reviews__title section_title">Рецензии к фильму</h1>
                  <div className="book-reviews__add">Добавить рецензию</div>
               </div>
               <header className="book-reviews__header">
                  <div className="book-reviews__pick">Всего <span className='book-reviews__pick-count book-reviews__pick-count_color_blue'>36</span></div>
                  <div className="book-reviews__pick">Положительных <span className='book-reviews__pick-count book-reviews__pick-count_color_green'>28</span></div>
                  <div className="book-reviews__pick">Отрицательных<span className='book-reviews__pick-count book-reviews__pick-count_color_red'>3</span></div>
                  <div className="book-reviews__pick">Нейтральных рецензий<span className='book-reviews__pick-count book-reviews__pick-count_color_yellow'>5</span></div>
                  <div className="book-reviews__pick">Процент<span className='book-reviews__pick-count book-reviews__pick-count_color_brown'>87%</span></div>
               </header>
               <div className="book-reviews__wrapper">
                  <Review />
               </div>
               <div className="book-reviews__pagination">
                  <span className="book-reviews__point"></span>
                  <span className="book-reviews__point book-reviews__point_active"></span>
                  <span className="book-reviews__point"></span>
                  <span className="book-reviews__point"></span>
                  <span className="book-reviews__point"></span>
                  <span className="book-reviews__point"></span>
               </div>
            </section>
            <div className="write-comment">
               <div className="write-comment__person">
                  <div className="write-comment__avatar">
                     <img src={avatar} alt="avatar" className="write-comment__img" />
                  </div>
                  <div className="write-comment__person-data">
                     <h1 className="write-comment__person-name">Евгений Батиков</h1>
                     <a href="#" className="write-comment__person-link">Мой профиль</a>
                  </div>
               </div>
               <form action="#" className="write-comment__form">
                  <div className="write-comment__form-header">
                     <input type="text" className="write-comment__input-title" placeholder='Заголовок Вашої рецензії' />
                     <select name="grade" id="grade-pick" className="write-comment__grade-pick">
                        <option value="good">Позитивна рецензія</option>
                        <option value="middle">Нейтральна рецензія</option>
                        <option value="bad">Негативна рецензія</option>
                     </select>
                  </div>
                  <div className="write-comment__kind-text">
                     <button id="bold" className='write-comment_but-style'>Ж</button>
                     <button id="italics" className='write-comment_but-style'>К</button>
                     <button id="emphasized" className='write-comment_but-style'>А</button>
                  </div>
                  <textarea name="comment" id="write-comment" rows="10"></textarea>
                  <div className="write-comment__form-footer">
                     <div className="write-comment__checkbox-wrapper">
                        <input id='write-ckeckbox' type="checkbox" className='write-comment__checkbox' />
                        <label className='write-comment__checkbox-label' htmlFor="write-ckeckbox">
                           Соглашаюсь на условия
                        </label>
                        <a href="#" className='write-comment__checkbox-link'>политики конфиденциальности</a>
                     </div>
                     <div className="write-comment__buttons">
                        <button className="write-comment__pre-view">Попередній перегляд</button>
                        <button className="write-comment__sent">Відправити</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>

   )


}
export default Book;