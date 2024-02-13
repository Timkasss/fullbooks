import Image from 'next/image';
import styles from './settings.module.scss';

import avatar from '@/public/img/personal/avatar.png';


export default function Settings() {
   return (
      <section className={styles.settings}>
         <div className={styles.head}>
            <h1 className={styles.title}>Настройки профиля</h1>
            <button className={styles.button}>Сохранить</button>
         </div>
         <div className={styles.content}>
            <div className={styles.imageWrapper}>
               <Image src={avatar} alt="avatar" className={styles.image} />
               <div className={styles.loadImage}>
                  <input type="file" placeholder='Фото профіля:' />
                  <button>Завантажити</button>
               </div>
            </div>
            <div className={styles.social}>
               <div className={styles.socialItem}>
                  <div className={`${styles.socialIcon} ${styles.socialIcon_telegram}`}></div>
                  <input type="url" className={styles.socialLink} />
               </div>
               <div className={styles.socialItem}>
                  <div className={`${styles.socialIcon} ${styles.socialIcon_youtube}`}></div>
                  <input type="url" className={styles.socialLink} />
               </div>
               <div className={styles.socialItem}>
                  < div className={`${styles.socialIcon} ${styles.socialIcon_facebook}`} ></div >
                  < input type="url" className={styles.socialLink} />
               </div >
               <div className={styles.socialItem}>
                  < div className={`${styles.socialIcon} ${styles.socialIcon_x}`}></div>
                  < input type="url" className={styles.socialLink} />
               </div >
               <div className={styles.socialItem}>
                  < div className={`${styles.socialIcon} ${styles.socialIcon_instagram}`}></div>
                  < input type="url" className={styles.socialLink} />
               </div >
            </div >
            <form className={styles.form}>
               < div className={styles.formHead}>
                  <div className={styles.formLeft}>
                     <input type="text" name='name' id={styles.name} className={styles.input} placeholder="Ім'я" />
                     <select name="sex" id={styles.sex} className={styles.input}>
                        <option value="sex">Пол</option>
                        <option value="male">Чоловічий</option>
                        <option value="female">Жіночий</option>
                     </select >
                     <select name="country" id={styles.country} className={styles.input}>
                        < option value="country" > Країна</option >
                        <option value="Ukraine">Україна</option>
                        <option value="other">Інша</option>
                     </select >
                  </div >
                  <div className={styles.formRight}>
                     < input type="text" name='surname' id={styles.surname} className={styles.input} placeholder="Прізвище" />
                     <input type="date" name='date' id={styles.date} className={styles.input} />
                     <input type="text" name='city' id={styles.city} className={styles.input} placeholder="Місто" />
                  </div>
               </div >
               <select name="genre" id={styles.genre} className={styles.input}>
                  < option value="Documentary" > Документальний</option >
                  <option value="Crime">Кримінал</option>
                  <option value="Comedy">Комедія</option>
               </select >
               <textarea name="about" id={styles.about} placeholder='Інформація про себе'></textarea>
            </form >
         </div >

      </section >
   )
}