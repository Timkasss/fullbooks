import '../style/erros.scss';
import { Link } from 'react-router-dom';

function Error() {
   return (
      <div className="error">
         <div className="error__container">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Сторінка відсутня</p>
            <p className="error__text">Возможно, данного адреса страницы не сущетсвует, или странциа была перемещена.</p>
            <div className="error__buttons-wrapper">
               <Link to={'/'} className="error__back">Вернуться на главную</Link>
               <a href="#" className="error__search">Поиск по сайту</a>
            </div>
         </div>
      </div>
   )
}
export default Error;