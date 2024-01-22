import { useState } from 'react';

import Profile from '../components/profile/Profile';
import Settings from '../components/settings/Settings';
import Friends from '../components/friends/Friends';
import MyReviews from '../components/my-reviews/MyReviews';
import ListBooks from '../components/list-books/ListBooks';
import ListPerson from '../components/list-person/ListPerson';

import '../style/personal.scss';

function Personal() {
   const [setting, setSetting] = useState(false);

   const [links] = useState(['home', 'friends', 'reviews', 'books', 'famous'])
   const [indexLink, setIndexLink] = useState(0)
   function MypageLinks() {
      switch (indexLink) {
         case 0: return setting ? <Settings /> : <Profile set={setSetting} />;
         case 1: return <Friends />;
         case 2: return <MyReviews />;
         case 3: return <ListBooks />;
         case 4: return <ListPerson />;
         default:
            return <Profile />
      }
   }

   return (
      <div className="personal">
         <div className="personal__container">
            <nav className="personal__menu">
               <ul className="personal__list">
                  {
                     links.map((link, index) => {
                        return (
                           <li className={`personal__item ${index === indexLink || (indexLink === 0 && index === 0) ? 'personal__item_active' : ''}`} key={index} onClick={() => setIndexLink(index)}>
                              <span className={`personal__link personal__link_icon_${link}`}></span>
                           </li>
                        )
                     })
                  }
               </ul>
            </nav>
            <MypageLinks />
         </div>
      </div>
   )
}

export default Personal;