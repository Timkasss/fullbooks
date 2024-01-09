import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './author.scss';
import author from '../../img/authors/author.png';
import BreadCrumbs from '../bread-crumbs/BreadCrumbs';

function Author({ authors, index }) {
   const [hover, setHover] = useState(false)

   return (
      <article className="author">
         <h1 className="author__name">{authors.name}</h1>
         <div className="author__poster-wrapper poster-hover"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            {hover &&
               <div className="author__hover-background author-hover__background">
                  <Link to={`/authors/${index}`} className="author__hover-button author-hover__button">Карточка персоны</Link>
               </div>
            }
            <img src={author} alt="poster" className="author__poster" />
         </div>

      </article>
   );
}

export default Author;
