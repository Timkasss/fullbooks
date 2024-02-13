
import styles from './bookPerson.module.scss';
import Slider from '../slider/Slider';
function BookPerson({ books }) {
   return (
      <section className={styles.bookPerson}>
         <div className={styles.container}>
            <h1 className={`${styles.title} ${styles.section_title}`}>Книги</h1>
            <Slider books={books} />
         </div>
      </section>
   )
}
export default BookPerson;