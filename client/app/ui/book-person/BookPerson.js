
import styles from './bookPerson.module.scss';
import Slider from '../slider/Slider';
import { loadBooks } from '@/app/lib/load-date';
export default async function BookPerson() {
   const books = await loadBooks();
   return (
      <section className={styles.bookPerson}>
         <div className={styles.container}>
            <h1 className={`${styles.title} ${styles.section_title}`}>Книги</h1>
            <Slider books={books} />
         </div>
      </section>
   )
}
