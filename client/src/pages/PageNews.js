import { useState, useMemo } from "react";
import { Link } from 'react-router-dom';

import BreadCrumbs from '../components/bread-crumbs/BreadCrumbs';
import Pagination from '../components/pagination/Pagination';

import '../style/pagenews.scss';

import article from '../img/news/articleOne.png';
import article1 from '../img/news/articleTwo.png';

function PageNews() {
   const articles = ["oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three"]

   let PageSize = 12;
   const [currentPage, setCurrentPage] = useState(1);
   const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return articles.slice(firstPageIndex, lastPageIndex);
   }, [currentPage, articles]);
   return (
      <section className="page-news">
         <div className="page-news__container">
            <h1 className="page-news__title section_title">Новости</h1>
            <BreadCrumbs />
            <div className="page-news__wrapper-article">
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <Link to={'/news/id'} className="page-news__article-link">
                           Фильм недели: «Спутник» — sci-fi про Чужого в позднем СССР, мечтающий быть чем-то большим
                        </Link>
                     </h2>

                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <Link to={'/news/id'} className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </Link>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <Link to={'/news/id'} className="page-news__article-link">
                           Джеймс Ганн назвал 10 самых недооцененных сериалов последних лет
                        </Link>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <Link to={'/news/id'} className="page-news__article-link">
                     <img src={article1} alt="poster" className="page-news__image" />
                  </Link>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <Link to={'/news/id'} className="page-news__article-link">
                           Тизер-постер фильма «Оторви и выбрось»: Режиссер «Папа, сдохни» готовит приключенческую комедию
                        </Link>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <Link to={'/news/id'} className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </Link>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <Link to={'/news/id'} className="page-news__article-link">
                           Шоураннер «Жизней матрешки» займется сериалом по «Звездным войнам»
                        </Link>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <Link to={'/news/id'} className="page-news__article-link">
                     <img src={article1} alt="poster" className="page-news__image" />
                  </Link>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           A24 выставила на аукцион платье из «Солнцестояния» и худи из «Эйфории»
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           Прокуратура Украины завела уголовные дела на создателей проекта «Дау»
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article1} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
               <article className="page-news__item">
                  <div className="page-news__item-content">
                     <h2 className="page-news__item-title">
                        <a href="#" className="page-news__article-link">
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className="page-news__item-type">Новость</p>
                     <div className="page-news__item-data">
                        <div className="page-news__item-date">24 Апр 2020</div>
                        <div className="page-news__item-views">120</div>
                        <div className="page-news__item-comment">9</div>
                     </div>
                  </div>
                  <a href="#" className="page-news__article-link">
                     <img src={article} alt="poster" className="page-news__image" />
                  </a>
               </article>
            </div>
            <Pagination
               currentPage={currentPage}
               totalCount={articles.length}
               pageSize={PageSize}
               onPageChange={page => setCurrentPage(page)}
            />
         </div >
      </section >
   )
}

export default PageNews;