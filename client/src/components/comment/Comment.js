import './comment.scss';
import avatar from '../../img/page-person/person.png';

function Comment() {
   return (
      <div className="comment">
         <div className="comment__sent">
            <div className="comment__header">
               <div className="comment__sent-photo">
                  <img src={avatar} alt="avatar" className="comment__img" />
               </div>
               <div className="comment__sent-content">
                  <h1 className="comment__name">Евгений Баженов</h1>
                  <a href="#" className="comment__link">Мой профиль</a>
               </div>
            </div>
            <form action="#" className="comment__form">
               <textarea name="comment" id="write-comment" rows="10" className="comment__write" placeholder="Оставьте свой комментарий"></textarea>
               <button className="comment__get-comment">Отправить комментарий</button>
            </form>
         </div>
         <div className="comment-done-wrapper">
            <div className="comment-done">
               <div className="comment-done__image-wrapper">
                  <img src={avatar} alt="avatar" className="comment-done__image" />
               </div>
               <div className="comment-done__content">
                  <div className="comment-done__content-header">
                     <h1 className="comment-done__name">Lerata</h1>
                     <div className="comment-done__date">14 апреля 2020 | 09:59</div>
                  </div>
               </div>
               <div className="comment-done__text-wrapper">
                  <p className="comment-done__text">Самый классный акёр из всех!! Смотрю фильмы только с его участием!</p>
               </div>
               <div className="comment-done__grade-wrapper">
                  <div className="comment-done__grade">
                     <div className="comment-done__like"></div>
                     <span className="comment-done__count">14</span>
                  </div>
                  <div className="comment-done__grade">
                     <div className="comment-done__dislike"></div>
                     <span className="comment-done__count">1</span>
                  </div>
               </div>
            </div>
            <div className="comment-done">
               <div className="comment-done__image-wrapper">
                  <img src={avatar} alt="avatar" className="comment-done__image" />
               </div>
               <div className="comment-done__content">
                  <div className="comment-done__content-header">
                     <h1 className="comment-done__name">Lerata</h1>
                     <div className="comment-done__date">14 апреля 2020 | 09:59</div>
                  </div>
               </div>
               <div className="comment-done__text-wrapper">
                  <p className="comment-done__text">Самый классный акёр из всех!! Смотрю фильмы только с его участием!</p>
               </div>
               <div className="comment-done__grade-wrapper">
                  <div className="comment-done__grade">
                     <div className="comment-done__like"></div>
                     <span className="comment-done__count">14</span>
                  </div>
                  <div className="comment-done__grade">
                     <div className="comment-done__dislike"></div>
                     <span className="comment-done__count">1</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Comment;