
import './bookPerson.scss';
import { BooksContext } from '../context';
import { useContext } from 'react';
import Slider from '../slider/Slider';
function BookPerson() {

   const { dataBooks, setDataBooks } = useContext(BooksContext);

   const slide = dataBooks.slice(0, 9);
   return (
      <section className="book-person">
         <div className="book-person__container">
            <h1 className="book-person__title section_title">Книги</h1>
            <Slider books={slide} />
         </div>
      </section>
   )
}
export default BookPerson;