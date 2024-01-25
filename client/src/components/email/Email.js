import './email.scss';

function Email() {
   return (
      <section className="email">
         <div className="email__container">
            <div className="email__background">
               <div className="email__content">
                  <h1 className="email__title">Подпишитесь на E-mail рассылку</h1>
                  <p className="email__text">Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку! </p>
                  <form className="email__form">
                     <div className="email__form-header">
                        <input type="text" className="email__form-input" placeholder="Введите свой E-mail адрес" />
                        <button className="email__form-button">Подписаться</button>
                     </div>
                     <div className="email__checkbox-wrapper">
                        <input id='ckeckbox' type="checkbox" className='email__checkbox' />
                        <label className='email__checkbox-label' htmlFor="ckeckbox">
                           Соглашаюсь на условия
                        </label>
                        <a href="#" className='email__checkbox-link'>политики конфиденциальности</a>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Email;