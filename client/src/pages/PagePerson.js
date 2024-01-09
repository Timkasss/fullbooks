import { useContext, useState } from 'react';

import '../style/pagePerson.scss';
import BreadCrumbs from '../components/bread-crumbs/BreadCrumbs';
import person from '../img/page-person/person.png';
import award1 from '../img/page-person/award1.png';
import award2 from '../img/page-person/award2.png';
import award3 from '../img/page-person/award3.png';
import BookPerson from '../components/book-person/BookPerson';
import Gallery from '../components/gallery/Gallery';
import Comment from '../components/comment/Comment';

import { AuthorsContext } from '../components/context';
import { useLocation } from 'react-router-dom';
function PagePerson() {
   const path = useLocation().pathname;
   const lastMean = path.split('/');
   const lastValue = parseInt(lastMean[lastMean.length - 1]);
   const [pickInfa, setPickInfa] = useState(true);
   const authors = useContext(AuthorsContext)

   return (

      <div className="page-person-wrapper__container">
         <section className="page-person">
            <div className="page-person__container-small">
               <div className="page-person__header-wrapper">
                  <BreadCrumbs author={authors} />
                  <div className="page-person__social">
                     <a href="#" className="page-person__social-telegram">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                     </a>
                     <a href="#" className="page-person__social-twitter">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                     </a>
                  </div>
                  <h1 className="page-person__header-title">{authors[lastValue].name}</h1>
                  <p className="page-person__header-subtitle">{authors[lastValue].name}</p>
               </div>
               <div className="page-person__wrapper-img">
                  <img src={person} alt="person" className="page-person__image" />
               </div>
               <div className="page-person__information-wrapper">
                  <div className="page-person__switch">
                     <div
                        onClick={() => setPickInfa(true)}
                        className={`page-person__switch-information ${pickInfa ? 'page-person_switch_active' : ''}`}
                     >
                        Информация</div>
                     <div
                        onClick={() => setPickInfa(false)}
                        className={`page-person__switch-biography ${!pickInfa ? 'page-person_switch_active' : ''}`}
                     >Биография</div>
                  </div>
                  <div className={`person-info-wrapper ${pickInfa ? 'person-info-wrapper_visible' : ''}`}>
                     <table id="person-info" >
                        <tbody>
                           <tr>
                              <th>Карера</th>
                              <td>Писатель</td>
                           </tr>
                           <tr>
                              <th>Рост</th>
                              <td>1.83</td>
                           </tr>
                           <tr>
                              <th>Дата рождения</th>
                              <td>11 ноября 1974</td>
                           </tr>
                           <tr>
                              <th>Место рождения</th>
                              <td>Украина</td>
                           </tr>
                           <tr>
                              <th>Жанры</th>
                              <td>Драма</td>
                           </tr>
                           <tr>
                              <th>Всего книг</th>
                              <td>200</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div className={`page-person__biography ${!pickInfa ? 'page-person__biography_visible' : ''}`}>
                     <p className="page-person__biography-text">
                        Каждый из нас понимает очевидную вещь: постоянное информационно-пропагандистское обеспечение нашей деятельности играет определяющее значение для вывода текущих активов.
                     </p>
                     <p className="page-person__biography-text">
                        Безусловно, реализация намеченных плановых заданий в значительной степени обусловливает важность новых принципов формирования материально-технической и кадровой базы. Приятно, граждане, наблюдать, как базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, ассоциативно распределены по отраслям.
                     </p>
                  </div>
               </div>
               <div className="page-person__favorites">
                  <div className="page-person__favorites-button"></div>
                  В избранном у 37933 человек
               </div>
            </div>
         </section>
         <div className="award">
            <div className="award__item">
               <div className="award__img-wrapper">
                  <img src={award1} alt="award" className="award__img" />
               </div>
               <div className="award__content">
                  <span className='award__title'>Оскар</span>
                  <div className="award__text">Лучшая мужская роль</div>
                  <div className="award__year">2020</div>
               </div>
            </div>
            <div className="award__item">
               <div className="award__img-wrapper">
                  <img src={award2} alt="award" className="award__img" />
               </div>
               <div className="award__content">
                  <span className='award__title'>Оскар</span>
                  <div className="award__text">Лучшая мужская роль</div>
                  <div className="award__year">2020</div>
               </div>
            </div>
            <div className="award__item">
               <div className="award__img-wrapper">
                  <img src={award3} alt="award" className="award__img" />
               </div>
               <div className="award__content">
                  <span className='award__title'>Оскар</span>
                  <div className="award__text">Лучшая мужская роль</div>
                  <div className="award__year">2020</div>
               </div>
            </div>
            <div className="award__item">
               <div className="award__img-wrapper">
                  <img src={award3} alt="award" className="award__img" />
               </div>
               <div className="award__content">
                  <span className='award__title'>Оскар</span>
                  <div className="award__text">Лучшая мужская роль</div>
                  <div className="award__year">2020</div>
               </div>
            </div>
         </div>
         <BookPerson />
         <Gallery />
         <Comment />
      </div>

   )
}

export default PagePerson;