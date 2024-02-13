
import styles from './education.module.scss';
import Slider from '../slider/Slider';
import { books } from '@/app/lib/placeholder-data';
export default function Education() {

   return (
      <section className={styles.education}>
         <div className={styles.container} >
            <h1 className={`${styles.title} ${styles.section_title}`}>Освіта</h1>

            <Slider books={books} />

         </div>
      </section>
   )
}