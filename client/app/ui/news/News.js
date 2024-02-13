import styles from './news.module.scss';
// import { Link } from 'react-router-dom';
import preview from '@/public/img/news/preview.png';
import imgsmall from '@/public/img/news/preview.png';
import Image from 'next/image';
import Link from 'next/link';
function News() {
   return (
      <section className={styles.news}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <h1 className={styles.title}>Последние новости</h1>
               <Link href='/news' className={styles.link}>Все новости</Link>
            </div>
            <div className={styles.blockWrapper}>
               <section className={styles.main}>
                  <div className={styles.infa}>
                     <h2 className={styles.mainTitle}>Не время умирать. Перенос релиза фильма  </h2>
                     <p className={styles.mainText}>Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.</p>
                  </div>
                  <Image src={preview} alt="preview" className={styles.mainImage} />
                  <header className={styles.header}>
                     <div className={styles.headerDate}>15 Апр 2020</div>
                     <span className={styles.headerViews}>242</span>
                     <span className={styles.headerCommnents}>14</span>
                  </header>
               </section>
               <div className={styles.smallBloksWrapper}>
                  <article className={styles.smallBlock}>
                     <h2 className={styles.smallTitle}>Как изменили Соника с последнего анонса </h2>
                     <div className={styles.smallDate}> 15 Апр 2020</div>
                     <Image src={imgsmall} alt="preview" className={styles.smallImg} />
                  </article>
                  <article className={styles.smallBlock}>
                     <h2 className={styles.smallTitle}>Как изменили Соника с последнего анонса </h2>
                     <div className={styles.smallDate}>15 Апр 2020</div>
                     <Image src={imgsmall} alt="preview" className={styles.smallImg} />
                  </article>
                  <article className={styles.smallBlock}>
                     <h2 className={styles.smallTitle}>Как изменили Соника с последнего анонса </h2>
                     <div className={styles.smallDate}>15 Апр 2020</div>
                     <Image src={imgsmall} alt="preview" className={styles.smallImg} />
                  </article>
                  <article className={styles.smallBlock}>
                     <h2 className={styles.smallTitle}>Как изменили Соника с последнего анонса </h2>
                     <div className={styles.smallDate}> 15 Апр 2020</div>
                     <Image src={imgsmall} alt="preview" className={styles.smallImg} />
                  </article>
               </div>
            </div>
         </div>
      </section>
   )
}
export default News;