"use client"
import { useEffect } from 'react';
import styles from './education.module.scss';
import Slider from '../slider/Slider';
//import { write } from '@/app/lib/books-data';
import img from '@/public/img/frontBooks/dni.png'

export default function Education({ books }) {
   // useEffect(() => {
   //    async function author() {
   //       try {
   //          const formData = new FormData();
   //          let imag = await fetch(img);
   //          let blob = await imag.blob();
   //          formData.append('fullname', 'item.fullname');
   //          formData.append('birthday', 'item.birthday');
   //          formData.append('placeofbirth', 'item.placeofbirth');
   //          formData.append('deathdate', 'item.deathdate');
   //          formData.append('placeofdeath', 'item.placeofdeath');
   //          formData.append('typeactivity', 'item.typeactivity');
   //          formData.append('direction', 'item.direction');
   //          formData.append('genre', 'item.genre');
   //          formData.append('languageworks', 'item.languageworks');
   //          formData.append('image', blob);

   //          let response = await fetch('http://localhost:4000/authors', {
   //             method: 'POST',
   //             body: formData

   //          });
   //          if (response.ok) {
   //             console.log('Данные об авторах успешно отправлены');
   //          } else {
   //             console.error('Ошибка при отправке данных об авторах:', response.status, response.statusText);
   //          }
   //       } catch (error) {
   //          console.error('Произошла ошибка:', error);
   //       }
   //    }

   //    author()
   // })
   return (
      <section className={styles.education}>
         <div className={styles.container} >
            <h1 className={`${styles.title} ${styles.section_title}`}>Освіта</h1>

            <Slider books={books} />

         </div>
      </section>
   )
}