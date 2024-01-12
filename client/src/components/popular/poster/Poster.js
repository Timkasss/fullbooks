import { useState } from 'react';
import { Link } from 'react-router-dom';
import './poster.scss';

function Poster({ books, index }) {
   const [hover, setHover] = useState(false)

   let poster = books.volumeInfo.imageLinks.thumbnail;
   let categories = books.volumeInfo.categories;
   let name = books.volumeInfo.title;

   return (
      <article className="film-poster">
         <h1 className="film-poster__name">{name}</h1>
         <div className="film-poster__poster-wrapper poster-hover"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            {hover &&
               <div className="film-poster__hover-background poster-hover__background">
                  <Link to={`/library/${index}`} className="film-poster__hover-button poster-hover__button">Карточка книги</Link>
               </div>
            }
            <img src={poster} alt="poster" className="film-poster__poster" />
         </div>
         <p className="film-poster__genre">{categories}</p>
         <div className="film-poster__rating">8.50</div>

      </article>
   );
}

export default Poster;
