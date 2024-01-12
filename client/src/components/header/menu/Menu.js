import './menu.scss'
import { Link } from 'react-router-dom';

function Menu() {
   return (
      <nav className="menu">
         <ul className="menu__list">
            <li className="menu__item menu__item_hover">
               <Link to={'/'} className="menu__link">Головна</Link>
            </li>
            <li className="menu__item menu__item_hover">
               <Link to={'/library'} className="menu__link">Бібліотека</Link>
            </li>
            <li className="menu__item menu__item_hover">
               <Link to="/authors" className="menu__link">Автори</Link>
            </li>
            <li className="menu__item menu__item_hover">
               <Link to={'news'} className="menu__link">Статті</Link>
            </li>
            {/* <li className="menu__item menu__item_hover">
               <a href="#" className="menu__link">Пошук</a>
            </li> */}
         </ul>
      </nav>
   )
}

export default Menu;