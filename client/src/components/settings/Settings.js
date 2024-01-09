import './settings.scss';

import avatar from '../../img/personal/avatar.png';


function Settings() {
   return (
      <section className="settings">
         <div className="settings__head">
            <h1 className="settings__title">Настройки профиля</h1>
            <button className="settings__button">Сохранить</button>
         </div>
         <div className="settings__content">
            <div className="settings__image-wrapper">
               <img src={avatar} alt="avatar" className="settings__image" />
               <div className="settings__load-image">
                  <input type="file" placeholder='Фото профіля:' />
                  <button>Завантажити</button>
               </div>
            </div>
            <div className="settings__social">
               <div className="settings__social-item">
                  <div className="settings__social-icon settings__social-icon_telegram"></div>
                  <input type="url" className='settings__social-link' />
               </div>
               <div className="settings__social-item">
                  <div className="settings__social-icon settings__social-icon_youtube"></div>
                  <input type="url" className='settings__social-link' />
               </div>
               <div className="settings__social-item">
                  <div className="settings__social-icon settings__social-icon_facebook"></div>
                  <input type="url" className='settings__social-link' />
               </div>
               <div className="settings__social-item">
                  <div className="settings__social-icon settings__social-icon_x"></div>
                  <input type="url" className='settings__social-link' />
               </div>
               <div className="settings__social-item">
                  <div className="settings__social-icon settings__social-icon_instagram"></div>
                  <input type="url" className='settings__social-link' />
               </div>
            </div>
            <form className="settings__form">
               <div className="settings__form-head">
                  <div className="settings__form-left">
                     <input type="text" name='name' id='name' className='settings__input' placeholder="Ім'я" />
                     <select name="sex" id="sex" className='settings__input'>
                        <option value="sex">Пол</option>
                        <option value="male">Чоловічий</option>
                        <option value="female">Жіночий</option>
                     </select>
                     <select name="country" id="country" className='settings__input'>
                        <option value="country">Країна</option>
                        <option value="Ukraine">Україна</option>
                        <option value="other">Інша</option>
                     </select>
                  </div>
                  <div className="settings__form-right">
                     <input type="text" name='surname' id='surname' className='settings__input' placeholder="Прізвище" />
                     <input type="date" name='date' id='date' className='settings__input' />
                     <input type="text" name='city' id='city' className='settings__input' placeholder="Місто" />
                  </div>
               </div>
               <select name="genre" id="genre" className='settings__input'>
                  <option value="Documentary">Документальний</option>
                  <option value="Crime">Кримінал</option>
                  <option value="Comedy">Комедія</option>
               </select>
               <textarea name="about" id="about" placeholder='Інформація про себе'></textarea>
            </form>
         </div>

      </section>
   )
}
export default Settings;