import './breadCrumbs.scss';
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { BooksContext } from '../context';
function BreadCrumbs({ author }) {

   const { dataBooks } = useContext(BooksContext);

   const path = useLocation().pathname;
   const lastMean = path.split('/');
   const lastValue = parseInt(lastMean[lastMean.length - 1]);

   const name = dataBooks.find(item => item.id === lastValue);
   const authorItem = author?.find(item => item.id === lastValue);

   function breadCrumbs() {
      if (path === '/library') {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Бібліотека</Link></li>
            </ol>
         )
      } else if (path === '/news') {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Статті</Link></li>
            </ol>
         )
      }
      else if (path === '/authors') {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/authors'} className="bread-crumbs__link">Автори</Link></li>
            </ol>
         )
      }
      else if (lastValue === name?.id) {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Бібліотека</Link></li>
               <li className="bread-crumbs__item">
                  <a className="bread-crumbs__link">{name.volumeInfo.title}</a></li>
            </ol>
         )
      }
      else if (lastValue === authorItem?.id) {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Бібліотека</Link></li>
               <li className="bread-crumbs__item">
                  <a className="bread-crumbs__link">{authorItem.name}</a></li>
            </ol>
         )
      }

   }

   return (
      <nav className="bread-crumbs">
         {breadCrumbs()}
      </nav>
   )
}
export default BreadCrumbs;