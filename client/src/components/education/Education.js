import { useContext } from 'react';

import { BooksContext } from '../context';
import './education.scss';
import Slider from '../slider/Slider';

function Education() {
   const { dataBooks, setDataBooks } = useContext(BooksContext);
   const slides = dataBooks.slice(4, 12);



   return (
      <section className="education">
         <div className="education__container">
            <h1 className="education__title section_title">Освіта</h1>

            <Slider books={slides} />

         </div>
      </section >
   )
}
export default Education;