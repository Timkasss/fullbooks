import './friends.scss';
import { useState } from 'react';
import avatar from '../../img/personal/avatar.png';

function Friends() {

   const [close, setClose] = useState(true)
   return (
      <div className="friends">
         <div className="friends__head">
            <h1 className="friends__title">Ваши друзья</h1>
            <div className="friends__links-wrapper">
               <div className="friends__link">
                  <div className="friends__links-name">
                     Всего
                  </div>
                  <span className="friends__count">15</span>
               </div>
               <div className="friends__link">
                  <div className="friends__links-name">
                     Входязие заявки
                  </div>
                  <span className="friends__count">1</span>
               </div>
               <div className="friends__link">
                  <div className="friends__links-name">
                     Исходящие заявки
                  </div>
                  <span className="friends__count">0</span>
               </div>
            </div>
         </div>
         {
            close && <div className="friends__alert">
               <div className="friends__alert-image-wrapper">
                  <img src={avatar} alt="avatar" className="friends__alert-image" />
               </div>
               <p className="friends__alert-text">Виктор Village хочет добавить вас в друзья  (2 общих друга)</p>
               <div className="friends__alert-controls">
                  <div className="friends__agree friends__alert_fonts">Принять</div>
                  <div className="friends__disagree friends__alert_fonts">Отклонить</div>
                  <div className="friends__block friends__alert_fonts">Заблокировать</div>
               </div>
               <div className="friends__alert-close" onClick={() => setClose(false)}></div>
            </div>
         }

         <div className="friends__friend-wrapper">
            <div className="friends__friend">
               <div className="friends__friend-image-wrapper">
                  <img src={avatar} alt="avatar" className="friends__friend-image" />
               </div>
               <div className="friends__friend-content">
                  <h2 className="friends__friend-name">Dory Berg</h2>
                  <div className="friends__friend-status">В сети</div>
               </div>
            </div>
            <div className="friends__friend">
               <div className="friends__friend-image-wrapper">
                  <img src={avatar} alt="avatar" className="friends__friend-image" />
               </div>
               <div className="friends__friend-content">
                  <h2 className="friends__friend-name">Dory Berg</h2>
                  <div className="friends__friend-status">В сети</div>
               </div>
            </div>
            <div className="friends__friend">
               <div className="friends__friend-image-wrapper">
                  <img src={avatar} alt="avatar" className="friends__friend-image" />
               </div>
               <div className="friends__friend-content">
                  <h2 className="friends__friend-name">Dory Berg</h2>
                  <div className="friends__friend-status">В сети</div>
               </div>
            </div>
            <div className="friends__friend">
               <div className="friends__friend-image-wrapper">
                  <img src={avatar} alt="avatar" className="friends__friend-image" />
               </div>
               <div className="friends__friend-content">
                  <h2 className="friends__friend-name">Dory Berg</h2>
                  <div className="friends__friend-status">В сети</div>
               </div>
            </div>
            <div className="friends__friend">
               <div className="friends__friend-image-wrapper">
                  <img src={avatar} alt="avatar" className="friends__friend-image" />
               </div>
               <div className="friends__friend-content">
                  <h2 className="friends__friend-name">Dory Berg</h2>
                  <div className="friends__friend-status">В сети</div>
               </div>
            </div>
            <div className="friends__friend">
               <div className="friends__friend-image-wrapper">
                  <img src={avatar} alt="avatar" className="friends__friend-image" />
               </div>
               <div className="friends__friend-content">
                  <h2 className="friends__friend-name">Dory Berg</h2>
                  <div className="friends__friend-status">В сети</div>
               </div>
            </div>
         </div>


      </div>
   )
}

export default Friends;