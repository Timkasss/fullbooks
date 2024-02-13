"use client"
import { useState, useMemo } from "react";

//import BreadCrumbs from '../components/bread-crumbs/BreadCrumbs';
//import Pagination from '../components/pagination/Pagination';

import styles from '../style/pagenews.module.scss';

import article from '../../public/img/news/articleOne.png';
import article1 from '../../public/img/news/articleTwo.png';
import Link from "next/link";
import Image from "next/image";

function PageNews() {
   const articles = ["oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three", "oen", "two", "three"]

   let PageSize = 12;
   const [currentPage, setCurrentPage] = useState(1);
   // const currentTableData = useMemo(() => {
   //    const firstPageIndex = (currentPage - 1) * PageSize;
   //    const lastPageIndex = firstPageIndex + PageSize;
   //    return articles.slice(firstPageIndex, lastPageIndex);
   // }, [currentPage, articles]);
   return (
      <section className={styles.pageNews}>
         <div className={styles.container}>
            <h1 className={styles.title}>Новости</h1>
            {/* <BreadCrumbs /> */}
            <div className={styles.wrapperArticle}>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <Link href='/news/id' className={styles.articleLink}>
                           Фильм недели: «Спутник» — sci-fi про Чужого в позднем СССР, мечтающий быть чем-то большим
                        </Link>
                     </h2>

                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <Link href='/news/id' className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </Link>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <Link href={'/news/id'} className={styles.articleLink}>
                           Джеймс Ганн назвал 10 самых недооцененных сериалов последних лет
                        </Link>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <Link href='/news/id' className={styles.articleLink}>
                     <Image src={article1} alt="poster" className={styles.image} />
                  </Link>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <Link href='/news/id' className={styles.articleLink}>
                           Тизер-постер фильма «Оторви и выбрось»: Режиссер «Папа, сдохни» готовит приключенческую комедию
                        </Link>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <Link href='/news/id' className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </Link>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <Link href='/news/id' className={styles.articleLink}>
                           Шоураннер «Жизней матрешки» займется сериалом по «Звездным войнам»
                        </Link>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <Link href='/news/id' className={styles.articleLink}>
                     <Image src={article1} alt="poster" className={styles.image} />
                  </Link>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           A24 выставила на аукцион платье из «Солнцестояния» и худи из «Эйфории»
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           Прокуратура Украины завела уголовные дела на создателей проекта «Дау»
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article1} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
               <article className={styles.item}>
                  <div className={styles.itemContent}>
                     <h2 className={styles.itemTitle}>
                        <a href="#" className={styles.articleLink}>
                           «Мир Дикого Запада» продлен на четвертый сезон
                        </a>
                     </h2>
                     <p className={styles.itemType}>Новость</p>
                     <div className={styles.itemData}>
                        <div className={styles.itemDate}>24 Апр 2020</div>
                        <div className={styles.itemViews}>120</div>
                        <div className={styles.itemComment}>9</div>
                     </div>
                  </div>
                  <a href="#" className={styles.articleLink}>
                     <Image src={article} alt="poster" className={styles.image} />
                  </a>
               </article>
            </div>
            {/* <Pagination
               currentPage={currentPage}
               hreftalCount={articles.length}
               pageSize={PageSize}
               onPageChange={page => setCurrentPage(page)}
            /> */}
         </div >
      </section >
   )
}

export default PageNews;