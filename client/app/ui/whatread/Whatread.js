//import Poster from '../popular/poster/Poster';
import styles from './whatread.module.scss';

// import { BooksContext } from '../context';
// import { useContext } from 'react';
import Slider from '../slider/Slider';

export default function Whatread({ books }) {

   // const { dataBooks, setDataBooks } = useContext(BooksContext);

   // const slide = dataBooks.slice(0, 9);
   return (
      <section className={styles.whatRead}>
         <div className={styles.container}>
            <h1 className={`${styles.title} ${styles.section_title}`}>Що почитати?</h1>
            <Slider books={books} />
         </div>
      </section>
   )
}