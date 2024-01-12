import '../style/feedback.scss';

function Feedback() {
   return (
      <div className="feedback">
         <div className="feedback__container">
            <h1 className="feedback__title section_title">Обратная связь</h1>
            <p className="feedback__text">Также как дальнейшее развитие различных форм деятельности, в своём классическом представлении, допускает внедрение первоочередных требований. Современные технологии достигли такого уровня, что внедрение современных методик предполагает независимые способы реализации стандартных подходов. Сторонники тоталитаризма в науке могут быть объявлены нарушающими общечеловеческие нормы этики и морали.</p>
            <div className="feedback__links">
               <div className="feedback__link feedback__link_net_instagram">
                  Instagram
                  <p className="feedback__link-text">vk.com/kinoarea</p>
               </div>
               <div className="feedback__link feedback__link_net_facebook">
                  Facebook
                  <p className="feedback__link-text">@kinoarea</p>
               </div>
               <div className="feedback__link feedback__link_net_twitter">
                  X
                  <p className="feedback__link-text">facebook.com/groups/10525</p>
               </div>
               <div className="feedback__link feedback__link_net_telegram">
                  Telegram
                  <p className="feedback__link-text">twitter.com/Kinoarea</p>
               </div>
               <div className="feedback__link feedback__link_net_email">
                  E-mail
                  <p className="feedback__link-text">direct@kinoarea.com</p>
               </div>
            </div>
            <form action="#" className="feedback__form">
               <div className="feedback__form-header">
                  <div className="feedback__wrapper-input">
                     <label htmlFor="name" className="feedback__name">Ваше имя:</label>
                     <input type="text" id="name" className="feedback__input" placeholder="Введите ваше имя" />
                  </div>
                  <div className="feedback__wrapper-input">
                     <label htmlFor="email" className="feedback__name">E-mail:</label>
                     <input type="email" id="email" className="feedback__input" placeholder="Введите свой E-mail" />
                  </div>
                  <div className="feedback__wrapper-input">
                     <label htmlFor="number" className="feedback__name">Телефон:</label>
                     <input type="text" id="number" className="feedback__input" placeholder="Введите свой номер телефона" />
                  </div>
               </div>
               <label htmlFor="text" className="feedback__name">Ваше сообщение:</label>
               <textarea name="text" className="feedback__textarea" placeholder="Пожелания, предложения, сотрудничество и т.д."></textarea>
               <div className="feedback__button-wrapper">
                  <button className="feedback__form-button">Отправить</button>
               </div>

            </form>
         </div>
      </div>
   )
}
export default Feedback;