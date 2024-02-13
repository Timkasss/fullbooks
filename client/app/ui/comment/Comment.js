import styles from './comment.module.scss';
import avatar from '../../../public/img/page-person/person.png';
import Image from 'next/image';

export default function Comment() {
   return (
      <div className={styles.comment}>
         <div className={styles.sent}>
            <div className={styles.header}>
               <div className={styles.sentPhoto}>
                  <Image
                     src={avatar}
                     width={800}
                     height={1200}
                     alt="avatar" className={styles.img} />
               </div>
               <div className={styles.sentContent}>
                  <h1 className={styles.name}>Евгений Баженов</h1>
                  <a href="#" className={styles.link}>Мой профиль</a>
               </div>
            </div>
            <form action="#" className={styles.form}>
               <textarea name="comment" id={styles.writeComment} rows="10" className={styles.write} placeholder="Оставьте свой комментарий"></textarea>
               <button className={styles.getComment}>Отправить комментарий</button>
            </form>
         </div>
         <div className={styles.commentDoneWrapper}>
            <div className={styles.commentDone}>
               <div className={styles.imageWrapper}>
                  <Image
                     src={avatar}
                     width={800}
                     height={1200}
                     alt="avatar" className={styles.image} />
               </div>
               <div className={styles.content}>
                  <div className={styles.contentHeader}>
                     <h1 className={styles.name}>Lerata</h1>
                     <div className={styles.date}>14 апреля 2020 | 09:59</div>
                  </div>
               </div>
               <div className={styles.textWrapper}>
                  <p className={styles.text}>Самый классный акёр из всех!! Смотрю фильмы только с его участием!</p>
               </div>
               <div className={styles.gradeWrapper}>
                  <div className={styles.grade}>
                     <div className={styles.like}></div>
                     <span className={styles.count}>14</span>
                  </div>
                  <div className={styles.grade}>
                     <div className={styles.dislike}></div>
                     <span className={styles.count}>1</span>
                  </div>
               </div>
            </div>
            <div className={styles.commentDone}>
               <div className={styles.imageWrapper}>
                  <Image
                     src={avatar}
                     width={800}
                     height={1200}
                     alt="avatar" className={styles.image} />
               </div>
               <div className={styles.content}>
                  <div className={styles.contentHeader}>
                     <h1 className={styles.name}>Lerata</h1>
                     <div className={styles.date}>14 апреля 2020 | 09:59</div>
                  </div>
               </div>
               <div className={styles.textWrapper}>
                  <p className={styles.text}>Самый классный акёр из всех!! Смотрю фильмы только с его участием!</p>
               </div>
               <div className={styles.gradeWrapper}>
                  <div className={styles.grade}>
                     <div className={styles.like}></div>
                     <span className={styles.count}>14</span>
                  </div>
                  <div className={styles.grade}>
                     <div className={styles.dislike}></div>
                     <span className={styles.count}>1</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}