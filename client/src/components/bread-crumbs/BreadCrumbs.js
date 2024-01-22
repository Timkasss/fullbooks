import './breadCrumbs.scss';
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthorsContext, BooksContext } from '../context';
function BreadCrumbs() {

   const { dataBooks } = useContext(BooksContext);
   const { dataAuthors } = useContext(AuthorsContext);

   const path = useLocation().pathname;
   const lastMean = path.split('/');
   const lastValue = lastMean[lastMean.length - 1];

   const book = dataBooks.find(item => item._id === lastValue);

   const author = dataAuthors.find(item => item._id === lastValue);

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
      else if (book) {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Бібліотека</Link></li>
               <li className="bread-crumbs__item">
                  <a className="bread-crumbs__link">{book.title}</a></li>
            </ol>
         )
      }
      else if (author) {
         return (
            <ol className="bread-crumbs__list">
               <li className="bread-crumbs__item">
                  <Link to={'/'} className="bread-crumbs__link">Головна</Link></li>
               <li className="bread-crumbs__item">
                  <Link to={'/library'} className="bread-crumbs__link">Бібліотека</Link></li>
               <li className="bread-crumbs__item">
                  <a className="bread-crumbs__link">{author.fullname}</a></li>
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