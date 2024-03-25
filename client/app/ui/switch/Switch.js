"use client"
import { useState } from 'react';
import styles from './switch.module.scss';
export default function Switch({ author }) {

   const [pickInfa, setPickInfa] = useState(true)
   return (
      <div className={styles.informationWrapper}>
         <div className={styles.switch}>
            <div
               onClick={() => setPickInfa(true)}
               className={`${styles.switchInformation} ${pickInfa ? styles.pagePerson_switch_active : ''}`}
            >
               Информация</div>
            <div
               onClick={() => setPickInfa(false)}
               className={`${styles.switchBiography} ${!pickInfa ? styles.pagePerson_switch_active : ''}`}
            >Биография</div>
         </div>
         <div className={`${styles.personInfoWrapper} ${pickInfa ? styles.personInfoWrapper_visible : ''}`}>
            <table id={styles.personInfo} >
               <tbody>
                  <tr>
                     <th>Рід діяльності</th>
                     <td>{author.typeactivity}</td>
                  </tr>
                  <tr>
                     <th>Направлення</th>
                     <td>{author.direction}</td>
                  </tr>
                  <tr>
                     <th>Дата народження</th>
                     <td>{author.birthday}</td>
                  </tr>
                  <tr>
                     <th>Місце народження</th>
                     <td>{author.placeofbirth}</td>
                  </tr>
                  <tr>
                     <th>Жанри</th>
                     <td>{author.genre}</td>
                  </tr>
                  <tr>
                     <th>Мова творів</th>
                     <td>{author.languageworks}</td>
                  </tr>
                  <tr>
                     <th>Дата смерті</th>
                     <td>{author.deathdate}</td>
                  </tr>
                  <tr>
                     <th>Місце смерті</th>
                     <td>{author.placeofdeath}</td>
                  </tr>
                  <tr>
                     <th>Всего книг</th>
                     <td>невідомо</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className={`${styles.biography} ${!pickInfa ? styles.biographyVisible : ''}`}>
            <p className={styles.biographyText}>
               Каждый из нас понимает очевидную вещь: постоянное информационно-пропагандистское обеспечение нашей деятельности играет определяющее значение для вывода текущих активов.
            </p>
            <p className={styles.biographyText}>
               Безусловно, реализация намеченных плановых заданий в значительной степени обусловливает важность новых принципов формирования материально-технической и кадровой базы. Приятно, граждане, наблюдать, как базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, ассоциативно распределены по отраслям.
            </p>
         </div>
      </div>
   )
}