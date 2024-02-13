"use client"
import styles from './friends.module.scss';
import { useState } from 'react';
import avatar from '../../../public/img/personal/avatar.png';;
import Image from 'next/image';

export default function Friends() {

   const [close, setClose] = useState(true)
   return (
      <div className={styles.friends}>
         <div className={styles.container}>
            <div className={styles.head}>
               <h1 className={styles.title}>Ваши друзья</h1>
               <div className={styles.linksWrapper}>
                  <div className={styles.link}>
                     <div className={styles.linksName}>
                        Всего
                     </div>
                     <span className={styles.count}>15</span>
                  </div>
                  <div className={styles.link}>
                     <div className={styles.linksName}>
                        Входязие заявки
                     </div>
                     <span className={styles.count}>1</span>
                  </div>
                  <div className={styles.link}>
                     <div className={styles.linkName}>
                        Исходящие заявки
                     </div>
                     <span className={styles.count}>0</span>
                  </div>
               </div>
            </div>
            {
               close && <div className={styles.alert}>
                  <div className={styles.alertImageWrapper}>
                     <Image src={avatar} alt="avatar" className={styles.alertImage} />
                  </div>
                  <p className={styles.alertText}>Виктор Village хочет добавить вас в друзья  (2 общих друга)</p>
                  <div className={styles.alertControls}>
                     <div className={`${styles.agree} ${styles.alert_fonts}`}>Принять</div>
                     <div className={`${styles.disagree} ${styles.alert_fonts}`}>Отклонить</div>
                     <div className={`${styles.block} ${styles.alert_fonts}`}>Заблокировать</div>
                  </div >
                  <div className={styles.alertClose} onClick={() => setClose(false)}></div>
               </div >
            }

            <div className={styles.friendWrapper}>
               <div className={styles.friend}>
                  <div className={styles.friendImageWrapper}>
                     <Image src={avatar} alt="avatar" className={styles.friendImage} />
                  </div>
                  <div className={styles.friendContent}>
                     <h2 className={styles.friendName}>Dory Berg</h2>
                     <div className={styles.friendStatus}>В сети</div>
                  </div>
               </div>
               <div className={styles.friend}>
                  <div className={styles.friendImageWrapper}>
                     <Image src={avatar} alt="avatar" className={styles.friendImage} />
                  </div>
                  <div className={styles.friendContent}>
                     <h2 className={styles.friendName}>Dory Berg</h2>
                     <div className={styles.friendStatus}>В сети</div>
                  </div>
               </div >
               <div className={styles.friend}>
                  < div className={styles.friendImageWrapper} >
                     <Image src={avatar} alt="avatar" className={styles.friendImage} />
                  </div >
                  <div className={styles.friendContent}>
                     <h2 className={styles.friendName} > Dory Berg</h2 >
                     <div className={styles.friendStatus}>В сети</div>
                  </div >
               </div >
               <div className={styles.friend}>
                  < div className={styles.friendImageWrapper} >
                     <Image src={avatar} alt="avatar" className={styles.friendImage} />
                  </div >
                  <div className={styles.friendContent}>
                     <h2 className={styles.friendName} > Dory Berg</h2 >
                     <div className={styles.friendStatus}>В сети</div>
                  </div >
               </div >
               <div className={styles.friend}>
                  < div className={styles.friendImageWrapper} >
                     <Image src={avatar} alt="avatar" className={styles.friendImage} />
                  </div >
                  <div className={styles.friendContent}>
                     <h2 className={styles.friendName} > Dory Berg</h2 >
                     <div className={styles.friendStatus}>В сети</div>
                  </div >
               </div >
               <div className={styles.friend}>
                  < div className={styles.friendImageWrapper} >
                     <Image src={avatar} alt="avatar" className={styles.friendImage} />
                  </div >
                  <div className={styles.friendContent}>
                     <h2 className={styles.friendName} > Dory Berg</h2 >
                     <div className={styles.friendStatus}>В сети</div>
                  </div >
               </div >
            </div >

         </div>
      </div >
   )
}