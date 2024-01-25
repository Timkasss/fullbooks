import '../style/personal.scss';
import { useRef, useState } from 'react';
import Profile from '../components/profile/Profile';
import Settings from '../components/settings/Settings';
import Friends from '../components/friends/Friends';
import MyReviews from '../components/my-reviews/MyReviews';
import ListBooks from '../components/list-books/ListBooks';
import ListPerson from '../components/list-person/ListPerson';

function Personal() {
   const [setting, setSetting] = useState(false);

   const active = useRef();

   function onActive(event) {
      let block = event.target.parentElement;
      let target = block.parentElement.closest('.personal__item_active');

      let list = active.current.children;

      Array.from(list).forEach((item) => {
         item.classList.remove('personal__item_active');
      })

      if (!target) {
         block.classList.add('personal__item_active')
      }
   }

   return (
      <div className="personal">
         <div className="personal__container">
            <nav className="personal__menu">
               <ul className="personal__list" ref={active} onClick={onActive}>
                  <li className='personal__item personal__item_active'>
                     <a href="#" className="personal__link personal__link_icon_home"></a>
                  </li>
                  <li className='personal__item'>
                     <a href="#" className="personal__link personal__link_icon_friends"></a>
                  </li>
                  <li className='personal__item'>
                     <a href="#" className="personal__link personal__link_icon_reviews"></a>
                  </li>
                  <li className='personal__item'>
                     <a href="#" className="personal__link personal__link_icon_comment"></a>
                  </li>
                  <li className='personal__item'>
                     <a href="#" className="personal__link personal__link_icon_books"></a>
                  </li>
                  <li className='personal__item'>
                     <a href="#" className="personal__link personal__link_icon_famous"></a>
                  </li>
               </ul>
            </nav>
            {
               setting ? <Settings /> : <Profile set={setSetting} />
            }
            {/* <Friends /> */}
            {/* <MyReviews /> */}
            {/* <ListBooks /> */}
            {/* <ListPerson /> */}

         </div>
      </div>
   )
}

export default Personal;