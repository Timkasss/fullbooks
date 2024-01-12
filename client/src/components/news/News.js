import './news.scss';
import { Link } from 'react-router-dom';
import preview from '../../img/news/preview.png';
import imgsmall from '../../img/news/preview.png';
function News() {
   return (
      <section className="news">
         <div className="news__container">
            <div className="news__wrapper">
               <h1 className="news__title section_title">Последние новости</h1>
               <Link to={'/news'} className="news__link">Все новости</Link>
            </div>
            <div className="news__block-wrapper">
               <section className="news__main">
                  <div className="news__infa">
                     <h2 className="news__main-title">Не время умирать. Перенос релиза фильма  </h2>
                     <p className="news__main-text">Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.</p>
                  </div>
                  <img src={preview} alt="preview" className="news__main-image" />
                  <header className="news__header">
                     <div className="news__header-date">15 Апр 2020</div>
                     <span className="news__header-views">242</span>
                     <span className="news__header-commnents">14</span>
                  </header>
               </section>
               <div className="news__small-bloks-wrapper">
                  <article className="news__small-block">
                     <h2 className="news__small-title">Как изменили Соника с последнего анонса </h2>
                     <div className="news__small-date"> 15 Апр 2020</div>
                     <img src={imgsmall} alt="preview" className="news__small-img" />
                  </article>
                  <article className="news__small-block">
                     <h2 className="news__small-title">Как изменили Соника с последнего анонса </h2>
                     <div className="news__small-date">15 Апр 2020</div>
                     <img src={imgsmall} alt="preview" className="news__small-img" />
                  </article>
                  <article className="news__small-block">
                     <h2 className="news__small-title">Как изменили Соника с последнего анонса </h2>
                     <div className="news__small-date">15 Апр 2020</div>
                     <img src={imgsmall} alt="preview" className="news__small-img" />
                  </article>
                  <article className="news__small-block">
                     <h2 className="news__small-title">Как изменили Соника с последнего анонса </h2>
                     <div className="news__small-date"> 15 Апр 2020</div>
                     <img src={imgsmall} alt="preview" className="news__small-img" />
                  </article>
               </div>
            </div>
         </div>
      </section>
   )
}
export default News;